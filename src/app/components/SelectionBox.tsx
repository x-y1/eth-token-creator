"use client"
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { Checkbox, FormControlLabel, FormGroup, Divider, TextField } from "@mui/material";
import { selectFeature } from "../store/featuresSlice";
import {  updateContract } from '../store/contractSlice';
import { updateConstructor } from '../store/constructorSlice';
import { compile } from "../store/solcc/compiler";
const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'white' },
        '&:hover fieldset': { borderColor: 'white' },
        '&.Mui-focused fieldset': { borderColor: 'white' },
    },
    '& .MuiInputLabel-root': { color: 'white' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
    input: { color: 'white' },
    marginTop: '20px'
};

export default function SelectionBox() {
    const dispatch = useDispatch();
    const features = useSelector((state: RootState) => state.features.features);
    const constructorState = useSelector((state: RootState) => state.constructor);
    const contract = useSelector((state: RootState) => state.contract.contract);
    const handleCheck = (feature: string) => {
        const updatedFeatureValue = !features[feature];
        dispatch(selectFeature({ key: feature, value: updatedFeatureValue }));

        const updatedFeatures = {
            mintable: features.mintable,
            burnable: features.burnable,
            pausable: features.pausable,
            [feature]: updatedFeatureValue,
        };

        dispatch(updateContract({
            features: updatedFeatures,
            constructor: constructorState
        }));
    };
    const handleConstructorChange = (key: string, value: string | number) => {
        dispatch(updateConstructor({ [key]: value }));

        const updatedConstructor = {
            tokenName: constructorState.tokenName,
            symbol: constructorState.symbol,
            initialSupply: constructorState.initialSupply,
            [key]: value
        }
        dispatch(updateContract({
            features: {
                mintable: features.mintable,
                burnable: features.burnable,
                pausable: features.pausable
            },
            constructor: updatedConstructor
        }))
    }
    console.log(contract)
    compile(contract)
    .then((contracts) => {
        console.log("Compiled contracts: ", contracts);
    })
    .catch((error) => {
        console.error("Compilation failed: ", error);
    });
    return (
        <Grid container direction='column' spacing={3} className='h-full'>
            <Grid container justifyContent='center' alignItems='center' className='h-[10%]'>
                Select Features
            </Grid>
            <Grid size={{}} className='px-12'>
                <FormGroup>
                    {Object.keys(features).map((feature) => (
                        <FormControlLabel
                            key={feature}
                            label={feature}
                            control={
                                <Checkbox
                                    checked={features[feature]}
                                    onChange={() => handleCheck(feature)}
                                    color="primary"
                                    sx={{
                                        color: "white",
                                        '&.Mui-checked': {
                                            color: "white",
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 36,
                                        }
                                    }}
                                />
                            }
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontFamily: 'var(--font-geist-mono, monospace)',
                                    fontSize: '24px'
                                },
                            }}
                        />
                    ))}
                </FormGroup>
            </Grid>
            <Divider variant="fullWidth" className="opacity-100 bg-black" />
            <Grid sx={{}}>
                Info
                {[
                    { label: "Token Name", key: "tokenName", value:  constructorState.tokenName  },
                    { label: "Token Symbol", key: "symbol", value: constructorState.symbol },
                    { label: "Initial Supply", key: "initialSupply", value: constructorState.initialSupply, type: "number" },
                ].map(({ label, key, value, type }) => (
                    <Grid key={key}>
                        <TextField
                            label={label}
                            value={value}
                            type={type}
                            onChange={(e) => handleConstructorChange(key, type === 'number' ? Number(e.target.value) : e.target.value)}
                            fullWidth
                            sx={textFieldStyles}
          
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

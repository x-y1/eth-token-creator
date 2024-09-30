"use client"
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { Checkbox, FormControlLabel, FormGroup, Divider, TextField } from "@mui/material";
import { selectFeature } from "../store/featuresSlice";
import { updateContract } from '../store/contractSlice';
import { updateConstructor } from '../store/constructorSlice';
export default function SelectionBox() {
    const dispatch = useDispatch();
    const features = useSelector((state: RootState) => state.features.features);
    const constructorState = useSelector((state: RootState) => state.constructor);
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
            name: constructorState.name,
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
            <Grid>
                Info
                <Grid  >
                    <TextField
                        label="Token Name"
                        value={constructorState.name}
                        onChange={(e) => handleConstructorChange("name", e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid >
                    <TextField
                        label="Token Symbol"
                        value={constructorState.symbol}
                        onChange={(e) => handleConstructorChange("symbol", e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid >
                    <TextField
                        label="Initial Supply"
                        type="number"
                        value={constructorState.initialSupply}
                        onChange={(e) => handleConstructorChange("initialSupply", Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

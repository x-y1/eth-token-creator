"use client"
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { Checkbox, FormControlLabel, FormGroup, Divider } from "@mui/material";
import { selectFeature } from "../store/featuresSlice";
export default function SelectionBox() {
    const dispatch = useDispatch();
    const features = useSelector((state: RootState) => state.features.features);
    const handleCheck = (feature: string) => {
        dispatch(selectFeature({ key: feature, value: !features[feature] }))
    }
    return (
        <Grid container direction='column' spacing={4} className='h-full'>
            <Grid container justifyContent='center' alignItems='center' className='h-[10%]'>
                Select Features
            </Grid>
            <Grid size={{  }} className='p-8'>
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
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </Grid>
            <Divider variant="fullWidth" className="opacity-100 bg-black"/>
            <Grid>
                Info
            </Grid>
        </Grid>
    );
}

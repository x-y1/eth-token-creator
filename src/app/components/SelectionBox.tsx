"use client"
import Grid from "@mui/material/Grid2";
import { useSelector } from 'react-redux';
import { RootState } from "../store";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
export default function SelectionBox() {
    const features = useSelector((state: RootState) => state.features.features);
    return (
        <Grid container direction='column' spacing={4} className='h-full'>
            <Grid container justifyContent='center' alignItems='center' className='h-[10%]'>
                Select Features
            </Grid>
            <Grid size={{ xs: 'grow' }} className='p-8'>
                <FormGroup>
                    {Object.keys(features).map((feature) => (
                        <FormControlLabel
                            key={feature}
                            label={feature}
                            control={
                                <Checkbox
                                    checked={features[feature]}
                                    color="primary"
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </Grid>
        </Grid>
    );
}

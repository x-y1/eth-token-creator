import Grid from "@mui/material/Grid2";

export default function Deployer() {
  return (
    <Grid container spacing={4} columns={12} flexGrow={1} className='border border-blue-800 h-5/6 m-8'>
      <Grid size={{xs: 3 }} className='border border-white'>

      </Grid>
      <Grid size={{xs: 'grow' }} className='border border-white'>

      </Grid>
      <Grid size={{xs: 3}} className='border border-white'>

      </Grid>
    </Grid>
  );
}

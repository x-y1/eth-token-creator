import Grid from "@mui/material/Grid2";


export default function Navbar() {
  return (
    <Grid container spacing={4} columns={12} flexGrow={1} className='border border-blue-800 h-full'>
      <Grid container size={{ xs: 3 }} justifyContent='center' alignItems='center' className='border border-white'>
        <w3m-network-button />
      </Grid>
      <Grid container size={{ xs: 'grow' }} justifyContent='center' alignItems='center' className='border border-white'>
        ETH TOKEN CREATOR
      </Grid>
      <Grid container size={{ xs: 3 }} justifyContent='center' alignItems='center' className='border border-white'>
        <w3m-button />
      </Grid>
    </Grid>
  );
}

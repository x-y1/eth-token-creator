import Grid from "@mui/material/Grid2";


export default function Navbar() {
  return (
    <Grid container columns={12} flexGrow={1} justifyContent='space-evenly' alignItems='center' className='border border-blue-800 h-full'>
      <Grid container  justifyContent='center' alignItems='center' className='border border-white w-1/3'>
        <w3m-network-button />
      </Grid>
      <Grid container  justifyContent='center' alignItems='center' className='border border-white w-1/3'>
        ETH TOKEN CREATOR
      </Grid>
      <Grid container  justifyContent='center' alignItems='center' className='border border-white w-1/3'>
        <w3m-button />
      </Grid>
    </Grid>
  );
}

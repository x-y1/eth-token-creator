import Grid from "@mui/material/Grid2";


export default function Navbar() {
  return (
    <Grid container columns={12} flexGrow={1} justifyContent='space-evenly' alignItems='center' className='h-full m-4 border border-black bg-gray-800 bg-opacity-40'>
      <Grid container  justifyContent='center' alignItems='center' className='w-1/3'>
        <w3m-network-button />
      </Grid>
      <Grid container  justifyContent='center' alignItems='center' className='w-1/3'>
        ETH TOKEN CREATOR
      </Grid>
      <Grid container  justifyContent='center' alignItems='center' className='w-1/3'>
        <w3m-button />
      </Grid>
    </Grid>
  );
}

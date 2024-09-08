import Grid from "@mui/material/Grid2";

export default function ContractBox() {
  return (
    <Grid container spacing={4}  direction='column' className='border border-blue-800 h-5/6 m-8'>
      <Grid container justifyContent='center' alignItems='center' className='border border-white h-[10%]'>
        Token Contract
      </Grid>
      <Grid size={{xs: 'grow' }} className='border border-white'>

      </Grid>
    </Grid>
  );
}

import Grid from "@mui/material/Grid2";

export default function ContractBox() {
  return (
    <Grid container spacing={4}  direction='column' className='h-5/6 m-8 border border-black bg-gray-800 bg-opacity-40'>
      <Grid container justifyContent='center' alignItems='center' className='h-[10%]'>
        Token Contract
      </Grid>
      <Grid size={{xs: 'grow' }} className=''>

      </Grid>
    </Grid>
  );
}

import Grid from "@mui/material/Grid2";
import ContractBox from "./ContractBox";
import SelectionBox from "./SelectionBox";

export default function Deployer() {
  return (
    <Grid container direction={{xs: 'column', md: 'row'}} spacing={4} columns={{md: 12}} className='h-5/6 m-8'>
      <Grid size={{md: 3 }} className='h-full border border-black bg-gray-800 bg-opacity-40'>
        <SelectionBox/>
      </Grid>
      <Grid size={{xs: 'grow' }} className='h-full border border-black bg-gray-800 bg-opacity-40'>
        <ContractBox/>
      </Grid>
      <Grid size={{md: 3}} className='h-full border border-black bg-gray-800 bg-opacity-40'>

      </Grid>
    </Grid>
  );
}

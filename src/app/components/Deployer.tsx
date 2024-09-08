import Grid from "@mui/material/Grid2";
import ContractBox from "./ContractBox";
import SelectionBox from "./SelectionBox";

export default function Deployer() {
  return (
    <Grid container direction={{xs: 'column', md: 'row'}} spacing={4} columns={{md: 12}} className='border border-blue-800 h-5/6 m-8'>
      <Grid size={{md: 3 }} className='border border-white h-full'>
        <SelectionBox/>
      </Grid>
      <Grid size={{xs: 'grow' }} className='border border-white h-full'>
        <ContractBox/>
      </Grid>
      <Grid size={{md: 3}} className='border border-white h-full'>

      </Grid>
    </Grid>
  );
}

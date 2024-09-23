import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function ContractBox() {
  return (
    <Grid container spacing={4}  direction='column' className='h-full '>
      <Grid container justifyContent='center' alignItems='center' className='h-[10%]'>
        Token Contract
      </Grid>
      <Grid size={{xs: 'grow' }} className=''>

      </Grid>
    </Grid>
  );
}

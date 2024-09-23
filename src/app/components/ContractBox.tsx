import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import '../scroll.css'
export default function ContractBox() {
  const contract = useSelector((state: RootState) => state.contract.contract);

  return (
    <Grid container direction='column' className='h-full ' alignItems='center'>
      <Grid  className='h-[10%] pt-4'>
        Token Contract
      </Grid>
      <Grid  size={{  }} className='w-11/12 h-5/6' >
        <Box className='w-full h-full '>
          <SyntaxHighlighter language="solidity" style={materialDark} className='w-full h-full custom-scroll-container'>
            {contract}
          </SyntaxHighlighter>
        </Box>
      </Grid>
    </Grid>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar";
import Deployer from "./components/Deployer";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Home() {
  return (
    <Container maxWidth={false} disableGutters className='border border-white h-screen'>
      <Grid container direction='column' className='border border-white h-full'>
        <Grid className='border border-red-800 h-[10%]'>
          <Navbar />
        </Grid>
        <Grid className='border border-red-800 sm:flex-grow h-[75%]'>
          <Deployer />
        </Grid>
      </Grid>
    </Container>

  );
}

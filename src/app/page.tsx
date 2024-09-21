"use client";
import { Provider } from 'react-redux';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Deployer from "./components/Deployer";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { store } from './store';
import CubeSpinner from "./components/CubeSpinner";
import { useEffect, useState } from 'react';
import MovingLines from './components/MovingLines';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <CubeSpinner />;
  }
  return (
    <Provider store={store}>
      <div className="relative">
        <div className="grid-layer"></div>
        <div className="grid-layer small-grid"></div>
        <MovingLines />

        <Container maxWidth={false} disableGutters className="h-screen relative z-10">
          <Grid container direction='column' className='h-full'>
            <Grid className='h-[10%]'>
              <Navbar />
            </Grid>
            <Grid className='sm:flex-grow h-[75%]'>
              <Deployer />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Provider>
  );

}

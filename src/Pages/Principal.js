import { Button, ButtonGroup, Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Main from "../Components/Main";

const Principal = () => {
  return (
    <div style={{ backgroundColor: "#EAECEE" }}>
      <Container>
        <Paper elevation={10} sx={{ height: "100vh"}}>
        <Box sx={{ height: "15vh", backgroundColor: "#1565c0" }}>
            <Typography variant="h4" sx={{color: "white", paddingX: "8vw", paddingY: "5vh"}}>
            <b>MÓDULO DE CONTROL DEL VEHÍCULO AUTOMATIZADO</b>
            </Typography>
            </Box>
            <Grid sx={{marginX: "25vw", paddingY: "5vh"}}>
            <ButtonGroup>
                <Button variant="contained">Selección de Rutas</Button>
                <Button>Seguimiento de Rutas</Button>
            </ButtonGroup>
        </Grid>

        {/**Here the Main Component */}
        <Main></Main>

        </Paper>
      </Container>
    </div>
  );
};

export default Principal;

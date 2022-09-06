import {
  Button,
  ButtonGroup,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

const Main = ( {position,  rutas, click, onChange, onClean, onSubmit } ) => {

  return (
    <div >
    <Grid sx={{marginX: "25vw", paddingY: "5vh"}}>
            <ButtonGroup>
                <Button variant="contained">Selección de Rutas</Button>
                <Button>Seguimiento de Rutas</Button>
            </ButtonGroup>
            </Grid>
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="subtitle1">Seleccione las Rutas</Typography>
          </Grid>
          <Grid item>
              <TextField
                select
                disabled
                id="inicio"
                size="small"
                label="Estación Inicial"
                value={position}
                sx={{ width: "15vw", marginX: "1vw" }}
              >
                <MenuItem value={0}>Estación 0</MenuItem>
                <MenuItem value={1}>Estación 1</MenuItem>
                <MenuItem value={2}>Estación 2</MenuItem>
                <MenuItem value={3}>Estación 3</MenuItem>
              </TextField>

            <TextField
              select
              id="final"
              size="small"
              label="Estación De Destino"
              onChange={onChange}
              sx={{ width: "15vw", marginX: "1vw" }}
            >
              <MenuItem value={1}>Estación 1</MenuItem>
              <MenuItem value={2}>Estación 2</MenuItem>
              <MenuItem value={3}>Estación 3</MenuItem>
            </TextField>

            <Button variant="contained" sx={{marginY: "2px", marginX: "1vw"}} onClick={click} >Agregar</Button>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Rutas Seleccionadas:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Table border={1} sx={{width: "40vw"}}>
            <TableHead >
                <TableRow>
                    <TableCell align="center">Lugar de Partida</TableCell>
                    <TableCell align="center">Lugar de Llegada</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rutas.map((ruta, index) => (
                <TableRow key={index}>
                    <TableCell align="center">Estación {ruta.inicio}</TableCell>
                    <TableCell align="center">Estación {ruta.final}</TableCell>
                </TableRow>
                ))}
                </TableBody>
                <TableFooter />
            </Table>
          </Grid>
          <Grid item>
          <Button onClick ={onClean} variant="contained" color="primary">
          Limpiar
          </Button>
            <Button onClick={onSubmit} variant="contained" color="success" sx={{marginLeft: "8px"}}>
                Enviar
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default Main;

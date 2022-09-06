import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Main from "../Components/Main";
import axios from "axios";
import Tracing from "../Components/Tracing";

const Principal = () => {

  const [position, setPosition] = useState(0)
    let [rutas, setRutas] = useState([])

    let final
    let lista = []
    const [nextPage, setNextPage] = useState(false)
  // opciones del select

  //guarda los valores 

  const onChange = (e) => {
    final = e.target.value
  }

  const onSubmit = () => {
    //enviamos la información al back
    lista = rutas
    lista.push({
        "inicio": position,
        "final": 0
    })
    setRutas(lista)
    console.log(rutas)
    axios.post("http://localhost:3001/addroute", lista)
        .then((res) => {
            //console.log(rutas)
            alert("Ruta Agregada Exitosamente")
                setNextPage(true)
            })
            .catch(error => {
                alert("error")
                setNextPage(true)
            })
  }

  const click = () => {
    //agregamos la ruta
    lista = rutas
    lista.push({
        "inicio": position,
        "final": final
    })
    setRutas(lista)
    setPosition(final)
    //console.log(rutas)
  }

  //This method to clean the routes 
  const onClean = () => {
    //We redirect to clean the component
    window.location.href=("/")
    //console.log(rutas)
  }

  return (
    <div style={{ backgroundColor: "#EAECEE" }}>
      <Container>
        <Paper elevation={10} sx={{ minHeight: "100vh"}}>
        <Box sx={{ height: "15vh", backgroundColor: "#1565c0" }}>
            <Typography variant="h4" sx={{color: "white", paddingX: "8vw", paddingY: "5vh"}}>
            <b>MÓDULO DE CONTROL DEL VEHÍCULO AUTOMATIZADO</b>
            </Typography>
            </Box>

        {/**Here the Main Component */}
        {nextPage ? <Tracing ruta={rutas} /> : <Main position={position}  rutas={rutas} click={click} onChange={onChange} onClean={onClean} onSubmit={onSubmit} /> }
        

        </Paper>
      </Container>
    </div>
  );
};

export default Principal;

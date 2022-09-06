import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

const Tracing = ( {ruta} ) => {

    const exampleroutes = ruta

    const [change, setChange] = useState([])

    useEffect(() => {
        onReceive()
    }, []);

    const onReceive = async() => {
        let response = await axios.get("http://localhost:3001/getposition")
        setChange(response.data)
        console.log(response.data)
      }
      
    return (
        <div>

        <Grid sx={{marginX: "25vw", paddingY: "5vh"}}>
            <ButtonGroup>
                <Button>Selección de Rutas</Button>
                <Button variant="contained">Seguimiento de Rutas</Button>
            </ButtonGroup>
            </Grid>
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item>
            <Typography>El Vehículo Se Encuentra En La Siguiente Ruta:</Typography>
            </Grid>
            <Timeline position='alternate' sx={{width: "50vw", paddingY: "5vh"}}>
            {exampleroutes.map((route, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                    {/**Here we put the DOT's color */}
                        <TimelineDot color="error">
                        {/**Here we put the DOT content */}
                        <DoneIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4vh', px: 2 }}>Estación:  {route.inicio} <br/>
                    <Typography variant="caption">Terminado.</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
            <TimelineItem>
                    <TimelineSeparator >
                    {/**Here we put the DOT's color */}
                        <TimelineDot >
                        {/**Here we put the DOT content */}
                        <AccessTimeIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent> Estación: {exampleroutes[exampleroutes.length-1].final} <br />
                    <Typography variant="caption">En Curso.</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </Grid>  
        </div>
    );
};


Tracing.propTypes = {
    ruta: PropTypes.object.isRequired
};


export default Tracing;



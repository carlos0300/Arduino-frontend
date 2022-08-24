import { Grid, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import React from 'react';

const Tracing = () => {
    
    const exampleroutes = [
        {
            "inicio": 0,
            "fin": 1
        },
        {
            "inicio": 1,
            "fin": 2
        },
        {
            "inicio": 2,
            "fin": 3
        }
    ]

    return (
        <div>
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item>
            <Typography>El Vehículo Se Encuentra En La Siguiente Ruta:</Typography>
            </Grid>
            <Timeline position='alternate' sx={{width: "50vw"}}>
            {exampleroutes.map((rout) => (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success">
                        <DoneIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4vh', px: 2 }}>Estación:  {rout.inicio} <br/>
                    <Typography variant="caption">Terminado.</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}

            <TimelineItem>
                    <TimelineSeparator >
                        <TimelineDot >
                        <AccessTimeIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent> Estación: {exampleroutes[exampleroutes.length-1].fin} <br />
                    <Typography variant="caption">En Curso.</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </Grid>  
        </div>
    );
}

export default Tracing;

import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { PageArea } from "./styled";

const PlanInformation = () => {
    return (
        <PageArea>
            <div className='infos--title'>
                <h2 className='infos--title--speak'>Fale</h2>
                <h2 className='infos--title--more'>Mais+</h2>
            </div>
            <div className='infos--text'>
                <div className='infos--text--p'>
                    <p>Com o novo produto <i className='speak'>Fale</i><i className='more'>Mais</i><i className='telzir'>Telzir</i>, 
                    o cliente pode falar de graça
                    até um determinado tempo em minutos, pagando somente os minutos excedentes.</p>
                    <p className='sub-text'>Os minutos excedentes têm um 
                    acréscimo de 10% sobre a tarifa normal do minuto.</p>
                </div>
                <div className='infos--text--tables'>
                    <div className='infos--text--tables--normaltax'>
                        <h4>Tabela de Tarifa Normal</h4>
                        <TableContainer component={Paper}>
                            <Table  size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>DDD Origem</TableCell>
                                        <TableCell align="right">DDD Destino</TableCell>
                                        <TableCell align="right">R$ / minuto</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">011</TableCell>
                                        <TableCell align="right">016</TableCell>
                                        <TableCell align="right">1.90</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">016</TableCell>
                                        <TableCell align="right">011</TableCell>
                                        <TableCell align="right">2.90</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">011</TableCell>
                                        <TableCell align="right">017</TableCell>
                                        <TableCell align="right">1.70</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">017</TableCell>
                                        <TableCell align="right">011</TableCell>
                                        <TableCell align="right">2.70</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">011</TableCell>
                                        <TableCell align="right">018</TableCell>
                                        <TableCell align="right">0.90</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">018</TableCell>
                                        <TableCell align="right">011</TableCell>
                                        <TableCell align="right">1.90</TableCell>
                                    </TableRow>
                                </TableBody>    
                            </Table>
                        </TableContainer>
                    </div>

                    <div className='infos--text--tables--plans'>
                        <h4>Planos FaleMais Disponíveis</h4>
                        <TableContainer component={Paper}>
                            <Table  size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Planos</TableCell>
                                        <TableCell align="right">Minutos</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">FaleMais30</TableCell>
                                        <TableCell align="right">30 Minutos</TableCell>
                                    </TableRow>

                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">FaleMais60</TableCell>
                                        <TableCell align="right">60 Minutos</TableCell>
                                    </TableRow>
                                    
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">FaleMais120</TableCell>
                                        <TableCell align="right">120 Minutos</TableCell>
                                    </TableRow>
                                </TableBody>    
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </PageArea>

    )
}

export default PlanInformation;
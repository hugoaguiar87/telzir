import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { requestApi } from '../../helpers/Requests';

const TableDemonstration = () => {
    const [taxes, setTaxes] = useState()

    const callFrom = useSelector((state) => state.globalStates.callFrom)
    const callTo = useSelector((state) => state.globalStates.callTo)
    const minutes = useSelector((state) => state.globalStates.minutes)

    const getTaxes = async () => {
        const json = await requestApi.taxes()
        setTaxes(json.tax)
    }

    useEffect(() => {
        getTaxes()
    }, [])

    const calculation = (dddFrom, dddTo, plan = null) => {
        const tax = taxes?.filter(i => {
            if( i.callFrom === callFrom && i.callTo === callTo) {
                return i
            }
        })

        console.log(tax)

        if(plan) {
            return (
                tax ? (minutes <= plan ? 0 : ((minutes - plan)*(tax[0].price*1.1)).toFixed(2)) : null
            )
        } else {
            return(
                tax ? (minutes * (tax[0].price)).toFixed(2) : null
            )
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Origem</TableCell>
                        <TableCell align="right">Destino</TableCell>
                        <TableCell align="right">Tempo</TableCell>
                        <TableCell align="right">Plano FaleMais</TableCell>
                        <TableCell align="right">Com FaleMais</TableCell>
                        <TableCell align="right">Sem FaleMais</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{callFrom}</TableCell>
                        <TableCell align="right">{callTo}</TableCell>
                        <TableCell align="right">{minutes} {(minutes>1) ? 'minutos':''} {(minutes == 1) ? 'minuto':''}</TableCell>
                        <TableCell align="right">FaleMais 30</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo, 30)}</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo)}</TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{callFrom}</TableCell>
                        <TableCell align="right">{callTo}</TableCell>
                        <TableCell align="right">{minutes} {(minutes>1) ? 'minutos':''} {(minutes == 1) ? 'minuto':''}</TableCell>
                        <TableCell align="right">FaleMais 60</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo, 60)}</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo)}</TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{callFrom}</TableCell>
                        <TableCell align="right">{callTo}</TableCell>
                        <TableCell align="right">{minutes} {(minutes>1) ? 'minutos':''} {(minutes == 1) ? 'minuto':''}</TableCell>
                        <TableCell align="right">FaleMais 120</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo, 120)}</TableCell>
                        <TableCell align="right">R$ {calculation(callFrom, callTo)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableDemonstration;
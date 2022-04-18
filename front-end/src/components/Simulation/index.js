import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageArea } from "./styled";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { requestApi } from "../../helpers/Requests";
import { setCallFrom, setShowSimulation, setCallTo, setMinutes } from "../../redux/reducers/globalReducer";
import CallDestination from "../CallDestination";
import TableDemonstration from "../TableDemonstration";

const Simulation = () => {
    const dispatch = useDispatch()

    const [ddds, setDdds] = useState('')

    const callFrom = useSelector((state) => state.globalStates.callFrom)
    const callTo = useSelector((state) => state.globalStates.callTo)
    const minutes = useSelector((state) => state.globalStates.minutes)
    const showSimulation = useSelector((state) => state.globalStates.showSimulation)

    const getDdds = async() => {
        const json = await requestApi.ddd()
        setDdds(json.ddd)
    }

    useEffect(() => {
        getDdds()
    },[])

    const newSimulation = () => {
        dispatch(setShowSimulation(false))
        dispatch(setCallFrom(''))
        dispatch(setCallTo(''))
        dispatch(setMinutes(''))
    }

    return (
        <PageArea>
            <div className='simulation--titles'>
                <h2>Simule Sua Ligação</h2>
                <h4>Veja o quanto você irá pagar</h4>
            </div>

            <div className='simulation--selects'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>  
                        <InputLabel id="demo-simple-select-label">DDD Origem</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={callFrom}
                            label="DDD Origem"
                            onChange={(e) => dispatch(setCallFrom(e.target.value))}
                            disabled={showSimulation ? true : false}  
                        >
                            <MenuItem disabled selected >Selecione o DDD de origem...</MenuItem>
                            {ddds && ddds.map((i, k) => {
                                return(
                                    <MenuItem key={k} value={i.ddd}>{i.ddd}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <CallDestination/>


                {callFrom && callTo && minutes && 
                    <Stack spacing={2} direction="row">
                        <Button onClick={() => dispatch(setShowSimulation(true))} variant="contained">Simular</Button>
                    </Stack>
                }

            </div>

            <div className='simulation--tables'>
                {showSimulation && <TableDemonstration/>}

                {showSimulation &&
                    <Stack spacing={2} direction="row">
                        <Button onClick={() => newSimulation()} variant="contained">Nova Simulação</Button>
                    </Stack>
                }
            </div>
        </PageArea>
    )
}

export default Simulation;
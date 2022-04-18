import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCallTo, setMinutes } from "../../redux/reducers/globalReducer";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CallDestination = () => {
    const dispatch = useDispatch()

    const callFrom = useSelector(state => state.globalStates.callFrom)
    const callTo = useSelector(state => state.globalStates.callTo)
    const minutes = useSelector(state => state.globalStates.minutes)

    const destination = () => {
        switch(callFrom) {
            case '011':
                return (
                    <>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">DDD Destino</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={callTo}
                                    label="DDD Destino"
                                    onChange={(e) => dispatch(setCallTo(e.target.value))}  
                                >
                                    <MenuItem disabled selected >Selecione o DDD de Destino...</MenuItem>
                                    <MenuItem value='016' >016</MenuItem>
                                    <MenuItem value='017' >017</MenuItem>
                                    <MenuItem value='018' >018</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField value={minutes} inputProps={{min: 0}} onChange={(e) => dispatch(setMinutes(e.target.value))} type='number' id="outlined-basic" label="Minutos" variant="outlined" />
                        </Box>
                    </>
                )
            
            default:
                return(
                    <>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>  
                                <InputLabel id="demo-simple-select-label">DDD Destino</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={callTo}
                                    label="DDD Destino"
                                    onChange={(e) => dispatch(setCallTo(e.target.value))}  
                                >
                                    <MenuItem disabled selected >Selecione o DDD de Destino...</MenuItem>
                                    <MenuItem value='011' >011</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField value={minutes} inputProps={{min: 0}} onChange={(e) => dispatch(setMinutes(e.target.value))} type='number' id="outlined-basic" label="Minutos" variant="outlined" />
                        </Box>
                    </>
                )
        }
    }

    return (
        <>
            {callFrom ? destination() : null}
        </>
    )
}

export default CallDestination;
import axios from "axios";

const Api_BASEURL = "http://localhost:5000"

const getDdds = async() =>{
    const req = await axios.get(`${Api_BASEURL}/api/ddd`)
        .then(res => res.data)
        .catch(err => err)
    
    return req
}

const getPlans = async() => {
    const req = await axios.get(`${Api_BASEURL}/api/plans`)
        .then(res => res.data)
        .catch(err => err)
    
    return req
}

const getTaxes = async() => {
    const req = await axios.get(`${Api_BASEURL}/api/taxes`)
        .then(res => res.data)
        .catch(err => err)
    
    return req
}

export const requestApi = {
    ddd: () => {
        return getDdds()
    },
    plans: () => {
        return getPlans()
    },
    taxes: () => {
        return getTaxes()
    }
}
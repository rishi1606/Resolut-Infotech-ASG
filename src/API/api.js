import axios from 'axios'

export const fetchAPI=async()=>{
    try
    {
        const req=await axios.get('https://api.spacexdata.com/v3/rockets')
        return req.data
    }
    catch(error){
        console.log(error)
    }
}

export const fetchAPIById=async(rocket_id)=>{
    try
    {
        const req=await axios.get(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
        return req.data
    }
    catch(error)
    {
            console.log(error)
    }
}


//search

export const search=async(rocket_name)=>{
    try
    {
        const req=await axios.get(`https://api.spacexdata.com/v3/rockets/${rocket_name}`)
        return req.data
    }
    catch(error)
    {
            console.log(error)
    }
}
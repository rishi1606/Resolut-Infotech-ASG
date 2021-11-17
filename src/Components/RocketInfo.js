import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchAPIById } from '../API/api'
import Button from '@mui/material/Button'
import "../css/RocketInfo.css"

const RocketInfo = () => {

    const {rocket_id}=useParams()
    const [data,setData]=useState([])
    const spaceXapiByid=async()=>{
        setData(await fetchAPIById(rocket_id))
    }
    useEffect(()=>{
       spaceXapiByid()
    },[])
  
    return (
       
        <div className="rocketInfo">
                <div className="leftContainer">
                        <div className="leftImage">
                                <img src={data.flickr_images}/>
                        </div>
                </div>

                <div className="rightContainer">
                        <div className="info">
                               <h4>Name : <span>{data.rocket_name}</span> </h4>
                               <h4>Company : <span>{data.company}</span></h4>
                               <h4>Costs per Launch : <span>{data.cost_per_launch}</span></h4>
                               <h4>Country : <span>{data.country}</span> </h4>
                               <h4>Description : <span>{data.description}</span></h4>
                               <h4>First Flight : <span>{data.first_flight}</span></h4>
                               <h4>Type : <span>{data.rocket_type}</span></h4>
                               <h4>Stages : <span>{data.stages}</span></h4>
                               <h4>Boosters : <span>{data.boosters}</span></h4>
                              <a href={data.wikipedia}> <Button variant="contained">For More Info Click Here</Button></a>
                        </div>

                        
                </div>
            
        </div>
    )
}

export default RocketInfo

import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import "../css/Rockets.css"
import { fetchAPI } from '../API/api'
const Rockets = () => {

    const [api,setAPI]=useState([])
    const spaceXapi=async()=>{
          setAPI( await fetchAPI())
    }
    useEffect(()=>{
        spaceXapi()
    },[])

    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    console.log(api)
    return (
        <div>
           <div className='cards'>
             <h1>SpaceX Rockets!</h1>
                <div className='cards__container'>
                  <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            api.map((data,key)=>(
                                <CardItem
                                src={data.flickr_images}
                                text= {truncate(data.description, 108)}
                                label={data.rocket_name}
                                path={`/rockets/${data.rocket_id}`}
                              />
                            ))
                        }
                    </ul>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default Rockets

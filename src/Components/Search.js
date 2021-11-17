import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { search } from '../API/api'
import CardItem from './CardItem'

const Search = () => {
    const {rocket_name} = useParams()
    const [searchData,setSearchData]=useState([])
    const searchAPi=async()=>{
    setSearchData(await search(rocket_name))
}
    useEffect(()=>{
        searchAPi()
    },[])
    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
    console.log(searchData)
    return (
        
        <div className='cards'>
             <h1>SpaceX Rockets!</h1>
                    <div className='cards__container'>
                         <div className='cards__wrapper'>
                              <ul className='cards__items'>
                                    {   searchData&&
                                        [searchData].map((data,key)=>(
                                            <CardItem
                                            src={data?.flickr_images}
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
        
    )
}

export default Search

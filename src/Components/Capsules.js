import React, { useEffect, useState } from 'react'
import { capsuleAPI } from '../API/api'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
const Capsules = () => {
const [list,setList]=useState([])
const columns=[
    {dataField:'capsule_serial',text:'Capsule_serial',sort:true,filter:textFilter()},
    {dataField:'capsule_id',text:'Capsule_id',sort:true,filter:textFilter()},
    {dataField:'status',text:'Status',sort:true,filter:textFilter()},
    {dataField:'landings',text:'Landings',sort:true,filter:textFilter()},
    {dataField:'type',text:'Type',sort:true,filter:textFilter()},
    {dataField:'details',text:'Details',sort:true,filter:textFilter()},
    {dataField:'reuse_count',text:'Reuse_count',sort:true,filter:textFilter()}
]

const pagination=paginationFactory({
    page:1,
    sizePerPage:5,
    lastPageText:'>>',
    firstPageText:'<<',
    nextPageText:'>',
    prePageText:'<',
    showTotal:true,
    alwaysShowAllBtns:false,
    onPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage)

    },
    onSizePerPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage)
    }
})

const capsuleAPI=async()=>{
    const response = await axios.get(`https://api.spacexdata.com/v3/capsules`).catch(err=>console.log(err));
    if(response)
    {
        const data=response.data
        setList(data)
    }
}
useEffect(()=>{
    capsuleAPI()
},[])

    return (
        <div>
        <BootstrapTable
       
         keyField='capsule_serial' 
         columns={columns} 
         data={list}
         pagination={pagination}
         filter={filterFactory()}
         />
      
        </div>
    )
}

export default Capsules

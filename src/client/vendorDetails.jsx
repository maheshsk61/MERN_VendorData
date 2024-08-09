import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
function VendorDetails() {
    const [data, setData] = useState([])
    const [err, setErr] = useState()
    useEffect(() => {
        axios.get("http://localhost:2000/data/vendorData")
            .then((res) => {
                console.log(res);
                setData(res.data)
            })
            .catch((e) => {
                console.error(e)
                setErr(e)
            })
    }, [])
    // useEffect(()=>{
    //     fetch('http://localhost:2000/data/vendorData')
    //     .then((res)=>{
    //         console.log(res);
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch((e)=>{
    //         console.error(e)
    //         setErr(e)
    //     })
    // },[])

    return (
        <div className='container-fluid'>
            <div className=''>
                {
                    data.map((vendor, index) => {
                        return (
                            <div className='card mt-3 mb-3 p-3' key={index}>
                                <h4>{vendor.vendorName}</h4>
                                <h5>
                                    {
                                        vendor.services.map((service, index) => {
                                            return (
                                                <span key={index}>
                                                    <span>{service}{index < vendor.services.length - 1 ? ',' : ''} </span>
                                                </span>
                                            )
                                        })
                                    }
                                </h5>
                                <div className="card ml-5 p-3" style={{ backgroundColor: 'grey' }}>
                                    <div className='d-flex justify-content-between'>
                                        <span>Turn over: <b> {vendor.turnover}</b></span>
                                        <span>Labor Strength: <b>{vendor.laborStrength}</b></span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>Business Age: <b>{vendor.businessAge}</b></span>
                                        <span>Projects Completed: <b>{vendor.projectsCompleted}</b></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VendorDetails

import React, { useEffect, useState } from 'react'
import fetchData from "./Services"

const Dummy = () => {

    const [data, setData] = useState([])

    const getData = () => {
        let url = "/users"
        fetchData(url).then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }


    useEffect(() => {
        getData()

    }, [])


    return (
        <div>
           
        </div>
    )
}

export default Dummy



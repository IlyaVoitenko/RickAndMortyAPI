import React, { useEffect, useState } from 'react'

const Api = () =>{
     const [dataApi , setDataApi] = useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/episode")
        .then((data) => data.json())
        .then(data=>{ 
            console.log(data)
            setDataApi(data.results)
        })
    },[])
    return(
        <div>{ 
            dataApi.map((i)=>{
               return <div key={ i.id}>
                   <p>{i.episode}</p>
                    <p>{i.name}</p>
                </div>
            })
        }
        </div>
    )
}
export default Api
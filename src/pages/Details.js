import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "../data/Data.json"

export function Details() {
    const {id} = useParams()
    const pageInfo = Data.find(element => element.id === id);
    
    console.log("id:",id);
    console.log("data in Details", Data);
    console.log("pageInfo", pageInfo);
  return (
    <div>

      <div>
        <h1>{pageInfo.name}</h1>
      </div>
    </div>
  )
}

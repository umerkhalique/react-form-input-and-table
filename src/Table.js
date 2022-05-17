import React from 'react'
import './Table.css'

export default function Table(props) {
  return (
    <div className="table-main">
        <div className="table-data">
            <p>{props.data.name}</p>
        </div>
        <div className="table-data">
            <p>{props.data.email}</p>
        </div>
        <div className="table-data">
            <p>{props.data.token}</p>
        </div>
        <div className="table-data">
            <p>{props.data.price}</p>
        </div>
    </div>
  )
}

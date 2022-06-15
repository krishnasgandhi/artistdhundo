import React from 'react'
import { Link } from "react-router-dom";


export default function header() {
  return (
    <>
    <div>header</div>
    <Link to="/">Home</Link>
    <Link to="/cast">CA</Link>
    </>
  )
}
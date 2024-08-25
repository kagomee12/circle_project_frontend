import React, { useContext } from 'react'
import { Dark } from '../components/common/Darkmode'
import { Button } from '@mui/material'

function Follow() {
  const {user, setUser} = useContext(Dark)
    return (
        <>
        <Button variant="contained" onClick={() => setUser(!user)}>Hello world</Button>
        <div style={{ backgroundColor: user ? "Red" : "white" }}><h1>Follow disini</h1></div>
        
        </>
      )
}

export default Follow
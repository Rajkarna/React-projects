import React from 'react'

function Dateandtime() {
    let time = new Date();
  return (
    <div>
        <p classNameName='lead'>The Date is {time.toLocaleDateString()} - time is {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Dateandtime
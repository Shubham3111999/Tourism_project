import React from 'react'

function Placedetails() {
  const element=JSON.parse(localStorage.getItem("place"));
  console.log('running placedetails');

  return (
    <div>
      <h1>{element.placeName}</h1>
    </div>
  )
}

export default Placedetails

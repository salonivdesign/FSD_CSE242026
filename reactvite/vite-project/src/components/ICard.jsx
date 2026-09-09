import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:"2px solid red",width:"400px",height:"500px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"black", textAlign:'center'}}>
      <h2>College Name:{data.collegeName}</h2>
      <div>
        <img src={data.pic} height={200} width={200}></img>
      </div>
      <h2>Roll No:{data.rollNo}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
    </div>
  )
}

export default ICard
import React from 'react'

const Colorpreview = (props) => {

  return (
    <div style ={{
        marginTop: "20px",
        width:"50px",
        height:"50px",
        border:"2px, solid",
        backgroundColor:props.colorPicked
    }}>
        

    </div>
  )
}

export default Colorpreview;
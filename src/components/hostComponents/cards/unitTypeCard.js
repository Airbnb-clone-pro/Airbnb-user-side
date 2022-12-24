import { PropaneSharp } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './unitType.css'


const UnitTypeCard = (props) => {


  const hover = useHover({ margin: '-1.5px', border: "1px solid black", width: "190px", padding: "0", borderRadius: "10px", userSelect: "none" }, { width: "190px", padding: "0", borderRadius: "10px" })

  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover);

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)
    return { style, onMouseLeave, onMouseEnter }
  }

  return (

    <div className={`card rounded-lg m-2 `}  {...hover}  >
      < div className="card-body justify-content-center" >
        <p className=" mb-0"><i className={props.icon} style={{ fontSize: "30px", marginBottom: "5px" }}></i></p>
        <p className="mb-0 font-weight-bold">{props.title}</p>
      </div>
    </div >
  )



}

export default UnitTypeCard;

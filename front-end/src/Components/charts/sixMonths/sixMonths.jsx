import { useState } from 'react'
import './sixMonths.scss'


export const SixMonths = () => {



    const [sixMonth , setSixMonth] = useState("Six-Month");

    return (
      <div className="chartSixMonth">
      <div className="sixMonthTitle">{sixMonth}</div>
      
      </div>
    )
}

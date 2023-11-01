import { useState } from 'react'
import './oneYear.scss'


export const OneYear = () => {



    const [year , setYear] = useState("Year - 2023");

    return (
      <div className="chartOneYear">
      <div className="oneYearTitle">{year}</div>
      
      </div>
    )
}

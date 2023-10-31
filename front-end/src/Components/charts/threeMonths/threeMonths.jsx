import { useState } from 'react'
import './threeMonths.scss'


export const ThreeMonths = () => {



    const [threeMonths , setThreeMonths] = useState("Three-Months");

    return (
      <div className="chartOneMonth">
      <div className="oneMonthTitle">{threeMonths}</div>
      
      </div>
    )
}

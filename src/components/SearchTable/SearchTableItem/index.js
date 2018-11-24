import React from "react";
import './SearchTableItem.css';
import sun from './assets/sun.svg'
import swim from './assets/swim.svg'
import museum from './assets/museum.svg'

export default ({ data }) => (
   <tr title={data.direction} subTitle={`${data.price} BYN`} className="search-table-item">
       <td className="search-table-item__price">{data.price} BYN</td>
       <td className="search-table-item__direction">{data.direction}</td>
       <td className="search-table-item__time">
        <span className={`search-table-item__departure ${data.isHoliday ? 'is-holiday' : ''}`}>{data.departure}</span>
        {data.isHoliday && <span className="search-table-item__holiday-name">Hanuka</span>}
        </td>
       <td className="search-table-item__flight-info">
            <span className="search-table-item__flight-time">{data.timeInFlight}</span>
            <span className="search-table-item__transfer-count">
                {
                    !!data.transferCount ? `${data.transferCount} transfers` : `direct flight`
                }
            </span>
       </td>
       <td className="search-table-item__quantity"><img src={sun} /></td>
   </tr>
) 

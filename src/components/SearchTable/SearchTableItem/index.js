import React from "react";
import { Card } from 'primereact/card';

export default ({ data }) => (
   <Card title={data.direction} subTitle={`${data.price} BYN`} className="search-table-item">
       {/* <span className="search-table-item__direction">{data.direction}</span>
       <span className="search-table-item__price">{data.price}</span> */}
       <p className="search-table-item__time">Time in flight: {data.timeInFlight}</p>
       <p className="search-table-item__date">Date: {data.date}</p>
       <p className="search-table-item__quantity">Quantity: {data.quantity}</p>
       {
            data.ticketType === 'EP' && <span className="search-table-item__quantity">Promotional ticket</span>
       }
   </Card>
) 
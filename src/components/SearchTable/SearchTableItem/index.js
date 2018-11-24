import React from "react";

export default ({ data }) => (
    <div className="search-table-item">
        <span className="search-table-item__direction">{data.direction}</span>
        <span className="search-table-item__price">{data.price}</span>
        <span className="search-table-item__time">{data.timeInFlight}</span>
        <span className="search-table-item__date">{data.date}</span>
        <span className="search-table-item__quantity">{data.quantity}</span>
        <span className="search-table-item__quantity">{data.ticketType}</span>
    </div>
)
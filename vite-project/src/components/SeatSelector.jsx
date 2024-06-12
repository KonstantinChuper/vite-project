import React from 'react'

export default function SeatSelector({ seats, selectedSeats, toggleSeat }) {
  return (
    <div >
        {seats.map((s) => {
             const isSelected = selectedSeats.find((seat) => {
               return seat === s;
            })
            return <button style={{
                border:isSelected ? '1px solid violet' : '1px solid red' 
            }} key={s} onClick={() => {toggleSeat(s)}}>{s}</button>
        })}
    </div>
  )
}

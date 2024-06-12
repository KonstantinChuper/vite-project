import SeatSelector from "./SeatSelector";
import { useState } from "react";

const seats = ["1A", "1B", "1C", "1D", "1E", "1F"];
export default function EventBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  function toggleSeat(seat) {
    const foundSeat = selectedSeats.find((s) => {
      return s === seat;
    });
    if (foundSeat) {
      const newSelectedSeats = selectedSeats.filter((s) => {
        return s !== seat;
      });
      setSelectedSeats(newSelectedSeats);
    } else {
        setSelectedSeats([...selectedSeats, seat])
    }
  }
  return <div>
    <SeatSelector seats={seats} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
  </div>;
}

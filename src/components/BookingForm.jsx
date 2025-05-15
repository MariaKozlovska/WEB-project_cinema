import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm({ selectedSeats, onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("All fields are required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Incorrect email.");
      return;
    }

    onConfirm({ name, phone, email });
    toast.success("Reservation successfully saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Confirmation of booking</h3>
      <p>Places: {selectedSeats.join(", ")}</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="bron-ctr"><button type="submit" className="bron">Confirm</button></div>
    </form>
  );
}

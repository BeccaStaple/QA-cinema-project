import React from "react";
import BookingForm from "../components/BookingForm";
import PaymentForm from "../components/PaymentForm";

export default function Bookings() {
    return (
        <div>
            <BookingForm/>
            <PaymentForm/>
        </div>
    );
}
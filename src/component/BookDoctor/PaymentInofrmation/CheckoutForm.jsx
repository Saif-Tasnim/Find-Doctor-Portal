import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';

const CheckoutForm = ({ bookingInfo, doctorData, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.post("http://localhost:5000/create-payment-intent", { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            setLoading(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,

            });
            setLoading(false);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous"
                    },
                },
            },
        );


        if (confirmError) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,

            });
            setLoading(false);
        }

        setLoading(false);

        // console.log(paymentIntent);

        if (paymentIntent.status === "succeeded") {

            const { name, email, hospital, location } = doctorData;
            const { id } = paymentIntent;

            const payment = {
                clientEmail: user?.email,
                clientName: user?.displayName,
                ...bookingInfo,
                doctorName: name,
                doctorEmail: email,
                hospital,
                location,
                transactionId: id
            }

            axios.post("http://localhost:5000/set-payment", payment)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Good job!",
                            text: "Payment method successful",
                            icon: "success"
                        });
                    }
                    // clearing the storage after successful payment
                    localStorage.clear();
                })


        }

    }



    return (
        <form onSubmit={handleSubmit} className='my-14'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary mt-10 px-6 text-white text-lg hover:btn-accent' type="submit" disabled={!stripe || !clientSecret || loading}>
                Confirm and Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
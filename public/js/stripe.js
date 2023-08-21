/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51NfJdMKV7LhY5uPYHy2IF6HkJchHer5fPCU22A60rDdnfR1wGCBrfaSJ4K1CTT3wQJvf9pPbpiYCDQXKmC4infkT00AcXJdoMa'
);

export const bookTour = async (tourID) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourID}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};

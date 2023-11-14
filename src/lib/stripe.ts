import Stripe from "stripe";

//REQUISIÇÃO AO STRIPE COM A CHAVE SECRETA

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop'
  },
});
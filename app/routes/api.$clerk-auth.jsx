// app/routes/api.$hello.jsx
import { json } from '@remix-run/node';

export const loader = async () => {
  const shopData = await shopify.api.rest.Shop.all({ session });
  console.log(shopData[0]);

  return json({ message: 'GET API is working now!' + shopData });
};

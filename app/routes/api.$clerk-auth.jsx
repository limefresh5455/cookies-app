// app/routes/api.$hello.jsx
import { json } from '@remix-run/node';

export const loader = async () => {
const session = await shopify.sessionStorage.loadSession(request);
const shopData = await shopify.api.rest.Shop.all({ session });
console.log(shopData[0]); // ✅ Is line se check karo email aa rahi hai ya nahi


  return json({ message: 'GET API is working now!' });
};

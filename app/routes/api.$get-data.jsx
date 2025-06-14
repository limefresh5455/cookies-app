import { shopify } from "~/shopify.server";

const session = await shopify.sessionStorage.loadSession(id);
const client = new shopify.api.clients.Rest({ session });

// ✅ Get store info (including email)
const response = await client.get({
  path: 'shop',
});

const shopData = response.body.shop;
console.log("Owner Email:", shopData.email);

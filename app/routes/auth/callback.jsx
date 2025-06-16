const client = new shopify.api.clients.Rest({ session });
const response = await client.get({ path: 'shop' });
const shopData = response.body.shop;

await prisma.session.upsert({
  where: { id: session.id },
  update: {
    email: shopData?.email || "",
  },
  create: {
    id: session.id,
    shop: session.shop,
    accessToken: session.accessToken,
    isOnline: session.isOnline,
    scope: session.scope,
    email: shopData?.email || "",
    firstName: shopData?.shop_owner?.split(" ")[0] || null,
    lastName: shopData?.shop_owner?.split(" ")[1] || null,
  },
});

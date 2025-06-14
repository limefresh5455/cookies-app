await prisma.session.upsert({
  where: { id: session.id },
  update: {
    email: shopData[0]?.email || "",
  },
  create: {
    id: session.id,
    shop: session.shop,
    accessToken: session.accessToken,
    isOnline: session.isOnline,
    scope: session.scope,
    email: shopData[0]?.email || "", // 👈 store here
    firstName: shopData[0]?.shop_owner?.split(' ')[0] || null,
    lastName: shopData[0]?.shop_owner?.split(' ')[1] || null,
  },
});

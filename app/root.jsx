import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { authenticate } from "./shopify.server";

// Ensure Clerk publishable key is set
// if (!process.env.CLERK_PUBLISHABLE_KEY) {
//   throw new Error("CLERK_PUBLISHABLE_KEY is not defined");
// }

export const loader = async (args) => {
  try {
    const shopifyAuth = await authenticate.admin(args.request);
    if (shopifyAuth) {
      console.log("Shopify auth successful:", shopifyAuth);
      return {
        clerkState: null,
        isShopifyAuthenticated: true,
      };
    }
  } catch (error) {
    console.error("Shopify auth error:", error);
  }
  const clerkData = await rootAuthLoader(args);
  console.log("Clerk loader data:", clerkData);
  return clerkData;
};

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const AppWithClerk = ClerkApp(() => <Outlet />, {
  publishableKey: "pk_test_Y29tbXVuYWwtY3Jvdy0xMS5jbGVyay5hY2NvdW50cy5kZXYk",
});

export default function App() {
  const data = useLoaderData();
  console.log("Loader data:", data);
  const { clerkState, isShopifyAuthenticated } = data;

  if (isShopifyAuthenticated) {
    console.log("Rendering without Clerk (Shopify auth)");
    return <Outlet />;
  }

  console.log("Rendering with Clerk");
  return <AppWithClerk />;
}
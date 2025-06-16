import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <SignIn path="/sign-in" routing="path" />
    </section>
  );
}

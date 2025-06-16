import {  SignUp } from "@clerk/remix";

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
      <SignUp path="/sign-up" routing="path" />
    </section>
  );
}

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="max-w-7xl mx-auto p-16 flex justify-center items-center">
      <SignIn></SignIn>
    </div>
  );
}

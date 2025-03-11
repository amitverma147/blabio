import ModeToggle from "@/components/ModeToggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton  mode="modal"/>
        <SignUpButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
  );
};

export default page;

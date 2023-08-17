//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/"/> */}
      <h1 className="header-text text-left text-white">Home</h1>
    </div>
  )
}
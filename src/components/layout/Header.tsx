import { auth } from "@/auth";
import HeaderChild from "./HeaderChild";

export default async function Header() {
  const session = await auth();
  console.log('session', session);

  return (
      <header>
        <HeaderChild/>
      </header>

  );
}
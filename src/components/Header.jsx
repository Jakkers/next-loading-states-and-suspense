import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

export default function Header() {
  return (
    <>
      <nav>
        <ActiveLink href="/">Homepage</ActiveLink> |{" "}
        <ActiveLink href="/fast">Fast Page</ActiveLink> |{" "}
        <ActiveLink href="/slow">Slow Page</ActiveLink>
      </nav>
    </>
  );
}

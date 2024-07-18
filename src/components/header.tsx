import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "./search-input";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Home
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}

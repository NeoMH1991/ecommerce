import React from "react";
import Link from "next/link";

function Layout() {
  return (
    <>
      <Link href="/">Home</Link> <span> </span>
      <Link href="/about">About</Link> <span> </span>
      <Link href="/login">Login</Link> <span> </span>
      <p>--------------------------------------------------</p>
    </>
  );
}

export default Layout;

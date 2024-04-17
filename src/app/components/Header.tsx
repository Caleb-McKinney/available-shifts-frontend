"use client";
import Link from "next/link";
import React from "react";

import { useState } from "react";
export default function Header() {
  const [username, setUsername] = useState("test user");

  return (
    <header>
      <nav className="p-5 border border-yellow-400 flex justify-between items-center">
        <Link href={"/"}>
        <h1 className="text-3xl text-blue-700 text-center">Available Shift </h1>
        </Link>
        <p className="text-yellow-100">HELLO, {username} </p>
      </nav>
    </header>
  );
}
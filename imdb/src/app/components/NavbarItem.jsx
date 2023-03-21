'use client';
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParams  = useSearchParams();
    const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        class={genre && genre === param && "underline underline-offset-8 decoration-amber-500 rounded-lg m-4 hover:text-amber-600 font-semibold p-2"}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

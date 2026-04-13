"use client";

import { useRouter } from "next/navigation";

export default function PortfolofioHall() {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return <>
  </>;
}

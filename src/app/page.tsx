import Link from "next/link";
import { useEffect, useState } from "react";
import Clock from "./_components/Clock";

export default function HomePage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <div>
            <Clock/>
          </div>
    </main>
  );
}

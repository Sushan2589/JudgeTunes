"use client"
import Button from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <main>
        <div className="flex gap-20 mt-30 justify-center">
          <div>
            <Link href="/create"><Button title="Create" /></Link>
          </div>
          <div>
            <Link href="/join"><Button title="Join" /></Link>
          </div>
        </div>
      </main>
    </div>
  );
}

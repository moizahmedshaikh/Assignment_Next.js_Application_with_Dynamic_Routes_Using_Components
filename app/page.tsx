import Nav from "@/app/components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
    <Nav/>
  <div className="flex flex-col w-max mt-16">

    <h1 className="bg-red-500 text-4xl py-2 px-10 rounded-lg mb-2">Hellow</h1>
    <h1 className="bg-red-500 text-4xl py-2 px-10 rounded-lg mb-2">Welcome to my</h1>
    <h1 className="bg-red-500 text-4xl py-2 px-10 rounded-lg mb-2">Next.js Application with</h1>
    <h1 className="bg-red-500 text-4xl py-2 px-10 rounded-lg mb-2">Dynamic Routes using Component</h1>
  </div>
  </div>
  )
}



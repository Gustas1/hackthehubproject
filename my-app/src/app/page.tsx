"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="antialiased bg-white relative">
      <header className = "container">
        <Navbar />
        <div className="mt-72 text-center">
          <h1 className="text-6xl font-bold tracking-tight">A tool to stop scammers permanently!</h1>
          <h2 className="text-2xl text-purple-600 tracking-wide mt-4">Created in Flask with Whisper and using ChatGPT, we will let you know if it is a scam call</h2>
        </div>
      </header>
    </main>
  );
}

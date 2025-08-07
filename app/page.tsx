"use client";

import { useState } from "react";
import GeometricBackground from "@/components/GeometricBackground";
import SingleView from "@/components/SingleView";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <GeometricBackground />
      <main className="relative z-10 h-full">
        <SingleView />
      </main>
    </div>
  );
}
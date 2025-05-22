"use client";
import React from "react";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
    const theme = useTheme();

  return (
    <section className="w-full h-screen  my-12 m-auto">
      <div className="image-slider-container">
         <h1 style={{color:theme.colors.primary}}> Client Route</h1>
         <h1 style={{color:theme.colors.secondary}}> Secondary Route</h1>

      </div>
    </section>
  );
}

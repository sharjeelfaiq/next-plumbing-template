"use client";

import React from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <Scrollytelling.Root start="top top" end="bottom bottom" scrub={1}>
      {children}
    </Scrollytelling.Root>
  );
};

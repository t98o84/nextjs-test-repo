'use client';

import * as React from 'react';
import {
    ServerComponentImportedWithClientComponent
} from "@/app/server-component/server-component-imported-with-client-component";

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log("[CSR] ClientComponent");
  return (
    <div>
      <h2>ClientComponent</h2>
        <ServerComponentImportedWithClientComponent />
        { children }
    </div>
  );
}

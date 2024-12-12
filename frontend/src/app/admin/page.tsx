"use client";

import { useEffect, useRef } from "react";
import { useMap } from "../../hooks/useMap";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef);

  return <div className="h-full w-full" ref={mapContainerRef} />;
}

export default AdminPage;

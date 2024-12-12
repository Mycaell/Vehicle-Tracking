"use client";

import { useEffect, useRef } from "react";
import { useMap } from "../../hooks/useMap";

export type MapDriverProps = {
  route_id: string | null;
  start_location: {
    lat: number;
    lng: number;
  } | null;
  end_location: {
    lat: number;
    lng: number;
  } | null;
};

export function MapDriver(props: MapDriverProps) {
  const { route_id, start_location, end_location } = props;
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return <div className="w-2/3 h-full" ref={mapContainerRef} />;
}

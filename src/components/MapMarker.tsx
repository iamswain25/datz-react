import React from "react";
import RoomIcon from "@material-ui/icons/Room";
export default function MapMarker(
  props: React.PropsWithChildren<{
    lat: number;
    lng: number;
    className?: string;
  }>
) {
  return (
    <div>
      <RoomIcon className={props.className} />
      {props.children}
    </div>
  );
}

import { IconButton } from "@mui/material";
import Link from "next/link";
import PlaceIcon from "@mui/icons-material/Place";
import { GoogleMapsApi } from "@/api";

export default function LinkToGoogleMaps({ place }: { place: string }) {
  return (
    <IconButton
      LinkComponent={Link}
      href={GoogleMapsApi.getLink(place)}
      target="_blank"
      title="in Google Maps öffnen"
    >
      <PlaceIcon color="primary" />
    </IconButton>
  );
}

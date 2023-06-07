import { Box, SvgIcon, Typography } from "@mui/material";
import { PropertyFeature } from "../models/property-feature";
import * as Muicon from "@mui/icons-material";

interface PropertyFeatureRowProps {
  feature: PropertyFeature;
}
export function PropertyFeatureRow(props: PropertyFeatureRowProps) {
  const featureCodeToIcon = new Map<string, string>([
    ["free-wifi", "Wifi"],
    ["free-parking", "LocalParking"],
    ["air-conditioning", "AcUnit"],
  ]);
  const Icon =
    Muicon[featureCodeToIcon.get(props.feature.icon) || "BrokenImage"];
  return (
    <Box gap={1} className="flex">
      <Icon fontSize="small" display="inline" />
      <Typography>{props.feature.title}</Typography>
    </Box>
  );
}

import { Chip } from "@mui/material";

interface ReviewRatingChipProps {
  value: number;
}

export const ReviewRatingChip = (props: ReviewRatingChipProps) => {
  var colorClasses = "";
  if (props.value > 7) {
    colorClasses = "bg-green-50 text-green-600";
  } else if (props.value > 3) {
    colorClasses = "bg-amber-50 text-amber-600";
  } else {
    colorClasses = "bg-red-50 text-red-600";
  }

  return (
    <Chip
      label={props.value.toFixed(1)}
      className={colorClasses + " font-bold"}
    />
  );
};

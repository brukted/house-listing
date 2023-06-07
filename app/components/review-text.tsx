import { Typography } from "@mui/material";

interface ReviewTextProps {
  rating: number;
}

export const ReviewText = (props: ReviewTextProps) => {
  const color =
    props.rating > 7
      ? "text-green-600"
      : props.rating > 3
      ? "text-amber-600"
      : "text-red-600";

  return (
    <Typography className={color} fontWeight={600}>
      {props.rating > 7 ? "Excellent" : props.rating > 3 ? "Average" : "Bad"}
    </Typography>
  );
};

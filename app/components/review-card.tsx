import { Box, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import { ReviewRatingChip } from "./review-rating-chip";
import { ReviewText } from "./review-text";
import { Review } from "../models/review";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard(props: ReviewCardProps) {
  return (
    <Box
      className="flex justify-between"
      borderBottom={1}
      borderColor="divider"
      py={1}
    >
      <Box className="flex-grow flex flex-col">
        <Typography variant="h6" component="span" fontWeight={600}>
          {props.review.title}
        </Typography>
        <Typography color="text.secondary" component="span">
          {props.review.reviewer}
        </Typography>
        <Box mt={1}>
          <MuiMarkdown>{props.review.content}</MuiMarkdown>
        </Box>
      </Box>
      <Box className="flex flex-col justify-between items-end gap-10 w-full">
        <Box className="flex gap-4 items-center">
          <ReviewText rating={props.review.rating}></ReviewText>
          <ReviewRatingChip value={props.review.rating}></ReviewRatingChip>
        </Box>
        <Box className="flex gap-4 flex-col items-end">
          <Typography color="text.secondary">
            Reviewed on<br></br> {props.review.reviewDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

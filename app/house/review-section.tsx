import { Box, Typography, LinearProgress } from "@mui/material";
import { ReviewCard } from "../components/review-card";
import { Review } from "../models/review";

export function ReviewSection() {
  const reviewMetrics = [
    {
      name: "Cleanliness",
      value: 10,
    },
    {
      name: "Comfort",
      value: 9.6,
    },
    {
      name: "Location",
      value: 7,
    },
  ];

  const reviews = [
    new Review(
      "Excellent value for the price!",
      10,
      "Mark M",
      "20 September 2022",
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Ratione suscipit quisquam repellendus consequuntur quam, 
       inventore libero quibusdam dignissimos debitis iusto saep
        nostrum officia esse odio corporis blanditiis molestiae sint aut.
* item 1
* item 2`
    ),
    new Review(
      "Excellent value for the price!",
      5,
      "Mark M",
      "20 September 2022",
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ratione suscipit quisquam repellendus consequuntur quam, 
         inventore libero quibusdam dignissimos debitis iusto saep
          nostrum officia esse odio corporis blanditiis molestiae sint aut.`
    ),
  ];

  return (
    <Box component="section" py={3} px={8}>
      <Typography variant="h5">Reviews</Typography>
      <Box className="flex gap-20" mt={3}>
        <Box className="w-1/2">
          <Typography variant="h4" color="primary">
            9.6/10
          </Typography>
          <Box mt={2} className="flex" flexDirection="column" gap={2}>
            {reviewMetrics.map((metric, index) => (
              <Box key={index} flexDirection="column" className="flex">
                <Box className="flex justify-between">
                  <Typography color="text.secondary">{metric.name}</Typography>
                  <Typography color="text.secondary">
                    {metric.value.toString()}/10
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(metric.value / 10) * 100}
                  className="w-full"
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex-grow flex flex-col gap-5">
          {reviews.map((review, idx) => (
            <ReviewCard review={review} key={idx}></ReviewCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";

interface ImagesSectionProps {
  images: string[];
}

export function ImagesSection(props: ImagesSectionProps) {
  return (
    <Box
      className="grid grid-rows-2 grid-cols-4 max-h-96 gap-4"
      component="section"
      px={8}
    >
      {props.images.map((image, index) => (
        <div
          key={index}
          className={`${index > 0 ? "" : "row-span-2 col-span-2"}`}
        >
          <img src={image} className="w-full h-full object-cover rounded-xl" />
        </div>
      ))}
    </Box>
  );
}

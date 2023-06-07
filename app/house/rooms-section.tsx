import { Box, Typography } from "@mui/material";
import { RoomCard } from "../components/room-card";
import { Room } from "../models/room";

interface RoomsSectionProps {
  rooms: Room[];
}
export function RoomsSection(props: RoomsSectionProps) {
  return (
    <Box component="section" py={3} px={8} bgcolor="grey.50" mt={4}>
      <Typography variant="h5">Rooms</Typography>
      <Box className="mt-5 grid grid-cols-4 gap-4">
        {props.rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </Box>
    </Box>
  );
}

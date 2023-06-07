import { GridView, Group, Bed } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Room } from "../models/room";

interface RoomCardProps {
  room: Room;
}
// make RoomCard taken RoomCardProps as props
export function RoomCard(props: RoomCardProps) {
  return (
    <Card className="max-w-7xl">
      <CardMedia
        className="w-full aspect-video object-cover rounded-md"
        image={props.room.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.room.name}
        </Typography>
        <Box className="gap-1" flex={1} flexDirection="column">
          <Box className="flex items-center gap-2">
            <GridView fontSize="small"></GridView>
            <Typography variant="body2" color="text.primary">
              {props.room.area}
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Group fontSize="small"></Group>
            <Typography variant="body2" color="text.primary">
              {props.room.guests}
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Bed fontSize="small"></Bed>
            <Typography variant="body2" color="text.primary">
              {props.room.bed}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" className="mt-3">
          {props.room.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" disableElevation className="w-full">
          Book now for ${props.room.price}
        </Button>
      </CardActions>
    </Card>
  );
}

"use client";

import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { NavBar } from "../components/nav-bar";
import { PropertyFeature } from "../models/property-feature";
import { Room } from "../models/room";
import { ImagesSection } from "./images-section";
import { InfoSection } from "./info-section";
import { ReviewSection } from "./review-section";
import { RoomsSection } from "./rooms-section";
import { Hotel } from "../models/hotel";

export const HouseDetailPage: React.FC = () => {
  const rooms = [
    ...Array(4).fill(
      new Room(
        "Standard Room",
        "20m2",
        "2 guests",
        "1 double bed",
        "Non-refundable, Breakfast included",
        "https://picsum.photos/600/600",
        200
      )
    ),
  ];

  const hotel = new Hotel(
    "Hotel Skt. Petri",
    "3-star hotel located in the heart of Copenhagen",
    9.6,
    1023,
    [
      new PropertyFeature("free-wifi", "Free Wifi"),
      new PropertyFeature("air-conditioning", "Air Conditioning"),
      new PropertyFeature("free-parking", "Free Parking"),
    ],
    [
      "https://picsum.photos/600/600",
      "https://picsum.photos/600/600",
      "https://picsum.photos/600/600",
      "https://picsum.photos/600/600",
      "https://picsum.photos/600/600",
    ]
  );

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <main>
        <Box px={8}>
          <IconButton aria-label="delete" className="my-4">
            <ArrowBack />
          </IconButton>
        </Box>

        <ImagesSection images={hotel.images}></ImagesSection>
        <InfoSection hotel={hotel}></InfoSection>
        <RoomsSection rooms={rooms}></RoomsSection>
        <ReviewSection></ReviewSection>
      </main>
    </div>
  );
};

export default HouseDetailPage;

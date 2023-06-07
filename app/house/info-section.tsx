import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { PropertyFeatureRow } from "../components/property-feature-row";
import { ReviewRatingChip } from "../components/review-rating-chip";
import { ReviewText } from "../components/review-text";
import { Hotel } from "../models/hotel";

interface InfoSectionProps {
  hotel: Hotel;
}

export function InfoSection(props: InfoSectionProps) {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <React.Fragment>
      <Box
        className="my-10 flex justify-between items-center"
        component="section"
        px={8}
      >
        <div className="flex flex-col">
          <Typography variant="h4">{props.hotel.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props.hotel.description}
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <ReviewText rating={9.6}></ReviewText>
            <Typography variant="body2" color="text.secondary">
              {props.hotel.reviewCount} reviews
            </Typography>
          </div>
          <ReviewRatingChip value={9.6}></ReviewRatingChip>
        </div>
      </Box>

      <Box component="section" px={8}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Rooms" {...a11yProps(1)} />
            <Tab label="Amenities" {...a11yProps(2)} />
            <Tab label="Policies" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tabIndex} index={0}>
          <div className="w-full flex mt-4 flex-col">
            <Typography variant="h5">Property Overview</Typography>
            <Box gridTemplateColumns="repeat(2, minmax(200px, max-content))" display="grid" columnGap={10} rowGap={1} mt={1}>
              {props.hotel.features.map((feature, idx) => (
                <PropertyFeatureRow
                  key={idx}
                  feature={feature}
                ></PropertyFeatureRow>
              ))}
            </Box>
          </div>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <div className="w-full flex mt-4">
            <Typography variant="h5">Rooms</Typography>
          </div>
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <div className="w-full flex mt-4">
            <Typography variant="h5">Available Amenities</Typography>
          </div>
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <div className="w-full flex mt-4">
            <Typography variant="h5">Policies</Typography>
          </div>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

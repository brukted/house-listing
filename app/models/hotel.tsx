import { PropertyFeature } from "./property-feature";

export class Hotel {
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  features: PropertyFeature[];
  images: string[];

  constructor(
    name: string,
    description: string,
    rating: number,
    reviewCount: number,
    features: PropertyFeature[],
    images: string[]
  ) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.reviewCount = reviewCount;
    this.features = features;
    this.images = images;
  }
}

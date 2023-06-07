export class Room {
  name: string;
  area: string;
  guests: string;
  bed: string;
  detail: string;
  image: string;
  price: number;

  constructor(
    name: string,
    area: string,
    guests: string,
    bed: string,
    detail: string,
    image: string,
    price: number
  ) {
    this.name = name;
    this.area = area;
    this.guests = guests;
    this.bed = bed;
    this.detail = detail;
    this.image = image;
    this.price = price;
  }
}

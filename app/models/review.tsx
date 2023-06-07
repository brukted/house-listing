export class Review {
  title: string;
  rating: number;
  reviewer: string;
  reviewDate: string;
  content: string;

  constructor(
    title: string,
    rating: number,
    reviewer: string,
    reviewDate: string,
    content: string
  ) {
    this.title = title;
    this.rating = rating;
    this.reviewer = reviewer;
    this.reviewDate = reviewDate;
    this.content = content;
  }
}

export interface Photos {
  results: {
    alt_description: string;
    likes: number;
    urls: {
      thumb: string;
    }
  }[];
}

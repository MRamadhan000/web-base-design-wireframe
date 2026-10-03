export interface Video {
  id: number;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
}

export interface VideoDetail extends Video {
  author: string;
  videoUrl: string;
  description: string[];
  tags: string[];
}

export type VideoRelated = Video;
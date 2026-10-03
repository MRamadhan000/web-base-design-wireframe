export interface Berita {
  id: number;
  title: string;
  date: string;
  image: string;
}

export interface BeritaDetail extends Berita {
  author: string;
  content: string[];
  tags: string[];
}

export interface BeritaRelated {
  id: number;
  title: string;
  date: string;
  image: string;
}
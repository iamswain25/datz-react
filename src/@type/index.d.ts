export type PublicationType = "Book" | "Magazine" | "Artist' Book";
export type Collection =
  | "news"
  | "publication"
  | "event"
  | "exhibition"
  | "banner"
  | "artist";
export type Logo = "D'Ark Room" | "Datz Museum of Art" | "Datz Press";
export type ExhibitionLogo =
  | "Datz Museum of Art"
  | "D'Ark Room"
  | "Datz Press Gallery";

export interface Publication {
  public: boolean;
  created_at: firebase.firestore.Timestamp;
  address: string;
  id: string;
  type: PublicationType;
  edition: string;
  copies_count: string;
  title_en: string;
  artist_en: string;
  quotes_en: string;
  body_en: string;
  notes_en: string;
  preview_quote_en: string;
  preview_body_en: string;
  title_ko: string;
  artist_ko: string;
  quotes_ko: string;
  body_ko: string;
  notes_ko: string;
  preview_quote_ko: string;
  preview_body_ko: string;
  order_url_en: string;
  order_url_ko: string;
  order: number;
  images: string[];
  rel_artists: string[];
  rel_publications: string[];
  rel_exhibitions: string[];
  rel_events: string[];
  image_cover: string;
  public: string | boolean;
  files: { image_cover?: File; images: File[] };
  videos: string[];
}
export interface Event {
  created_at: firebase.firestore.Timestamp;
  address: string;
  id: string;
  logo: Logo;
  type: "Artist Talk / Lecture" | "Book Fair" | "Exhibition";
  date: string;
  place_en: string;
  title_en: string;
  body_en: string;
  place_ko: string;
  title_ko: string;
  body_ko: string;
  images: string[];
  public: boolean;
}
export interface Exhibition {
  created_at: firebase.firestore.Timestamp;
  address: string;
  id: string;
  type: ExhibitionLogo;
  visit_url: string;
  start_date: string;
  end_date: string;
  title_en: string;
  body_en: string;
  notes_en: string;
  preview_body_en: string;
  title_ko: string;
  body_ko: string;
  notes_ko: string;
  preview_body_ko: string;
  images: string[];
  rel_artists: number[];
  rel_publications: number[];
  rel_events: number[];
  public: boolean;
}
export interface Artists {
  created_at: firebase.firestore.Timestamp;
  address: string;
  id: string;
  genre: string;
  name_en: string;
  bio_en: string;
  name_ko: string;
  bio_ko: string;
  homepage: string;
  images: string[];
  rel_publications: number[];
  rel_exhibitions: number[];
  rel_events: number[];
  public: boolean;
}
export interface News {
  created_at: firebase.firestore.Timestamp;
  address: string;
  id: string;
  type: string;
  date: string;
  place_en: string;
  title_en: string;
  body_en: string;
  place_ko: string;
  title_ko: string;
  body_ko: string;
  images: string[];
  image_cover: string;
  public: boolean;
}
export interface Banner {
  created_at: firebase.firestore.Timestamp;
  url?: string;
  id: string;
  type: string;
  logo: string;
  title_en: string;
  text_en: string;
  title_ko: string;
  text_ko: string;
  image: string;
  public: boolean;
  files: { image?: File };
}

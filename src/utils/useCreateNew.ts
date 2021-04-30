import { useParams } from "react-router-dom";
import { Collection } from "../@type";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";

export default function useCreateNew({ order = 0 }) {
  const { type, collection } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  return async function createNew() {
    const id = window.prompt("You must create a new id/url for the next step.");
    if (id === null) return;
    if (id === "") {
      return window.alert();
    }
    const res = await firestore
      .collection(
        ["banner", "publication_category"].includes(type) ? type : collection
      )
      .doc(id)
      .get();
    if (res.exists) {
      return window.alert("Id/url already exists.");
    }
    const item = new AdminItem(id, collection, type, order);
    setAdminItem(
      item[
        (["banner", "publication_category"].includes(type)
          ? type
          : collection) as Collection
      ]
    );
  };
}
class AdminItem {
  common: any;
  comm2: any;
  bannerCommon: any;
  title: any;
  text: any;
  place: any;
  preview: any;
  quotes: any;
  notes: any;
  order_url: any;
  body: any;
  titleText: any;
  banner: any;
  main: any;
  about: any;
  contact: any;
  news: any;
  publication: any;
  event: any;
  exhibition: any;
  publication_category: any;
  ["artist-project"]: any;
  notice: any;
  support: any;
  artist: any;
  nameBio: any;
  constructor(
    id: string,
    collection: Collection,
    type: string,
    order: number = 0
  ) {
    this.common = { id, public: false, updated_by: null, order: 0, files: {} };
    this.comm2 = {
      ...this.common,
      order: (Number(order) || 0) + 100,
    };
    this.title = {
      title_en: "",
      title_ko: "",
    };
    this.text = {
      text_en: "",
      text_ko: "",
    };
    this.nameBio = {
      name_en: "",
      name_ko: "",
      bio_en: "",
      bio_ko: "",
    };
    this.artist = {
      artist_en: "",
      artist_ko: "",
    };
    this.order_url = {
      order_url_en: "",
      order_url_ko: "",
    };
    this.quotes = {
      quotes_en: "",
      quotes_ko: "",
    };
    this.notes = {
      notes_en: "",
      notes_ko: "",
    };
    this.preview = {
      preview_quote_en: "",
      preview_quote_ko: "",
      preview_body_en: "",
      preview_body_ko: "",
    };
    this.place = {
      place_en: "",
      place_ko: "",
    };
    this.body = {
      body_en: "",
      body_ko: "",
    };
    this.titleText = {
      ...this.text,
      ...this.title,
    };
    this.banner = {
      ...this.common,
      ...this.titleText,
      type: "",
      color: "",
      logo: null,
      url: "",
      image: "",
      collection,
    };
    this.main = { ...this.banner, collection: type };
    this.contact = { ...this.common, ...this.title, type, list: [] };
    this.news = {
      ...this.comm2,
      ...this.title,
      ...this.place,
      ...this.body,
      images: [],
      type: "",
      date: "",
    };
    this.notice = { ...this.common, en: "", ko: "" };
    this.publication = {
      ...this.comm2,
      ...this.title,
      ...this.place,
      ...this.body,
      ...this.preview,
      ...this.notes,
      ...this.quotes,
      ...this.order_url,
      ...this.artist,
      images: [],
      image_cover: "",
      type: "",
      edition: "",
      copies_count: "",
      rel_artists: null,
      rel_publications: null,
      rel_exhibitions: null,
      rel_events: null,
      videos: null,
    };
    this.exhibition = {
      ...this.comm2,
      ...this.title,
      ...this.place,
      ...this.body,
      ...this.preview,
      ...this.notes,
      ...this.quotes,
      ...this.order_url,
      images: [],
      type: "",
      visit_url: "",
      start_date: "",
      end_date: "",
      rel_artists: null,
      rel_publications: null,
      rel_events: null,
    };
    this.event = {
      type: "",
      logo: "",
      date: "",
      ...this.comm2,
      ...this.title,
      ...this.place,
      ...this.body,
      images: [],
    };
    this.artist = {
      ...this.artist,
      ...this.comm2,
      ...this.nameBio,
      genre: "",
      images: null,
    };
    this.news = {
      type: "",
      date: "",
      ...this.comm2,
      ...this.title,
      ...this.place,
      ...this.body,
      images: null,
      image_cover: "",
    };
    this.artist = {
      ...this.artist,
      ...this.comm2,
      ...this.nameBio,
      genre: "",
      images: null,
    };
    this["artist-project"] = {
      ...this.common,
      ...this.text,
      image: null,
      type,
    };
    this.support = { ...this.common };
  }
}

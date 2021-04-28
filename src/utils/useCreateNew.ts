import { useParams } from "react-router-dom";
import { Collection } from "../@type";
import { Param } from "../@type/admin";
import { firestore } from "../config/firebase";
import { useAdminItem } from "../store/useGlobalState";

export default function useCreateNew() {
  const { type, collection } = useParams<Param>();
  const [, setAdminItem] = useAdminItem();
  return async function createNew() {
    const id = window.prompt("ID 혹은 URL을 입력하세요!");
    if (id === null) return;
    if (id === "") {
      return window.alert("id를 입력하셔야 합니다. 다시 시도하세요.");
    }
    const res = await firestore
      .collection(
        ["banner", "publication_category"].includes(type) ? type : collection
      )
      .doc(id)
      .get();
    if (res.exists) {
      return window.alert("id가 이미 존재합니다. 다른 id로 시도하세요");
    }
    const item = new AdminItem(id, collection, type);
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
  constructor(id: string, collection: Collection, type: string) {
    this.common = { id, public: false, updated_by: null, order: 0, files: {} };
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
      logo: null,
      image: "",
      collection,
    };
    this.main = { ...this.banner, collection: type };
    this.contact = { ...this.common, ...this.title, type, list: [] };
    this.news = {
      ...this.common,
      ...this.title,
      ...this.place,
      ...this.body,
      images: null,
      type: "",
      date: "",
    };
    this.notice = { ...this.common, en: "", ko: "" };
    this.publication = {
      ...this.common,
      ...this.title,
      ...this.place,
      ...this.body,
      ...this.preview,
      ...this.notes,
      ...this.quotes,
      ...this.order_url,
      ...this.artist,
      images: null,
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
      ...this.common,
      ...this.title,
      ...this.place,
      ...this.body,
      ...this.preview,
      ...this.notes,
      ...this.quotes,
      ...this.order_url,
      images: null,
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
      ...this.common,
      ...this.title,
      ...this.place,
      ...this.body,
      images: null,
    };
    this.artist = {
      ...this.artist,
      ...this.common,
      ...this.nameBio,
      genre: "",
      images: null,
    };
    this.news = {
      type: "",
      date: "",
      ...this.common,
      ...this.title,
      ...this.place,
      ...this.body,
      images: null,
    };
    this.artist = {
      ...this.artist,
      ...this.common,
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

import coverImg from "../images/cover.jpg";
export const newMain = {
  image: null || coverImg,
  title: "Nothing Will Ever be the Same Again",
  type: "New Books",
  author: "Amanda Marchand",
  color: "pink",
  isShowing: true,
  id: "",
};

export type Main = typeof newMain;
// export interface Main {
//   image: string;
//   title: string;
//   type: string;
//   author: string;
//   color: string;
//   isShowing: boolean;
// }

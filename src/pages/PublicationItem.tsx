import React from "react";
import PublicationItemLeft from "../components/PublicationItemLeft";
import ItemPhotosRight from "../components/ItemPhotosRight";
import useParams from "../components/useParams";
import { Publication } from "../@type";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import { flexcolumn, flexrow, paddingH37 } from "../components/styles";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import useItem from "../utils/useItem";
import { firestore } from "../config/firebase";
const desktopContainer = css`
  ${flexrow}
  ${paddingH37}
`;
export default function PublicationItem() {
  const { address } = useParams();
  const [publicaiton, loading, error] = useDocumentDataOnce<Publication>(
    firestore.collection("publication").doc(address.toLowerCase()),
    { idField: "id" }
  );
  const item = useItem(publicaiton);
  const isDesktop = useDesktop(true);
  if (loading) {
    return null;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <>
      <Header sticky />
      <section className={isDesktop ? desktopContainer : flexcolumn}>
        <PublicationItemLeft item={item} />
        <ItemPhotosRight images={item.images} type="publication" />
      </section>
    </>
  );
}

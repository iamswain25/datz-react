import React from "react";
import { Publication } from "../@type";
import PublicationMoreLeft from "../components/PublicationMoreLeft";
import PublicationMoreRight from "../components/PublicationMoreRight";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import {
  flexrow,
  flexcolumn,
  paddingH37,
  paddingH27,
} from "../components/styles";
import useParams from "../components/useParams";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";
import useItem from "../utils/useItem";
export default function PublicationReadmore() {
  const { address } = useParams();
  const isDesktop = useDesktop(true);
  const [publicaiton, loading, error] = useDocumentDataOnce<Publication>(
    firestore.collection("publication").doc(address.toLowerCase())
  );
  const item = useItem(publicaiton);
  if (loading) {
    return null;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <>
      <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <PublicationMoreLeft item={item} />
          <PublicationMoreRight item={item} />
        </section>
      </div>
    </>
  );
}

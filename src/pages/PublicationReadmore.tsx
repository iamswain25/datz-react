import React from "react";
import PublicationReadmoreStickyTop from "../components/PublicationReadmoreStickyTop";
import PublicationReadmoreRelated from "../components/PublicationReadmoreRelated";
import { useParams } from "react-router-dom";
import useDesktop from "../components/useDesktop";
import Header from "../components/Header";
import {
  flexrow,
  flexcolumn,
  paddingH37,
  paddingH27,
} from "../components/styles";
export default function Publication() {
  const { id } = useParams();
  console.log(id);
  const isDesktop = useDesktop();
  return (
    <>
     <Header sticky={isDesktop} />
      <div className={isDesktop ? paddingH37 : paddingH27}>
        <section className={isDesktop ? flexrow : flexcolumn}>
          <PublicationReadmoreStickyTop />
          <PublicationReadmoreRelated />
        </section>
      </div>
    </>
  );
}

import React from "react";
import { css } from "emotion";
import useDesktop from "../components/useDesktop";
import AboutHeader from "../components/AboutHeader";
import { marginH55, flexcolumncenter, marginH27 } from "../components/styles";
import BtnTop from "../components/BtnTop";
import Divider from "../components/Divider";
import { Grid } from "@material-ui/core";
import useItems from "../utils/useItems";
import useLang from "../components/useLang";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase";

const aStyle = css`
  font-family: datz-regular;
  text-decoration: underline;
  display: block;
  line-height: 1.5;
  font-size: 17px;
`;
const h1Style = css`
  font-family: datz-medium;
  font-size: 17px;
  line-height: 1.24;
  padding-bottom: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;
const titleAreaClass = css`
  font-size: 20px;
  line-height: 1.5;
  white-space: break-spaces;
  margin-top: 20px;
  font-family: datz-medium;
`;
const mapLinks = (en: boolean = false) => (stock: any, i: number) => {
  const { title, list } = stock;
  return (
    <div key={stock.title + i}>
      <span>{title}</span>
      {list?.map((l: any, i2: number) => (
        <a
          href={l.url}
          key={l.url + i2}
          className={aStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {en ? l.title_en : l.title_ko}
        </a>
      ))}
      <br />
    </div>
  );
};
export default function Contact() {
  const isDesktop = useDesktop(true);
  const [data] = useCollectionDataOnce(
    firestore
      .collection("contact")
      // .where("public", "==", true)
      .orderBy("order", "asc")
  );
  const items = useItems(data);
  const [, en] = useLang();
  const list = React.useMemo(() => {
    if (!items) return;
    const enquiry = items.find((i) => i.type2 === "enquiry");
    const phone = items.find((i) => i.type2 === "phone");
    const email = items.find((i) => i.type2 === "email");
    const catalog = items.find((i) => i.type2 === "catalog");
    const stocklist = items.filter((i) => i.type === "stockist");
    const collections = items.filter((i) => i.type === "collections");
    return { stocklist, enquiry, collections, phone, email, catalog };
  }, [items]);
  // if (!list) return null;
  return (
    <div
      className={css`
        background-color: #afafaf;
        font-family: datz-regular;
        text-align: center;
        color: #ffffff;
      `}
    >
      <AboutHeader sticky />
      {list && (
        <div
          className={css`
            display: flex;
            flex-direction: column;
            min-height: 600px;
            border-bottom: 1px solid #fff;
            padding-bottom: 20px;
            ${isDesktop ? marginH55 : marginH27}
          `}
        >
          <section
            className={css`
              ${flexcolumncenter}
              align-items: stretch;
              margin: 32px 0;
            `}
          >
            <h1
              className={css`
                font-family: datz-medium;
                font-size: 23px;
                line-height: 1.17;
              `}
            >
              Enquiry
            </h1>
            <Divider
              color="#fff"
              className={css`
                margin-top: 5px;
              `}
            />
            <a
              href={"mailto:" + list?.enquiry?.title}
              target="_blank"
              rel="noopener noreferrer"
              className={css`
                font-family: datz-medium;
                font-size: 16px;
                line-height: 1.19;
                margin-top: 12px;
                text-decoration: underline;
              `}
            >
              {list?.enquiry?.title}
            </a>
          </section>
          {
            <section
              className={css`
                margin: 32px 0;
              `}
            >
              <Grid container spacing={isDesktop ? 4 : 0}>
                <Grid item xs={12} sm={6}>
                  <h1 className={h1Style}>STOCKIST</h1>
                  <div className={titleAreaClass}>
                    {list?.stocklist?.map(mapLinks(en))}
                  </div>
                </Grid>
                <Grid container item xs={12} sm={6} direction="column">
                  <div>
                    <h1
                      className={
                        isDesktop
                          ? h1Style
                          : css`
                              ${h1Style} margin-top: 30px;
                            `
                      }
                    >
                      COLLECTIONS
                    </h1>
                    <div className={titleAreaClass}>
                      {list?.collections?.map(mapLinks(en))}
                    </div>
                  </div>
                  <div
                    className={css`
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: flex-end;
                    `}
                  >
                    <div
                      className={css`
                        margin: 32px 0 50px;
                      `}
                    >
                      <h1 className={h1Style}>CONTACT</h1>
                      <div
                        className={css`
                          font-size: 18px;
                          line-height: 1.39;
                          white-space: break-spaces;
                        `}
                      >
                        <div>{list?.phone?.title}</div>
                        <div>
                          <a
                            href={"tel:" + list?.phone?.text}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={css`
                              text-decoration: underline;
                            `}
                          >
                            {list?.phone?.text}
                          </a>
                        </div>
                        <div>-</div>
                        <div>{list?.email?.title}</div>
                        {list?.email?.list.map((l: any, key: number) => (
                          <div key={key}>
                            <span
                              className={css`
                                margin-right: 16px;
                              `}
                            >
                              {en ? l.title_en : l.title_ko}
                            </span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={"mailto:" + l.url}
                              className={css`
                                text-decoration: underline;
                              `}
                            >
                              {l.url}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={css`
                        margin: 32px 0 31px;
                      `}
                    >
                      <h1 className={h1Style}>CATALOG</h1>
                      <a
                        href={list?.catalog?.url}
                        className={aStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {list?.catalog?.title}
                      </a>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </section>
          }
        </div>
      )}
      {list && <BtnTop color="white" full />}
    </div>
  );
}

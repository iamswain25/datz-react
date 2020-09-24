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
  text-decoration: underline;
  display: block;
  line-height: 1.39;
  font-size: 18px;
`;
const h1Style = css`
  font-family: BauerGroteskOTW03;
  font-size: 17px;
  line-height: 1.24;
  padding-bottom: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;
const mapLinks = (en: boolean = false) => (stock: any, i: number) => {
  const { title, list } = stock;
  return (
    <div key={i}>
      <span>{title}</span>
      {list?.map((l: any, i2: number) => (
        <a
          href={l.url}
          key={i2}
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
    firestore.collection("contact").orderBy("order", "asc")
  );
  const items = useItems(data);
  const [, en] = useLang();
  const list = React.useMemo(() => {
    if (!items) return;
    const enquiry = items.find((i) => i.type === "enquiry");
    const phone = items.find((i) => i.type === "phone");
    const email = items.find((i) => i.type === "email");
    const catalog = items.find((i) => i.type === "catalog");
    const stocklist = items.filter((i) => i.type === "stockist");
    const collections = items.filter((i) => i.type === "collections");
    return { stocklist, enquiry, collections, phone, email, catalog };
  }, [items]);
  return (
    <>
      <div
        className={css`
          background-color: #afafaf;
          font-family: BauerGroteskOTW03-Regular;
          text-align: center;
          color: #ffffff;
        `}
      >
        <AboutHeader sticky />
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
                font-family: BauerGroteskOTW03;
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
                font-size: 16px;
                line-height: 1.19;
                margin-top: 12px;
              `}
            >
              {list?.enquiry?.title}
            </a>
          </section>
          <section
            className={css`
              margin: 32px 0;
            `}
          >
            <Grid container spacing={isDesktop ? 4 : 0}>
              <Grid item xs={12} sm={6}>
                <h1 className={h1Style}>STOCKIST</h1>
                <div
                  className={css`
                    font-size: 18px;
                    line-height: 1.39;
                  `}
                >
                  {list?.stocklist?.map(mapLinks(en))}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <h1 className={h1Style}>COLLECTIONS</h1>
                  {list?.collections?.map(mapLinks(en))}
                </div>
                <div
                  className={css`
                    margin: 32px 0;
                  `}
                >
                  <h1 className={h1Style}>CONTACT</h1>
                  <div
                    className={css`
                      line-height: 1.39;
                      font-size: 18px;
                      white-space: break-spaces;
                    `}
                  >
                    <div>{list?.phone?.title}</div>
                    <div>
                      <a href={"tel:" + list?.phone?.text}>
                        {list?.phone?.text}
                      </a>
                    </div>
                    <div>-</div>
                    <div>{list?.email?.title}</div>
                    {list?.email?.list.map(
                      ({ name, email }: any, key: number) => (
                        <div key={key}>
                          <span
                            className={css`
                              margin-right: 16px;
                            `}
                          >
                            {name}
                          </span>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"mailto:" + email}
                          >
                            {email}
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div
                  className={css`
                    margin: 32px 0;
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
              </Grid>
            </Grid>
          </section>
        </div>
        <BtnTop color="white" full />
      </div>
    </>
  );
}

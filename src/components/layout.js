import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Header from "./Header";

import "./layout.css";
import { FirebaseContext } from "gatsby-plugin-firebase";
import { flexrowcenter } from "./styles";
const Layout = ({ children }) => {
  const firebase = React.useContext(FirebaseContext);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  if (!firebase) {
    return null;
    //loading
  }
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div
          className={css`
            ${flexrowcenter}
            height: 73px;
            background-color: #ececec;
          `}
        >
          <Link style={{ marginLeft: 37 }} to="/">
            datz
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Contact
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Press
          </Link>
          <Link style={{ marginLeft: 37 }} to="/">
            Support
          </Link>
        </div>
        <div
          className={css`
            ${flexrowcenter}
          `}
        >
          <Link style={{ marginLeft: 37 }}>datz press</Link>
          <Link style={{ marginLeft: 37 }}>d'ark room</Link>
          <Link style={{ marginLeft: 37 }}>datz museum of art</Link>
          <Link style={{ marginLeft: 37 }}>
            Sign up for Datz newsletter &gt;
          </Link>
          <Link style={{ marginLeft: 37 }}>email</Link>
          <Link style={{ marginLeft: 37 }}>share</Link>
          <Link style={{ marginLeft: 37 }}>instagram</Link>
          <Link style={{ marginLeft: 37 }}>facebook</Link>
          <Link style={{ marginLeft: 37 }}>twitter</Link>
          <Link style={{ marginLeft: 37 }}>blogger</Link>
        </div>
        <div
          className={css`
            ${flexrowcenter}
          `}
        >
          <div>
            <div>Copyright © 2019 Datz Inc. All rights reserved.</div>
            <div>Privacy Policy | Terms of Use</div>
          </div>
          <div>
            <div>
              <span>대표: 주상연 |</span>
              <span>전화: 02-447-2581 |</span>
              <span>사업자등록번호: 206-26-99381</span>
            </div>
            <div>
              <span>통신판매: 제 2012-서울광진-0124 호 |</span>
              <span>이용약관 |</span>
              <span>개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

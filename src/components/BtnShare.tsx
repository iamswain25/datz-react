import React from "react";
import Share from "../assets/svg/Share";
import { css } from "emotion";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import { NaverBlogButton } from "react-social-kr";
import { Dialog, DialogTitle, Grid } from "@material-ui/core";
import naverblog from "../assets/images/naverblog.png";
export default function BtnShare({
  color = "#cccccc",
  hash,
  title = "Datzpress",
}: {
  color?: string;
  hash?: string;
  title?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const url = window.location.href;
  function handler() {
    if (window.navigator.share) {
      window.navigator.share({
        title: title,
        url: url + hash ? "#" + hash : "",
      });
    } else {
      setOpen(true);
    }
  }
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handler}
        className={css`
          margin-right: 16px;
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 1.21;
          color: ${color};
          align-self: flex-start;
        `}
      >
        <Share
          color={color}
          className={css`
            height: 15px;
          `}
        />
        <div
          className={css`
            margin-left: 5px;
          `}
        >
          share
        </div>
      </button>
      <Dialog open={open} onClose={close}>
        <section
          className={css`
            background-color: white;
            margin: auto;
            flex: 1;
          `}
        >
          <DialogTitle>Share</DialogTitle>
          <div style={{ padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item>
                <EmailShareButton url={url} children={<EmailIcon round />} />
              </Grid>
              <Grid item>
                <FacebookShareButton
                  url={url}
                  children={<FacebookIcon round />}
                />
              </Grid>
              <Grid item>
                <NaverBlogButton
                  pathname={url}
                  children={
                    <img
                      alt="naver blog"
                      src={naverblog}
                      style={{ width: 64, height: 64, borderRadius: 32 }}
                    />
                  }
                />
              </Grid>
              <Grid item>
                <TwitterShareButton
                  url={url}
                  children={<TwitterIcon round />}
                />
              </Grid>
              <Grid item>
                <LinkedinShareButton
                  url={url}
                  children={<LinkedinIcon round />}
                />
              </Grid>
              <Grid item>
                <TelegramShareButton
                  url={url}
                  children={<TelegramIcon round />}
                />
              </Grid>
              <Grid item>
                <LineShareButton url={url} children={<LineIcon round />} />
              </Grid>
            </Grid>
          </div>
        </section>
      </Dialog>
    </>
  );
}

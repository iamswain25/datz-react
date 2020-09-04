import React from "react";
import { css } from "emotion";
import { paddingH37, paddingH17 } from "./styles";
import { Grid } from "@material-ui/core";
import useDesktop from "./useDesktop";
const classes = {
  title: css`
    font-size: 21px;
    line-height: 1.29;
    margin-top: 54px;
  `,
  price: css`
    margin-top: 10px;
    font-family: BauerGroteskOTW03-Regular;
  `,
  desc: css`
    margin-top: 10px;
    font-family: BauerGroteskOTW03-Regular;
  `,
};
const items = [
  {
    title: "Datz",
    price: `Individual Membership\n$50 annually`,
    desc:
      "Datz Membership includes free museum entry at Datz Museum of Art, event invitations, and membership discounts on selected merchandise. ",
  },
  {
    title: "Gitz",
    price: `Individual Membership\n$300 annually`,
    desc:
      "Gitz Membership includes free museum entry, event invitations, annual celebration invitations, and special membership discount on Datz books and merchandise.",
  },
  {
    title: "Frame",
    price: `Patron Membership\n$1000 ~ annually `,
    desc:
      "Bitz Membership includes free museum entry, event invitations, annual celebration invitations, special membership discount on all purchases from Datz store, and comes with a Datz artist collector’s print.",
  },
];
export default function SupportBottomThree() {
  const isDesktop = useDesktop();
  return (
    <Grid
      className={css`
        padding-bottom: 43px;
        font-family: BauerGroteskOTW03;
        font-size: 17px;
        line-height: 1.47;
        color: #ffffff;
        text-align: center;
        background-color: #afafaf;
        ${isDesktop ? paddingH37 : paddingH17}
      `}
    >
      <Grid container spacing={isDesktop ? 3 : 0}>
        {items.map((item, i) => {
          const { title, price, desc } = item;
          return (
            <Grid item xs={12} sm={4} key={i}>
              <div className={classes.title}>{title}</div>
              <div className={classes.price}>{price}</div>
              <div className={classes.desc}>{desc}</div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

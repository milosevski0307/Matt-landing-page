import * as React from "react";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  footerBar: {
    backgroundColor: "rgba(0, 0, 0, 0.025)",
    color: "rgba(0, 0, 0, 0.568)",
    height: "97px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerBar}>
      <div className="desktop">
        <span>© Copyright 2021 Sisyphus.Finance. All Rights Reserved.</span>
      </div>
      <div className="phone">
        <span>© Copyright 2021 Sisyphus.Finance.<br/> All Rights Reserved.</span>
      </div>
    </div>
  );
};
export default Footer;

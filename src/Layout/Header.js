import * as React from "react";
import { useState } from "react";
import logo from "../logo.svg";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Fab,
} from "@material-ui/core";
import Discord from "../assets/images/discord.png";
import WhiteDiscord from "../assets/images/whiteDiscord.png";
import { Twitter, YouTube, Menu } from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Refinance Calculator`, path: `/finance` },
  { title: `Learn How it Works?`, path: `/learn` },
  { title: `Contact`, path: `/contact` },
];
const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignContent: `center`,
  },
  appBar: {
    backgroundColor: "#ffffff",
    color: "black",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    zIndex: "9999 !important",
  },
  toolBar: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
    zIndex: "9999",
  },
  spacer: {
    flex: "1 1 auto",
  },
  linkText: {
    textDecoration: `none !important`,
    color: `#222222`,
    marginLeft: "40px",
    textAlign: "center",
    cursor: "pointer",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  twitterStyle: {
    backgroundColor: "white",
    boxShadow: "none",
    "&:hover": {
      background: "rgb(60, 174, 250)",
      color: "white",
    },
    width: "52px",
    height: "52px",
    borderColor: "rgb(60, 174, 250)",
    borderWidth: "2px",
    borderStyle: "solid",
    float: "right",
    marginLeft: "10px",
    color: "rgb(60, 174, 250)",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  youTubeStyle: {
    backgroundColor: "white",
    boxShadow: "none",
    "&:hover": {
      background: "red",
      color: "white",
    },
    width: "52px",
    height: "52px",
    borderColor: "red",
    borderWidth: "2px",
    borderStyle: "solid",
    float: "right",
    marginLeft: "10px",
    color: "red",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  appleStyle: {
    backgroundColor: "white",
    boxShadow: "none",
    "&:hover": {
      background: "rgb(106, 89, 255)",
      color: "white",
    },
    width: "52px",
    height: "52px",
    borderColor: "rgb(106, 89, 255)",
    borderWidth: "2px",
    borderStyle: "solid",
    float: "right",
    marginLeft: "10px",
    color: "rgb(106, 89, 255)",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  underLine: {
    width: "85%",
    borderTop: "4px solid rgb(0, 214, 125)",
    position: "absolute",
    top: "66px",
  },
  logo: {
    width: "80px",
    height: "80px",
  },
  discordStyle: {
    width: "50%",
    "&:hover": {
      filter: "sepia(100%) grayscale(100%)",
    },
  },
});

const Header = () => {
  const [count, setCount] = useState(0);
  const [discordBtn, setDiscordBtn] = React.useState(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const selectedItem = (index) => {
    setOpen(false);
    linkClick(index);
  };
  const linkClick = (index) => {
    setCount(index);
  };
  const handleMouseEnter = () => {
    setDiscordBtn(false);
  };
  const handleMouseLeave = () => {
    setDiscordBtn(true);
  };
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <img src={logo} className={classes.logo} alt="logo" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }, index) => (
              <Link
                to={path}
                key={title}
                className={classes.linkText}
                onClick={() => linkClick(index)}
              >
                <ListItem className={classes.linkText} button>
                  <ListItemText primary={title}></ListItemText>
                  {count === index && (
                    <span className={classes.underLine}></span>
                  )}
                </ListItem>
              </Link>
            ))}
          </List>

          <div className={classes.spacer}></div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            className="phone-icon"
            onClick={handleClick}
          >
            <Menu />
          </IconButton>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.youTubeStyle}
          >
            <YouTube />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.twitterStyle}
          >
            <Twitter />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.appleStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={discordBtn ? Discord : WhiteDiscord} alt="discord"></img>
          </Fab>
        </Toolbar>
      </AppBar>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        className="phone"
        style={{ position: "relative", zIndex: 300, width: "100%" }}
      >
        <List component="div">
          {navLinks.map(({ title, path }, index) => (
            <Link
              to={path}
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                button
                style={{ paddingLeft: "20px", backgroundColor: "white" }}
                className="item"
                onClick={selectedItem}
              >
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};
export default Header;

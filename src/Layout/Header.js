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
  Link
} from "@material-ui/core";
import { ReactComponent as Discord } from "../assets/icons8-discord.svg"
import { Twitter, YouTube } from "@material-ui/icons";
const navLinks = [
  { title: `Home`, path: `/home` },
  { title: `Refinance Calculator`, path: `/home` },
  { title: `Learn How it Works?`, path: `/home` },
  { title: `Contact`, path: `/home` },
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
  },
  toolBar: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
  },
  spacer: {
    flex: "1 1 auto",
  },
  linkText: {
    textDecoration: `none !important`,
    // textTransform: `uppercase`,
    color: `#222222`,
    marginLeft: "40px",
    textAlign: "center",
    cursor: "pointer",
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
  },
  underLine: {
    width: "85%",
    borderTop: "4px solid rgb(0, 214, 125)",
    position: "absolute",
    top:'66px'
  },
  logo: {
    width: "80px",
    height: "80px",
  },
  discordStyle:{
    "&:hover": {
      fill:'white'
    },
  }
});


const Header = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const linkClick=(index)=>{
    setCount(index)
    console.log(count);
  }
  return (
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
              // href={path}
              key={title}
              className={classes.linkText}
              onClick={() => linkClick(index)}
            >
              <ListItem className={classes.linkText}>
                <ListItemText primary={title} ></ListItemText>
                {count===index&&<span className={classes.underLine}></span>}
              </ListItem>
            </Link>
          ))}
        </List>
        <div className={classes.spacer}></div>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.youTubeStyle}
        >
          <YouTube />
        </Fab>
        <Fab color="primary" aria-label="add" className={classes.twitterStyle}>
          <Twitter />
        </Fab>
        <Fab color="primary" aria-label="add" className={classes.appleStyle}>
          <Discord  className={classes.discordStyle} width="50%" fill="white" />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

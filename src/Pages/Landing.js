import * as React from "react";
import { useRef } from "react";
import { makeStyles, Button, Fab } from "@material-ui/core";
// import LandingImage from "../assets/images/landing.jpg";
import Background from "../assets/images/background.png";
import Path from "../assets/images/path.png";
import Play from "../assets/images/play.png";
import { Twitter, YouTube } from "@material-ui/icons";
import Discord from "../assets/images/discord.png";
import WhiteDiscord from "../assets/images/whiteDiscord.png";
import Main from "../assets/images/main.png";

const useStyles = makeStyles({
  boxStyle: {
    paddingLeft: "142px",
    paddingTop: "5px",
    textAlign: "left",
    display: "flex",
    width: "100%",
    flexFlow: "row",
    zIndex: "200",
  },
  spacer: {
    flex: "1 1 auto",
  },
  welcomeLine: {
    fontSize: "39px",
    textAlign: "left",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  roundLine: {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "5px",
    marginTop: "10px",
    fontWeight: "bold",
  },
  smallText: {
    fontSize: "16px",
    textAlign: "center",
  },
  computeLine: {
    fontSize: "73px",
    textAlign: "left",
    color: "rgb(21, 204, 110)",
    fontWeight: "bold",
  },
  decideLine: {
    fontSize: "73px",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "70px",
  },
  simpleLine: {
    fontSize: "40px",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "rgb(0,0,0,0.7)",
  },
  buttonStyle: {
    backgroundColor: "rgb(21, 204, 110)",
    color: "white",
    marginLeft: "0px",
    height: "64px",
    width: "223px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "rgb(21, 204, 110)",
      color: "white",
    },
  },
  disableStyle: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
    },
    boxShadow: "none",
    width: "150px",
    height: "150px",
    borderColor: "grey",
    borderWidth: "2px",
    borderStyle: "solid",
    color: "rgb(106, 89, 255)",
  },
  enableStyle: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
    },
    boxShadow: "none",
    width: "150px",
    height: "150px",
    borderColor: "rgb(57, 230, 149)",
    borderWidth: "2px",
    borderStyle: "solid",
    color: "rgb(106, 89, 255)",
  },
  videoStyle: {
    // backgroundColor: "grey",
    positive: "absolute",
  },
  twitterStyle1: {
    backgroundColor: "rgb(255, 255, 255, 0.3)",
    // boxShadow: "none",
    "&:hover": {
      background: "rgb(60, 174, 250, 0.1)",
      color: "white",
    },
    width: "114px",
    height: "114px",
    float: "right",
    marginLeft: "10px",
    color: "rgb(60, 174, 250)",
    position: "absolute",
    zIndex: "100",
    "@media (max-width: 992px)": {
      width: "50px",
      height: "50px",
    },
  },
  playStyle: {
    "@media (max-width: 992px)": {
      width: "50%",
      marginLeft: "5px",
      marginTop: "3px",
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
    marginLeft: "10px",
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
    marginLeft: "10px",
    color: "rgb(60, 174, 250)",
  },
});

const Landing = () => {
  const classes = useStyles();
  const [playShow, setPlayShow] = React.useState(true);
  const [discordBtn, setDiscordBtn] = React.useState(true);

  const videoRef = useRef();
  const playRef = useRef();

  const play = () => {
    videoRef.current.play();
    setPlayShow(!playShow);
  };
  const pause = () => {
    if (!playShow) {
      videoRef.current.pause();
      setPlayShow(!playShow);
    }
  };
  const myCallback = () => {
    videoRef.current.pause();
    setPlayShow(!playShow);
  };
  const handleMouseEnter = () => {
    setDiscordBtn(false);
  };
  const handleMouseLeave = () => {
    setDiscordBtn(true);
  };
  return (
    <>
      <div className="phone">
        <div
          style={{ fontSize: "18px", marginTop: "40px", fontWeight: "bold" }}
        >
          Welcome To Sisyphus.Finance
        </div>
        <div
          style={{
            fontSize: "22px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "rgb(21, 204, 110)",
            fontWeight: "bold",
          }}
        >
          Compute & Compare loans
        </div>
        <Button variant="contained" className={classes.buttonStyle}>
          Get Started
        </Button>
        <div
          style={{
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Decide if refinancing is
          <br />
          right for you!
        </div>
      </div>
      <div className="desktop">
        <div className={classes.boxStyle}>
          <div className="text-area row">
            <div className="col-md-12">
              <div className={classes.welcomeLine}>
                Welcome To Sisyphus.Finance
              </div>
              <div className={classes.computeLine}>Compute & Compare loans</div>
              <div className={classes.decideLine}>
                Decide if refinancing is
                <br />
                right for you!
              </div>
              <Button variant="contained" className={classes.buttonStyle}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Background} alt="big" width="100%"></img>
        </div>
        <div className={classes.simpleLine}>Refinance Made Simple</div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {playShow && (
          <Fab
            color="primary"
            aria-label="add"
            className={classes.twitterStyle1}
            ref={playRef}
            onClick={() => play()}
          >
            <img src={Play} alt="play" className={classes.playStyle}></img>
          </Fab>
        )}
        <video
          id="video1"
          width="80%"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className={classes.videoStyle}
          ref={videoRef}
          onClick={() => pause()}
          onEnded={() => myCallback()}
        ></video>
      </div>
      <div className="phone">
        <div
          style={{
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
          className="video-title"
        >
          Refinance Made Simple
        </div>
        <img src={Main} alt="main"></img>
        <div
          style={{
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Get Connected
        </div>
        <div style={{ marginBottom: "20px" }}>
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
        </div>
      </div>
      <div className="desktop">
        <div className="container pt-5 mt-5 pb-5 mb-5">
          <div className="d-flex flex-wrap justify-content-center">
            <img src={Path} alt="path" width="85%"></img>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={classes.roundLine}>Find Rates</div>
              <div className={classes.smallText}>
                <div>search rates online, get quotes, make</div>
                <div>up numbers! Whatever you want to</div>
                <div>do works for us!</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={classes.roundLine}>Calculate</div>
              <div className={classes.smallText}>
                <div>Punch in your members and calculate</div>
                <div>the true cost of your different</div>
                <div>mortgages</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={classes.roundLine}>Save</div>
              <div className={classes.smallText}>
                <div>Select the mortgage that will save</div>
                <div>you the most money!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;

import * as React from "react";
import { useRef } from "react";
import { makeStyles, Button, Fab } from "@material-ui/core";
// import LandingImage from "../assets/landing.jpg";
import Background from "../assets/background.png";
import Path from "../assets/path.png";
import Play from "../assets/play.png";

const useStyles = makeStyles({
  boxStyle: {
    paddingLeft: "142px",
    paddingTop:'5px',
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
    fontSize: "78px",
    textAlign: "left",
    color: "rgb(21, 204, 110)",
    fontWeight: "bold",
  },
  decideLine: {
    fontSize: "78px",
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
  twitterStyle: {
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
  },
});

const Landing = () => {
  const classes = useStyles();
  const [playShow, setPlayShow] = React.useState(true)

  const videoRef = useRef();
  const playRef = useRef();
  const play = () => {
    videoRef.current.play();
    setPlayShow(!playShow);
  };
  const pause = () => {
    videoRef.current.pause();
    setPlayShow(!playShow);
  };
  const myCallback = () => {
    videoRef.current.pause();
    setPlayShow(!playShow);
  };
  return (
    <>
      <div className={classes.boxStyle}>
        <div className="text-area">
          <div className={classes.welcomeLine}>Welcome To Sisyphus.Finance</div>
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
      <div className="image">
        <img src={Background} alt="big" width="104%"></img>
      </div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <div className={classes.simpleLine}>Refinance Made Simple</div>
        {playShow&&<Fab
          color="primary"
          aria-label="add"
          className={classes.twitterStyle}
          ref={playRef}
          onClick={() => play()}
        >
          <img src={Play} alt="play"></img>
        </Fab>}
        <video
          id="video1"
          width="80%"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className={classes.videoStyle}
          ref={videoRef}
          onClick={()=>pause()}
          onEnded={() => myCallback()}></video>
      </div>
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
    </>
  );
};
export default Landing;

import * as React from "react";
import { useRef } from 'react'
import { makeStyles, Button, Fab } from "@material-ui/core";
import LandingImage from "../assets/landing.jpg";
import Path from "../assets/path.png";
import Play from "../assets/play.png";

const useStyles = makeStyles({
  boxStyle: {
    paddingLeft: "142px",
    paddingTop: "120px",
    textAlign: "left",
    marginBottom: "180px",
    display: "flex",
    width: "100%",
    flexFlow: "row",
  },
  spacer: {
    flex: "1 1 auto",
  },
  welcomeLine: {
    fontSize: "20px",
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
    fontSize: "10px",
    textAlign: "center",
  },
  computeLine: {
    fontSize: "50px",
    textAlign: "left",
    color: "rgb(57, 230, 149)",
    fontWeight: "bold",
  },
  decideLine: {
    fontSize: "45px",
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
    backgroundColor: "rgb(58, 214, 142)",
    color: "white",
    marginLeft: "0px",
    "&:hover": {
      backgroundColor: "rgb(58, 214, 142)",
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
    position:'absolute',
    zIndex:'100'
  },
});
const play = (video) =>{
  video.current.play()
}
const Landing = () => {
  const classes = useStyles();
  const videoRef = useRef();
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
        <div className={classes.spacer}></div>
        <div className="d-flex flex-wrap justify-content-end align-content-center">
          <div>
            <img
              src={LandingImage}
              alt="big"
              width="90%"
              className="image"
            ></img>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <div className={classes.simpleLine}>Refinance Made Simple</div>
        <Fab color="primary" aria-label="add" className={classes.twitterStyle} onClick={()=>play(videoRef)}>
          <img src={Play} alt="play"></img>
        </Fab>
        <video
          id="video1"
          width="80%"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className={classes.videoStyle}
          ref={videoRef}
        ></video>
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

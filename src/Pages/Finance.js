import {
  Card,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  Fab,
  Checkbox,
  Box,
} from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Finance = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Grid
      container
      className="mt-1 p-3"
      style={{ backgroundColor: "rgb(251,251,251" }}
    >
      <Grid item lg={3}>
        <Grid container item className="w-100">
          <Card className="w-100">
            <div
              className="card-title p-3 text-left font-weight-bold"
              style={{ fontSize: "20px" }}
            >
              Current Mortgage
            </div>
            <Grid container spacing={6} className="pl-3 pr-3 pt-2">
              <Grid item xs={6}>
                <TextField label="Loan Balance" className="w-100"></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Payment(P&I Only)"
                  className="w-100"
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={6}>
                <TextField label="Interest Rate" className="w-100"></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Years Till Sell"
                  className="w-100"
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={12}>
                <TextField
                  label="Number of Payments Remaining on Loan"
                  className="w-100"
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={12}>
                <TextField
                  label="%Return on Investment"
                  className="w-100"
                ></TextField>
              </Grid>
            </Grid>
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="Assume closing cost would be invested"
              className="text-left pt-3 pb-2 pl-3"
              style={{ float: "left" }}
            />
          </Card>
        </Grid>
        <Grid container item className="mt-5">
          <Card className="w-100">
            <Grid container item className="card-title only-title">
              <div
                className="card-title p-3 text-left font-weight-bold"
                style={{ fontSize: "20px" }}
              >
                New Mortgage Options
              </div>
              <div className="ml-auto mt-2 mr-3">
                <Fab color="primary" aria-label="add" className="fab-btn mr-2">
                  <Add />
                </Fab>
                <Fab color="primary" aria-label="add" className="fab-btn red">
                  <Delete />
                </Fab>
              </div>
            </Grid>
          </Card>
          <Grid container item style={{ overflow: "auto", height: "1030px" }}>
            <Card className="w-100">
              <Grid container spacing={6} className="pl-3 pr-3 pt-2">
                <Grid item xs={12} style={{ position: "relative" }}>
                  <TextField
                    label="Mortgage Name"
                    className="w-100"
                  ></TextField>
                  <Checkbox
                    color="primary"
                    style={{ position: "absolute", top: "10px", right: "15px" }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Loan Amount" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Interest Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField
                    label="Inflation Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Tax Rate" className="w-100"></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Years" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Years Till Sell"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="Cost to Acquire Mortgage"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="%Return on Investment"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="Invest Payment difference?"
                className="text-left pt-3 pb-2 pl-3"
                style={{ float: "left" }}
              />
            </Card>
            <Card className="w-100 mt-5">
              <Grid container spacing={6} className="pl-3 pr-3 pt-2">
                <Grid item xs={12} style={{ position: "relative" }}>
                  <TextField
                    label="Mortgage Name"
                    className="w-100"
                  ></TextField>
                  <Checkbox
                    color="primary"
                    style={{ position: "absolute", top: "10px", right: "15px" }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Loan Amount" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Interest Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField
                    label="Inflation Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Tax Rate" className="w-100"></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Years" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Years Till Sell"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="Cost to Acquire Mortgage"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="%Return on Investment"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="Invest Payment difference?"
                className="text-left pt-3 pb-2 pl-3"
                style={{ float: "left" }}
              />
            </Card>
            <Card className="w-100 mt-5">
              <Grid container spacing={6} className="pl-3 pr-3 pt-2">
                <Grid item xs={12} style={{ position: "relative" }}>
                  <TextField
                    label="Mortgage Name"
                    className="w-100"
                  ></TextField>
                  <Checkbox
                    color="primary"
                    style={{ position: "absolute", top: "10px", right: "15px" }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Loan Amount" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Interest Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField
                    label="Inflation Rate"
                    className="w-100"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Tax Rate" className="w-100"></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={6}>
                  <TextField label="Years" className="w-100"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Years Till Sell"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="Cost to Acquire Mortgage"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={6} className="pl-3 pr-3">
                <Grid item xs={12}>
                  <TextField
                    label="%Return on Investment"
                    className="w-100"
                  ></TextField>
                </Grid>
              </Grid>
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="Invest Payment difference?"
                className="text-left pt-3 pb-2 pl-3"
                style={{ float: "left" }}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={9} className="res-p-3 w-100">
        <Grid container item className="w-100 pt-3 pb-3">
          <h3>Mortgage Costs</h3>
        </Grid>
        <Grid item className="res-mt-5 w-100">
          <Card
            className=" res-mt-5 left d-flex flex-wrap w-100"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <Box
              style={{
                width: "33.33%",
                borderRight: "1px rgb(220,220,220) solid",
              }}
            >
              <Grid container>
                <div
                  className="p-3 text-center font-weight-bold w-100"
                  style={{
                    fontSize: "20px",
                    color: "rgb(25,118,210)",
                    borderBottom: "1px rgb(220,220,220) solid",
                  }}
                >
                  Current Mortgage
                </div>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Payment
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $1894.30</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Total cost adjusted
                    <br />
                    for tax & inflation
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $549,433.23</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                width: "33.33%",
                borderRight: "1px rgb(220,220,220) solid",
              }}
            >
              <Grid container>
                <div
                  className="p-3 text-center font-weight-bold w-100"
                  style={{
                    fontSize: "20px",
                    color: "rgb(25,118,210)",
                    borderBottom: "1px rgb(220,220,220) solid",
                  }}
                >
                  Mortgage Name (1)
                </div>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Payment
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $1894.30</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Total cost adjusted
                    <br />
                    for tax & inflation
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $549,433.23</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Years to break even
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> 3.32</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Monthly savings
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $220.59/month</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3 pb-5">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Total monthly interest
                    <br />& opportunity coat saved
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $18, 032</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                width: "33.33%",
                borderRight: "1px rgb(220,220,220) solid",
              }}
            >
              <Grid container>
                <div
                  className="p-3 text-center font-weight-bold w-100"
                  style={{
                    fontSize: "20px",
                    color: "rgb(25,118,210)",
                    borderBottom: "1px rgb(220,220,220) solid",
                  }}
                >
                  Mortgage Name (2)
                </div>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Payment
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $1894.30</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Total cost adjusted
                    <br />
                    for tax & inflation
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $549,433.23</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Years to break even
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> 3.32</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Monthly savings
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $220.59/month</span>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="pl-3 pt-3 pb-5">
                <Grid item xs={6} className="text-left">
                  <div
                    className="text-left w-100"
                    style={{
                      fontSize: "16px",
                      color: "rgb(47,47,47)",
                      fontWeight: "600",
                    }}
                  >
                    Total monthly interest
                    <br />& opportunity coat saved
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="text-left w-100"
                    style={{ fontSize: "16px", color: "rgb(0,0,0)" }}
                  >
                    <span>: </span>
                    <span className="font-weight-bold"> $18, 032</span>
                  </div>
                </Grid>
              </Grid>
            </Box> 
          </Card>
        </Grid>
        <Grid item className="mt-5 w-100">
          <Card className="w-100 p-3">
              <h3 className="pb-3">Mortgage Graph</h3>
            <ResponsiveContainer width="100%" aspect={25.0 / 9.0}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                <YAxis  axisLine={false} axisType={false}/>
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item className="mt-5 w-100 text-left">
            <h4>Loan Balance</h4>
            <p>As a front end developer, more and more frequently I am given designs that include a horizontal scrolling component. This has become especially common on mobile to help reduce the vertical height of dense pages. We’ve all seen them before. Our comp has something like this</p>
            <h4>Interest Rate</h4>
            <p>As a front end developer, more and more frequently I am given designs that include a horizontal scrolling component. This has become especially common on mobile to help reduce the vertical height of dense pages. We’ve all seen them before. Our comp has something like this</p>
            <h4>Inflation Rate</h4>
            <p>As a front end developer, more and more frequently I am given designs that include a horizontal scrolling component. This has become especially common on mobile to help reduce the vertical height of dense pages. We’ve all seen them before. Our comp has something like this</p>
            <h4>Tax Rate</h4>
            <p>As a front end developer, more and more frequently I am given designs that include a horizontal scrolling component. This has become especially common on mobile to help reduce the vertical height of dense pages. We’ve all seen them before. Our comp has something like this</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Finance;

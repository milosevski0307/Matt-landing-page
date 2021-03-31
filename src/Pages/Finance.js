import {
  Card,
  Grid,
  TextField,
  FormControlLabel,
  Fab,
  Checkbox,
  Button,
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
  const color =[
    '#2ca25f',
    '#8856a7',
    '#636363',
    '#43a2ca',
    '#e34a33',
    '#2b8cbe',
    '#756bb1',
    '#dd1c77',
  ]
  const optionType = {
    selected: false,
    mortgageName: "",
    loanAmount: "0",
    interestRate: "0",
    inflationRate: "0",
    taxRate: "0",
    years: "0",
    yearsTillSell: "0",
    cost: "0",
    returnOnInvest: "0",
    assume: false,
    payment: "0",
    totalCost: "0",
    yearsToEven: "0",
    monthlySaving: "0",
    totalSaving: "0",
  };
  const currentMortgage = {
    loanBalance: "",
    currentMortgagePayment: "",
    interestRate: "",
    yearsTillSell: "",
    numberOfPayments: "",
    returnOnInvest: "",
    assume: false,
    mortgageCostPayment: "0",
    currentMortgageTotalCost: "0",
  };

  const [option, setOption] = React.useState([]);
  const [dataGraph, setDataGraph] = React.useState([]);
  const [line, setLine] = React.useState(['current']);
  const [current, setCurrent] = React.useState(currentMortgage);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    calcOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  const addOption = () => {
    setCount((count) => count + 1);
    let temp = [...option];
    let temp1 = { ...optionType };
    temp1.mortgageName = "Mortgage Name ( " + count + " )";
    setOption([temp1, ...temp]);
  };
  const deleteOption = () => {
    setOption(option.filter((item) => item.selected === false));
    setDataGraph([])
  };
  const optionChange = (index, name, event, type) => {
    setOption(
      option.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: type === 0 ? event.target.value : event.target.checked,
            }
          : item
      )
    );
  };
  const currentChange = (name, event, type) => {
    setCurrent({
      ...current,
      [name]: type === 0 ? event.target.value : event.target.checked,
    });
  };
  const calcCurrentMortgage = () => {
    let temp = { ...current };
    temp.mortgageCostPayment = (
      current.currentMortgagePayment *
      (1 - current.interestRate / 100)
    ).toFixed(2);
    temp.currentMortgageTotalCost = current.assume
      ? (
          temp.mortgageCostPayment * current.numberOfPayments +
          current.yearsTillSell * (1 + current.returnOnInvest / 100)
        ).toFixed(2)
      : (temp.mortgageCostPayment * current.numberOfPayments).toFixed(2);
    setCurrent(temp);
  };
  const calcOptions = () => {
    let temp = [...option];
    let max = 0;
    temp.map((item) => {
      if (item.years * 12 > max) max = item.years * 12;
      item.payment = (
        item.loanAmount / (item.years * 12) +
        ((item.interestRate / 100) * item.loanAmount) / 12
      ).toFixed(2);

      if (item.assume)
        item.totalCost = (
          item.payment * (item.years * 12) +
          item.yearsTillSell * (1 + item.returnOnInvest / 100)
        ).toFixed(2);
      else
        item.totalCost = (
          current.mortgageCostPayment * current.numberOfPayments
        ).toFixed(2);
      item.yearsToEven = (
        (item.loanAmount / item.cost) *
        (1 + item.taxRate / 100)
      ).toFixed(2);
      item.monthlySaving = (current.mortgageCostPayment - item.payment).toFixed(
        2
      );
      item.totalSaving = (
        current.currentMortgageTotalCost - item.totalCost
      ).toFixed(2);
      return item;
    });
    setOption(temp);
    setLine(['current'])
    generateData(max)
  };
  const generateData = (max) => {
    let data = [];
    for (let i = 0; i < max; i++) data.push({ X: i });
    for (let i = 0; i < current.numberOfPayments; i++) {
      data[i]={
        ...data[i],
        current: current.currentMortgagePayment*i
      }
    }

    let lineTemp =['current'];
    option.map((item)=>{
        lineTemp.push(item.mortgageName)
      for (let i = 0; i < item.years*12; i++) {
        data[i]={
          ...data[i],
          [item.mortgageName]: (item.payment*i).toFixed(2)
        }
      }
      return item;
    })
    setLine(lineTemp)
    setDataGraph(data)
  };
  const calculation = () => {
    calcCurrentMortgage();
    calcOptions();
  };
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
                <TextField
                  label="Loan Balance"
                  className="w-100"
                  onChange={(event) => currentChange("loanBalance", event, 0)}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Payment(P&I Only)"
                  className="w-100"
                  onChange={(event) =>
                    currentChange("currentMortgagePayment", event, 0)
                  }
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={6}>
                <TextField
                  label="Interest Rate"
                  className="w-100"
                  onChange={(event) => currentChange("interestRate", event, 0)}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Years Till Sell"
                  className="w-100"
                  onChange={(event) => currentChange("yearsTillSell", event, 0)}
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={12}>
                <TextField
                  label="Number of Payments Remaining on Loan"
                  className="w-100"
                  onChange={(event) =>
                    currentChange("numberOfPayments", event, 0)
                  }
                ></TextField>
              </Grid>
            </Grid>
            <Grid container spacing={6} className="pl-3 pr-3">
              <Grid item xs={12}>
                <TextField
                  label="%Return on Investment"
                  className="w-100"
                  onChange={(event) =>
                    currentChange("returnOnInvest", event, 0)
                  }
                ></TextField>
              </Grid>
            </Grid>
            <FormControlLabel
              value="end"
              control={<Checkbox name="jason" color="primary" />}
              label="Assume closing cost would be invested"
              className="text-left pt-3 pb-2 pl-3"
              style={{ float: "left" }}
              onChange={(event) => currentChange("assume", event, 1)}
            />
          </Card>
        </Grid>
        <Grid container item className="mt-5 w-100">
          <Card className="w-100">
            <Grid container item className="card-title only-title">
              <div
                className="card-title p-3 text-left font-weight-bold"
                style={{ fontSize: "20px" }}
              >
                New Mortgage Options
              </div>
              <div className="ml-auto mt-2 mr-3">
                <Fab
                  color="primary"
                  aria-label="add"
                  className="fab-btn mr-2"
                  onClick={addOption}
                >
                  <Add />
                </Fab>
                <Fab
                  color="primary"
                  aria-label="add"
                  className="fab-btn red"
                  onClick={() => deleteOption()}
                >
                  <Delete />
                </Fab>
              </div>
            </Grid>
          </Card>
          <Grid container item style={{ overflow: "auto", height: "1030px" }}>
            {option.map((item, index) => (
              <Card className="w-100" key={index}>
                <Grid container spacing={6} className="pl-3 pr-3 pt-2">
                  <Grid item xs={12} style={{ position: "relative" }}>
                    <TextField
                      label="Mortgage Name"
                      className="w-100"
                      value={item.mortgageName}
                      onChange={(event) =>
                        optionChange(index, "mortgageName", event, 0)
                      }
                    ></TextField>
                    <Checkbox
                      color="primary"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                      }}
                      onChange={(event) =>
                        optionChange(index, "selected", event, 1)
                      }
                      checked={item.selected}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={6} className="pl-3 pr-3">
                  <Grid item xs={6}>
                    <TextField
                      label="Loan Amount"
                      className="w-100"
                      value={item.loanAmount}
                      onChange={(event) =>
                        optionChange(index, "loanAmount", event, 0)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Interest Rate"
                      className="w-100"
                      value={item.interestRate}
                      onChange={(event) =>
                        optionChange(index, "interestRate", event, 0)
                      }
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={6} className="pl-3 pr-3">
                  <Grid item xs={6}>
                    <TextField
                      label="Inflation Rate"
                      className="w-100"
                      value={item.inflationRate}
                      onChange={(event) =>
                        optionChange(index, "inflationRate", event, 0)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Tax Rate"
                      className="w-100"
                      value={item.taxRate}
                      onChange={(event) =>
                        optionChange(index, "taxRate", event, 0)
                      }
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={6} className="pl-3 pr-3">
                  <Grid item xs={6}>
                    <TextField
                      label="Years"
                      className="w-100"
                      value={item.years}
                      onChange={(event) =>
                        optionChange(index, "years", event, 0)
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Years Till Sell"
                      className="w-100"
                      value={item.yearsTillSell}
                      onChange={(event) =>
                        optionChange(index, "yearsTillSell", event, 0)
                      }
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={6} className="pl-3 pr-3">
                  <Grid item xs={12}>
                    <TextField
                      label="Cost to Acquire Mortgage"
                      className="w-100"
                      value={item.cost}
                      onChange={(event) =>
                        optionChange(index, "cost", event, 0)
                      }
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={6} className="pl-3 pr-3">
                  <Grid item xs={12}>
                    <TextField
                      label="%Return on Investment"
                      className="w-100"
                      value={item.returnOnInvest}
                      onChange={(event) =>
                        optionChange(index, "returnOnInvest", event, 0)
                      }
                    ></TextField>
                  </Grid>
                </Grid>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      name="jason"
                      color="primary"
                      checked={item.assume}
                      onChange={(event) =>
                        optionChange(index, "assume", event, 1)
                      }
                    />
                  }
                  label="Assume closing cost would be invested"
                  className="text-left pt-3 pb-2 pl-3"
                  style={{ float: "left" }}
                />
              </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={9} className="res-p-3 w-100">
        <Grid container item className="w-100 pt-3 pb-3">
          <h3>Mortgage Costs</h3>
          <Button
            variant="contained"
            className="ml-auto mr-3"
            color="primary"
            onClick={() => calculation()}
          >
            Calculation
          </Button>
        </Grid>
        <Grid item className="res-mt-5 w-100">
          <Card
            className=" res-mt-5 w-100 horizontal"
            style={{ height: "347px", textAlign: "left" }}
          >
            <div
              style={{
                borderRight: "1px rgb(220,220,220) solid",
              }}
              className="box"
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
                    <span className="font-weight-bold">
                      {" "}
                      $ {current.mortgageCostPayment}
                    </span>
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
                    <span className="font-weight-bold">
                      {" "}
                      $ {current.currentMortgageTotalCost}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
            {option.map((item, index) => (
              <div
                style={{
                  borderRight: "1px rgb(220,220,220) solid",
                }}
                className="box"
                key={"mortgage" + index}
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
                    {item.mortgageName}
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
                      <span className="font-weight-bold">
                        {" "}
                        $ {item.payment}
                      </span>
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
                      <span className="font-weight-bold">
                        {" "}
                        $ {item.totalCost}
                      </span>
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
                      <span className="font-weight-bold">
                        {" "}
                        {item.yearsToEven}
                      </span>
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
                      <span className="font-weight-bold">
                        {" "}
                        $ {item.monthlySaving}/month
                      </span>
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
                      <span className="font-weight-bold">
                        {" "}
                        $ {item.totalSaving}
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Card>
        </Grid>
        <Grid item className="mt-5 w-100">
          <Card className="w-100 p-3">
            <h3 className="pb-3">Mortgage Graph</h3>
            <ResponsiveContainer width="100%" aspect={25.0 / 9.0}>
              <LineChart
                data={dataGraph}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="X" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} axisType={false} />
                <Tooltip />
                {line.map((item, index)=>(
                  <Line type="monotone" dataKey={item} stroke={color[index%8]} key={index+item}/>
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item className="mt-5 w-100 text-left">
          <h4>Loan Balance</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.
          </p>
          <h4>Interest Rate</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.
          </p>
          <h4>Inflation Rate</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.
          </p>
          <h4>Tax Rate</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Finance;

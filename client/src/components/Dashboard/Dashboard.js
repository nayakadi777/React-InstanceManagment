import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../HeaderComponents/HeaderComponents.jsx";
import InstanceList from "../InstanceList/InstanceList.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import currencyConversion from "../../utility.js";
import {
  fetchInstance,
  startInstance,
  stopInstance,
} from "../../redux/Instance/InstanceActionCreator";

// import '../index.css';

import { Paper, withStyles, Grid} from "@material-ui/core";

// green custom switch for toggle
const GreenSwitch = withStyles({
  switchBase: {
    color: "#005A3C",
    "&$checked": {
      color: "#005A3C",
    },
    "&$checked + $track": {
      backgroundColor: "#005A3C",
    },
  },
  checked: {},
  track: {},
})(Switch);
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 2,
    margin: 50,
    borderRadius: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  padding: {
    // width: 100vw,
    radius: 5,
    padding: 20,
    margin: 50,
  },
});
function Dashboard(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    currenctToggle: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // to fetch list of instances
  useEffect(() => {
    props.fetchInstance();
  }, []);
  const instanceData = props.instanceList;
  return (
    <div className="main">
      <Header />
      <Paper className={classes.padding}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Grid>
              {currencyConversion(
                instanceData
                  .filter((instance) => instance.status === "running")
                  .reduce((totalCost, meal) => totalCost + meal.costPerHour, 0),
                state.currenctToggle
              )}
              /hr
            </Grid>
            <Grid>Running Instances</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid>
              {currencyConversion(
                instanceData
                  .filter((instance) => instance.status === "stopped")
                  .reduce((totalCost, meal) => totalCost + meal.costPerHour, 0),
                state.currenctToggle
              )}
              /hr
            </Grid>
            <Grid>Stopped Instances</Grid>
          </Grid>
          <Grid item md={2} sm={6} xs={2}>
            <FormGroup row>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>INR</Grid>
                <Grid item>
                  <GreenSwitch
                    checked={state.currenctToggle}
                    onChange={handleChange}
                    name="currenctToggle"
                  />
                </Grid>
                <Grid item>USD</Grid>
              </Grid>
            </FormGroup>
          </Grid>
        </Grid>
      </Paper>
      <Card className={classes.root}>
        <CardContent>
        <h2>
            Instance
            </h2>
          <InstanceList
            instanceList={instanceData}
            currenctToggle={state.currenctToggle}
          />
        </CardContent>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    instanceList: state.instanceData.instanceData,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    fetchInstance: (data) => dispatch(fetchInstance(data)),
    startInstance: (id) => dispatch(startInstance(id)),
    stopInstance: (id) => dispatch(stopInstance(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(Dashboard);

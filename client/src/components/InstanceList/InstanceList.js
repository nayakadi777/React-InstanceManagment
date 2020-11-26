import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import currencyConversion from "../../utility.js";
import {
  fetchInstance,
  startInstance,
  stopInstance,
} from "../../redux/Instance/InstanceActionCreator";
import "./InstanceList.css";
const useStyles = makeStyles({
  table: {
    minWidth: 450,
    borderRadius: 5,
  },
});

function InstanceList(props) {
  const classes = useStyles();
  const rows = props.instanceList;
  return (
    <div className="main_div">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">INSTANCE NAME</TableCell>
              <TableCell align="right">COST PER HOUR</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className="tableRow">
                <TableCell align="right">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {" "}
                  {currencyConversion(
                    row.costPerHour,
                    props.currenctToggle
                  )}{" "}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: `${row.status === "stopped" ? "red" : "green"}`,
                  }}
                >
                  {row.status}
                </TableCell>
                <TableCell
                  align="right"
                  onClick={() => {
                    row.status === "stopped"
                      ? props.startInstance(row.id)
                      : props.stopInstance(row.id);
                  }}
                  style={{
                    color: `${row.status !== "stopped" ? "red" : "green"}`,
                    "textDecoration": "underline",
                    cursor: "pointer",
                  }}
                >
                  {row.status === "stopped" ? "START" : "STOP"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// const mapStateToProps = state =>{
//   return{
//       instanceList :state.instanceData.instanceData
//   }
// }

const mapDispatchToPros = (dispatch) => {
  return {
    fetchInstance: (data) => dispatch(fetchInstance(data)),
    startInstance: (id) => dispatch(startInstance(id)),
    stopInstance: (id) => dispatch(stopInstance(id)),
  };
};

export default connect(null, mapDispatchToPros)(InstanceList);
InstanceList.propTypes = {
  instanceList: PropTypes.array
};
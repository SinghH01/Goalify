import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../App";
import "bootstrap/dist/css/bootstrap.css";
import "./MyGoal.css";
import EditGoal from "./EditGoals";
import CreateGoal from "./CreateGoal";
import CreateMilestone from "./CreateMilestone";
import Tooltip from "@material-ui/core/Tooltip";
import { Divider } from "antd";
import Loading from "../Loading";
import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons//Add";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import GoalsTableRow from "./GoalsTableRow";
import "antd/dist/antd.css";

export default function MyGoals() {
  const [goals, setGoals] = useState([]);
  const [user] = useRecoilState(userState);
  const [state, setState] = useState("all");
  const [goal, setGoal] = useState({});

  useEffect(() => {
    fetchGoals();
  }, [state]);

  const fetchGoals = async () => {
    try {
      const response = await Axios.get(`/api/goals/${user.id}`);
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DataTable = () => {
    return goals.map((res, i) => {
      return (
        <GoalsTableRow
          obj={res}
          key={i}
          setState={setState}
          handleEdit={handleEdit}
          handleMileStone={handleMileStone}
        />
      );
    });
  };

  const handleClick = () => {
    setState("create");
  };

  const handleEdit = (goal) => {
    setGoal({ ...goal });
    setState("edit");
  };

  const handleMileStone = (goal) => {
    setGoal({ ...goal });
    setState("createMilestone");
  };

  return (
    <>
      {state === "all" && (
        <>
          <div className="page-heading">
            <h2>
              <TrackChangesIcon className="header-icon" /> MANAGE
            </h2>
            <h5>Create | Edit | Delete</h5>
            <Divider className="header-divider"></Divider>
          </div>
          <div className="createButton">
            <Tooltip title="Create a new goal" placement="top">
              <Fab
                color="primary"
                className="add-icon"
                aria-label="add"
                onClick={handleClick}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
          <div className="table-wrapper">
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Start</TableCell>
                    <TableCell>End</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{DataTable()}</TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
      {state === "create" && (
        <CreateGoal
          userId={user.id}
          setState={setState}
          userName={user.first_name}
        />
      )}
      {state === "createMilestone" && (
        <CreateMilestone
          goalId={goal.id}
          setState={setState}
          userName={user.first_name}
        />
      )}
      {state === "edit" && (
        <EditGoal goal={goal} setState={setState} userName={user.first_name} />
      )}
      {state === "loading" && <Loading />}
    </>
  );
}

import React, { useState } from "react";
import Axios from "axios";
import moment from 'moment';
import '../../styles/MyGoal.css'
import DeleteIcon from '@material-ui/icons//Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons//Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Box, Collapse, IconButton, TableCell, Table, TableBody, TableHead, TableRow, Typography, Fab } from '@material-ui/core'
import { Popconfirm } from 'antd';
import { openNotificationWithIcon } from "../Notification";
import { Empty } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';




export default function GoalsTableRow(props) {


  const { id, title, description, image, start_date, end_date } = props.obj;
  const [open, setOpen] = useState(false);
  const [milestones, setMilestones] = useState([]);


  const deleteGoal = () => {
    props.setState("loading");
    Axios
      .delete(
        `http://localhost:8080/api/goals/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          props.setState("all");
          openNotificationWithIcon("error", `Your Goal has been deleted!!!`)
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  const deleteMilestone = (id) => {
    props.setState("loading");
    Axios
      .delete(
        `http://localhost:8080/api/milestones/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          props.setState("all");
          openNotificationWithIcon("error", `Your Milestone has been deleted!!!`)
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };



  const fetchMilestones = async () => {
    try {
      const res = await Axios.get(`/api/milestones/${id}`);
      setMilestones(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = () => {
    fetchMilestones();
    setOpen(!open);
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => onClick()}
          >
            {open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>< img className="goal-img" src={image} alt="goal"/></TableCell>
        <TableCell>{moment(start_date).format('MMMM Do, YYYY')}</TableCell>
        <TableCell>{moment(end_date).format('MMMM Do, YYYY')}</TableCell>
        <TableCell>
          <IconButton onClick={() => props.handleEdit({ ...props.obj })}>
            <EditIcon />
          </IconButton>
          <Popconfirm placement="left"
            title={"Are you sure to delete this goal"}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: 'red',
                }}
              />
            }
            onConfirm={deleteGoal}
            okText="Yes"
            cancelText="No">
            <IconButton >
              <DeleteIcon />
            </IconButton>
          </Popconfirm>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div className="milestone-header"><h5>Milestones</h5>
                <Fab size="small" color="primary" aria-label="add" onClick={() => props.handleMileStone({ ...props.obj })}>
                  <AddIcon />
                </Fab>
              </div>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
              {milestones.length === 0 ? <Empty /> :
                <Table size="small" aria-label="milsestones">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {milestones.map((milestone, i) => (
                      <TableRow key={i}>
                        <TableCell> {milestone.title}</TableCell>
                        <TableCell>{milestone.description}</TableCell>
                        <TableCell>{moment(milestone.end_date).format('MMMM Do, YYYY')}</TableCell>
                        <TableCell>
                          <Popconfirm placement="top"
                            title={"Are you sure to delete this milestone"}
                            icon={
                              <QuestionCircleOutlined
                                style={{
                                  color: 'red',
                                }}
                              />
                            }
                            onConfirm={() => deleteMilestone(milestone.id)}
                            okText="Yes"
                            cancelText="No">
                            <IconButton>
                              <DeleteIcon />
                            </IconButton>
                          </Popconfirm>
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}




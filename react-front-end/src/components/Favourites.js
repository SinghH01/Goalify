import React from "react";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import GoalList from "./GoalList";
import { useRecoilState } from "recoil";
import { userState } from "../App";
import DashboardContext from "./DashBoardContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Divider } from "antd";

function Favourites() {
  const [goals, setGoals] = useState([]);
  const [user] = useRecoilState(userState);
  const providerValue = useContext(DashboardContext);
  const { rerender } = providerValue;

  useEffect(() => {
    fetchGoals();
  }, [rerender]);

  const fetchGoals = async () => {
    try {
      const response = await Axios.post("/favourites", { id: user.id });
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="page-heading">
        <h2>
          {" "}
          <FavoriteIcon className="header-icon" /> FAVOURITES
        </h2>
        <Divider className="header-divider"></Divider>
      </div>
      <GoalList goals={goals} />
    </div>
  );
}

export default Favourites;

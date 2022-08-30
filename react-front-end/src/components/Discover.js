import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import GoalList from "./GoalList";
import { Divider } from "antd";
import PageviewIcon from "@material-ui/icons/Pageview";
import "../styles/discover.css";

function Discover() {
  const [goals, setGoals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get("/api/goals");
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter goals based on the search query
  const filterGoals = (goals) => {
    return goals.filter((goal) => {
      const goalTitle = goal.title.toLowerCase();
      return goalTitle.includes(searchQuery.toLowerCase());
    });
  };
  const filteredGoals = filterGoals(goals);

  return (
    <div>
      <div className="page-heading">
        <h2>
          <PageviewIcon className="header-icon" /> DISCOVER
        </h2>
        <h5>Find new goals to follow</h5>
        <Divider className="header-divider"></Divider>
      </div>
      <Search setSearchQuery={setSearchQuery} />
      <GoalList goals={searchQuery ? filteredGoals : goals} />
    </div>
  );
}

export default Discover;

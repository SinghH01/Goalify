import React, { useState, useMemo } from "react";
import DashboardContext from "./DashBoardContext";
import "../styles/dashboard.css";

//Components
import Navbar from "./Navbar";
import Discover from "./Discover";
import Sidebar from "./Sidebar";
import Favourites from "./Favourites";
import MyGoals from "./UserGoals/MyGoals";
import { atom, useRecoilState } from "recoil";
import Loading from "./Loading";
import JoinedGoals from "./IndividualGoal/JoinedGoals";

//Setup global state variable using Recoil JS
export const linkState = atom({
  key: "linkState",
  default: "find",
});

export default function Dashboard() {
  const [state, setState] = useRecoilState(linkState);
  const [rerender, setRerender] = useState(false);

  const providerValue = useMemo(
    () => ({
      state,
      setState,
      rerender,
      setRerender,
    }),
    [state, rerender]
  );

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar onStateChange={setState} />
        <main className="dashboard-main">
          {state === "find" && (
            <DashboardContext.Provider value={providerValue}>
              <Discover />
            </DashboardContext.Provider>
          )}
          {state === "favourites" && (
            <DashboardContext.Provider value={providerValue}>
              <Favourites />
            </DashboardContext.Provider>
          )}
          {state === "activegoals" && (
            <DashboardContext.Provider value={providerValue}>
              <JoinedGoals />
            </DashboardContext.Provider>
          )}
          {state === "mygoals" && <MyGoals />}
          {state === "loading" && <Loading />}
        </main>
      </div>
    </div>
  );
}

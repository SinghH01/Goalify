import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';


export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "My Goals",
    icon: <TrackChangesIcon />,
    link: "/mygoals"
  },
  {
    title: "Favourites",
    icon: <FavoriteIcon />,
    link: "/favourites"
  },
  {
    title: "Discover",
    icon: <PageviewIcon />,
    link: "/find"
  }

] 
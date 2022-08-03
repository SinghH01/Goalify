import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';


export const SidebarData = [
  {
    title: "Active Goals",
    icon: <HomeIcon />,
    link: "activegoals"
  },
  {
    title: "My Goals",
    icon: <TrackChangesIcon />,
    link: "mygoals"
  },
  {
    title: "Favourites",
    icon: <FavoriteIcon />,
    link: "favourites"
  },
  {
    title: "Discover",
    icon: <PageviewIcon />,
    link: "find"
  }

] 
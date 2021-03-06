import React from "react";
import { Link } from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import TableChartIcon from "@material-ui/icons/TableChart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";

export const NavigationItems = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">
            <TableChartIcon></TableChartIcon> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/sport">
            <SportsEsportsIcon></SportsEsportsIcon> Sport
          </Link>
        </li>

        <li>
          <Link to="/category">
            <FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>Categories
          </Link>
        </li>
        <li>
          <Link to="/tournament">
            <SportsVolleyballIcon></SportsVolleyballIcon>Tournaments
          </Link>
        </li>
      </ul>
    </div>
  );
};

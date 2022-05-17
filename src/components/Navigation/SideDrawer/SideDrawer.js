import React, { useState } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import TableChartIcon from "@material-ui/icons/TableChart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";

export const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <DehazeIcon
        style={{ fontSize: "40px" }}
        onClick={handleShow}
      ></DehazeIcon>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li onClick={handleClose}>
              <Link to="/dashboard">
                <TableChartIcon></TableChartIcon> Dashboard
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/sport">
                <SportsEsportsIcon></SportsEsportsIcon> Sports
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/category">
                <FormatIndentDecreaseIcon></FormatIndentDecreaseIcon>
                Categories
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/tournament">
                <SportsVolleyballIcon></SportsVolleyballIcon>Tournaments
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

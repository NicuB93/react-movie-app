import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="regular flex justify-between items-center list pa0">
          <li>
            <Link to="/" className="pr2 dim grow link near-white">
              Home
            </Link>
          </li>
          <li className="">
            <Menu
              className="bg-near-black"
              menuButton={
                <MenuButton
                  className="dim near-white"
                  styles={{
                    border: "0",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                >
                  Movies
                </MenuButton>
              }
            >
              <MenuItem className="dim bg-near-black">
                <Link className="link near-white" to="/popular">
                  Popular
                </Link>
              </MenuItem>
              <MenuItem className="dim near-white bg-near-black">
                <Link className="link near-white" to="/toprated">
                  Top Rated
                </Link>
              </MenuItem>
              <MenuItem className="dim near-white bg-near-black">
                <Link className="link near-white" to="/new">
                  New
                </Link>
              </MenuItem>
            </Menu>
          </li>
          <li className="pr2 dim grow">Series</li>
          <li className="pr2 dim grow">TV Shows</li>
        </ul>

        <ul className="mobile list pa0">
          <li>
            <Link to="/" className="pr2 dim grow link near-white">
              Home
            </Link>
          </li>
          <li className="">
            <Menu
              className="bg-near-black"
              menuButton={
                <MenuButton
                  className="dim near-white"
                  styles={{
                    border: "0",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                >
                  Movies
                </MenuButton>
              }
            >
              <MenuItem className="dim bg-near-black">
                <Link className="link near-white" to="/popular">
                  Popular
                </Link>
              </MenuItem>
              <MenuItem className="dim near-white bg-near-black">
                <Link className="link near-white" to="/toprated">
                  Top Rated
                </Link>
              </MenuItem>
              <MenuItem className="dim near-white bg-near-black">
                <Link className="link near-white" to="/new">
                  New
                </Link>
              </MenuItem>
            </Menu>
          </li>
          <li className="pr2 dim grow">Series</li>
          <li className="pr2 dim grow">TV Shows</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

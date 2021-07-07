import React, {useState} from "react";
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const AppHead = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="sticky" color="primary">
			<Toolbar className="toolBar">
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={handleClick}
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>
						<NavLink
							className="navlink"
							activeClassName="selected"
							style={{textDecoration: "none"}}
							exact
							to="/"
						>
							Home
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink
							className="navlink"
							activeClassName="selected"
							style={{textDecoration: "none"}}
							to="/invitations"
						>
							Invitations
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink
							className="navlink"
							activeClassName="selected"
							style={{textDecoration: "none"}}
							to="/details"
						>
							Details
						</NavLink>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<NavLink
							className="navlink"
							activeClassName="selected"
							style={{textDecoration: "none"}}
							to="/logout"
						>
							Logout
						</NavLink>
					</MenuItem>
				</Menu>
				<h1>David and Lizzy's Wedding Hub!</h1>
			</Toolbar>
		</AppBar>
	);
};

export default AppHead;

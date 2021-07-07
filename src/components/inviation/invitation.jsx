import React, {useState, useEffect} from "react";
import {Box, Card, CardHeader, CardContent, Button} from "@material-ui/core";

import AddGuest from "./add_guest/add_guest";

import api from "service/service";

import "styles/invitation/invitation.scss";

const Invitation = () => {
	const [loaded, updateLoaded] = useState(false);
	const [buttons, updateButtons] = useState([
		{label: "Add Guest", clicked: false},
		{label: "Modify Guest", clicked: false},
		{label: "List all Guests", clicked: false},
	]);
	const [guests, addGuests] = useState();

	async function fetchData() {
		let data = await api.get_guests();
		addGuests(data);
		updateLoaded(true);
	}

	const setActiveButton = (index) => {
		let updatedbuttons = [...buttons];
		updatedbuttons.forEach((b, i) => {
			b.clicked = i === index ? !b.clicked : false;
		});
		updateButtons(updatedbuttons);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loaded) {
		return (
			<Box p={2} m={1}>
				<Card elevation={4}>
					<CardHeader title={`Invitation Hub`} />
					<CardContent className="invitation-action-grid">
						<div>
							You currently have{" "}
							{`${guests.length} ${
								guests.length > 1 ? "guests" : "guest"
							} `}
						</div>
						{buttons.map((b, i) => (
							<Button
								key={i}
								variant="contained"
								color={"primary"}
								onClick={() => setActiveButton(i)}
							>
								{b.label}
							</Button>
						))}
					</CardContent>
				</Card>
				<AddGuest
					active={buttons[0].clicked}
					closeDialog={setActiveButton}
				/>
			</Box>
		);
	} else {
		return (
			<Box p={2} m={1}>
				Loading
			</Box>
		);
	}
};

export default Invitation;

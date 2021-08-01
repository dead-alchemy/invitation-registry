import React, {useState, useEffect} from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
} from "@material-ui/core";

import AddForm from "./add_form";

function AddGuest(props) {
	let [guests, updateGuests] = useState([
		{
			firstName: "",
			lastName: "",
		},
	]);

	//let [addInfo, updateAddInfo] = useState(false);

	// pushes a new guest into existence
	const addGuest = () => {
		let guests = [...guests];
		guests.push({
			firstName: "",
			lastName: "",
		});
		updateGuests(guests);
	};

	// updated the appropriate values for guests.
	const updateGuestInfo = (i, key, val) => {
		let guests = [...guests];

		guests[i][key] = val;
		updateGuests(guests);
	};

	return (
		<Dialog open={props.active} maxWidth="md">
			<DialogTitle>Add Guest</DialogTitle>
			<DialogContent>
				<AddForm
					guests={guests}
					handle_addGuest={addGuest}
					handle_updateGuestInfo={updateGuestInfo}
				/>
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" onClick={() => props.closeDialog(0)}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AddGuest;

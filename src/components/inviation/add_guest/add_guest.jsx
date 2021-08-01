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
		let guest = [...guests];
		guest.push({
			firstName: "",
			lastName: "",
		});
		updateGuests(guest);
	};

	// removes a guest from existence
	const removeGuest = (i) => {
		let guest = [...guests];
		guest.splice(i, 1);
		updateGuests(guest);
	};

	// updated the appropriate values for guests.
	const updateGuestInfo = (i, key, val) => {
		let newGuests = [...guests];

		newGuests[i][key] = val;
		updateGuests(newGuests);
	};

	return (
		<Dialog open={props.active} maxWidth="md">
			<DialogTitle>
				Add Guest
				<Button
					className="closeButton"
					variant="outlined"
					onClick={() => props.closeDialog(0)}
				>
					X
				</Button>
			</DialogTitle>
			<DialogContent>
				<AddForm
					guests={guests}
					handle_addGuest={addGuest}
					handle_updateGuestInfo={updateGuestInfo}
					handle_removeGuest={removeGuest}
				/>
			</DialogContent>
		</Dialog>
	);
}

export default AddGuest;

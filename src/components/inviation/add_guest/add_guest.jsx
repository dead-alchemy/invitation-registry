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
	let [formData, updateFormData] = useState({
		firstName: "",
		lastName: "",
		addressInd: false,
		address1: "",
		address2: "",
		st: "",
		zip: "",
	});

	const formFieldUpdate = (field, value) => {
		const obj = field;
		const val = value;
		updateFormData((prevState) => ({
			...prevState,
			[obj]: val,
		}));
	};

	return (
		<Dialog open={props.active} maxWidth="md">
			<DialogTitle>Add Guest</DialogTitle>
			<DialogContent>
				<AddForm
					handle_formFieldUpdate={formFieldUpdate}
					formData={formData}
					addInd={formData.addressInd}
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

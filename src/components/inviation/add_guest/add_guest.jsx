import React, {useState} from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from "@material-ui/core";

import AddForm from "./add_form";

const AddGuest = (props) => {
	let [formData, updateFormData] = useState({
		firstName: "",
		lastName: "",
		addressInd: false,
		address1: "",
		address2: "",
		st: "",
		zip: "",
	});

	let formFieldUpdate = (field, value) => {
		let updateForm = formData;

		updateForm[field] = value;
		console.log(updateForm[field]);
		updateFormData(updateForm);
	};

	return (
		<Dialog open={props.active} maxWidth="md">
			<DialogTitle>Add Guest</DialogTitle>
			<DialogContent>
				<AddForm
					key={formData}
					handle_formFieldUpdate={formFieldUpdate}
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
};

export default AddGuest;

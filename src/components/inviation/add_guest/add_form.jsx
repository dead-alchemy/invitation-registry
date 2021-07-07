import React, {useState, useEffect} from "react";
import {TextField, Checkbox, FormControlLabel} from "@material-ui/core";

function AddForm(props) {
	useEffect(() => {});
	const addressInputs = (
		<React.Fragment>
			<TextField
				required
				id="address-1"
				label="Required"
				style={{gridColumn: "1 / 4"}}
				placeholder="Address 1"
				onBlur={(event) =>
					props.handle_formFieldUpdate("address1", event.target.value)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				required
				id="address-2"
				style={{gridColumn: "1 / 4"}}
				label=""
				placeholder="Address 2"
				onBlur={(event) =>
					props.handle_formFieldUpdate("address2", event.target.value)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				required
				id="city"
				label="Required"
				colSpan={3}
				placeholder="City"
				onBlur={(event) =>
					props.handle_formFieldUpdate("city", event.target.value)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				required
				id="st"
				label="Required"
				colSpan={3}
				placeholder="State"
				onBlur={(event) =>
					props.handle_formFieldUpdate("st", event.target.value)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</React.Fragment>
	);
	return (
		<form className="add_form">
			<TextField
				required
				id="first-name"
				label="Required"
				placeholder="First Name"
				onBlur={(event) =>
					props.handle_formFieldUpdate(
						"firstName",
						event.target.value
					)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				required
				id="last-name"
				label="Required"
				placeholder="Last Name"
				onBlur={(event) =>
					props.handle_formFieldUpdate("lastName", event.target.value)
				}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<FormControlLabel
				labelPlacement="start"
				label="Add Address?"
				control={
					<Checkbox
						id="address-ind"
						value={props.addInd}
						onClick={() =>
							props.handle_formFieldUpdate(
								"addressInd",
								!props.addInd
							)
						}
					/>
				}
			></FormControlLabel>
			{props.addInd === true && addressInputs}
		</form>
	);
}

export default AddForm;

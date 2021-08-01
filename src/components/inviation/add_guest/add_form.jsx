import React from "react";
import {TextField, Button, Checkbox, FormControlLabel} from "@material-ui/core";

function AddForm({
	guests,
	handle_updateGuestInfo,
	handle_addGuest,
	handle_removeGuest,
	...rest
}) {
	return (
		<form className="add_form">
			{guests.map((g, i) => (
				<React.Fragment key={i}>
					<TextField
						required
						id={`first_name_${i}`}
						fullWidth={true}
						label="Required"
						placeholder="First Name"
						onBlur={(event) =>
							handle_updateGuestInfo(
								i,
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
						id={`last_name_${i}`}
						fullWidth={true}
						label="Required"
						placeholder="Last Name"
						onBlur={(event) =>
							handle_updateGuestInfo(
								i,
								"lastName",
								event.target.value
							)
						}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{i ? (
						<Button
							variant="outlined"
							onClick={() => handle_removeGuest(i)}
						>
							Remove Guest
						</Button>
					) : (
						<Button
							variant="outlined"
							onClick={() => handle_addGuest()}
						>
							Add Guest
						</Button>
					)}
				</React.Fragment>
			))}
		</form>
	);
}

export default AddForm;

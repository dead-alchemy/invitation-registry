import React, {useState, useEffect} from "react";
import {TextField, Checkbox, FormControlLabel} from "@material-ui/core";

function AddForm({guests, handle_updateGuestInfo, ...rest}) {
	return (
		<form className="add_form">
			{guests.map((g, i) => (
				<React.Fragment key={i}>
					<TextField
						required
						id="first-name"
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
						id="last-name"
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
				</React.Fragment>
			))}
		</form>
	);
}

export default AddForm;

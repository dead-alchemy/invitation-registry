import React from "react";
import {Box, Card} from "@material-ui/core";
import {differenceInCalendarDays} from "date-fns";

const Countdown = () => {
	const weddingDate = new Date("2022-10-22");
	const daysUntil = differenceInCalendarDays(weddingDate, new Date());
	return (
		<Box p={2} m={4}>
			<Card className="countdown" elevation={4}>
				<h1>We have {daysUntil} days until the big day</h1>
			</Card>
		</Box>
	);
};

export default Countdown;

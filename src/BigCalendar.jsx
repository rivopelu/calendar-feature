import {Calendar, momentLocalizer} from "react-big-calendar";
import event from "./event";
import React from "react";
import moment from "moment/moment";

const localizer = momentLocalizer(moment)

export const BigCalendar = () => {
	return (
		<div className={"h-screen w-screen"}>
			<Calendar
				localizer={localizer}
				events={event}
				startAccessor="start"
				endAccessor="end"
			/>
		</div>
	)
}

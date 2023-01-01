import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {CustomCalendar} from "./CustomCalendar";

function App() {
	return (
		// <BigCalendar/>
		// <FullCalendarCustoms/>
		<div className={"bg-slate-200"}>
			<CustomCalendar/>
		</div>
	);
}

export default App;

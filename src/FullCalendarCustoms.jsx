import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import {event2} from "./event";
import {INITIAL_EVENTS} from "./initialEvents"; // needed for dayClick

export const FullCalendarCustoms = () => {
	
	const [weekend, setWeekend] = useState(true)
	const [currentEvents, setCurrentEvent] = useState([])
	const handleDateClick = (e) => {
		console.log('------------------', e)
	}
	
	const eventContent = (eventInfo) => {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		)
	}
	const handleEvents = (events) => {
		setCurrentEvent(events)
	}
const 	numberContent = (e) => {
		return(
			<div>
				werew {e.toString()}
			</div>
		)
}
	return (
		<div className={"h-screen "}>
			<FullCalendar
				viewClassNames={"w-[50%] mx-auto"}
				allDayClassNames={"bg-red-400"}
				dayHeaderClassNames={"bg-red-400"}
				eventClassNames={"bg-blue-600"}
				weekNumberClassNames={"bg-purple-700"}
				slotLaneClassNames={"bg-green-600"}
				nowIndicatorClassNames={"bg-purple-700"}
				slotLabelClassNames={"bg-green-800"}
				allDayText={"hello"}
				weekNumberContent={numberContent}
				plugins={[dayGridPlugin, interactionPlugin]}
				dateClick={handleDateClick}
				initialView='dayGridMonth'
				initialEvents={INITIAL_EVENTS}
				editable={true}
				selectable={true}
				eventContent={eventContent}
				selectMirror={true}
				dayMaxEvents={true}
				weekends={weekend}
				eventsSet={handleEvents}
				height={"90%"}
			/>
		</div>
	)
}



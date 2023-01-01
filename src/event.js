export default [
	{
		'title': 'All Day Event very long title',
		'allDay': true,
		'start': new Date(2015, 3, 0),
		'end': new Date(2015, 3, 1)
	},
	{
		'title': 'Long Event',
		'start': new Date(2015, 3, 7),
		'end': new Date(2015, 3, 10)
	},
	
	{
		'title': 'DTS STARTS',
		'start': new Date(2016, 2, 13, 0, 0, 0),
		'end': new Date(2016, 2, 20, 0, 0, 0)
	},
	
	{
		'title': 'DTS ENDS',
		'start': new Date(2016, 10, 6, 0, 0, 0),
		'end': new Date(2016, 10, 13, 0, 0, 0)
	},
	
	{
		'title': 'Some Event',
		'start': new Date(2015, 3, 9, 0, 0, 0),
		'end': new Date(2015, 3, 9, 0, 0, 0)
	},
	{
		'title': 'Conference',
		'start': new Date(2015, 3, 11),
		'end': new Date(2015, 3, 13),
		desc: 'Big conference for important people'
	},
	{
		'title': 'Meeting',
		'start': new Date(2015, 3, 12, 10, 30, 0, 0),
		'end': new Date(2015, 3, 12, 12, 30, 0, 0),
		desc: 'Pre-meeting meeting, to prepare for the meeting'
	},
	{
		'title': 'Lunch',
		'start': new Date(2015, 3, 12, 12, 0, 0, 0),
		'end': new Date(2015, 3, 12, 13, 0, 0, 0),
		desc: 'Power lunch'
	},
	{
		'title': 'Meeting',
		'start': new Date(2015, 3, 12, 14, 0, 0, 0),
		'end': new Date(2015, 3, 12, 15, 0, 0, 0)
	},
	{
		'title': 'Happy Hour',
		'start': new Date(2015, 3, 12, 17, 0, 0, 0),
		'end': new Date(2015, 3, 12, 17, 30, 0, 0),
		desc: 'Most important meal of the day'
	},
	{
		'title': 'Dinner',
		'start': new Date(2015, 3, 12, 20, 0, 0, 0),
		'end': new Date(2015, 3, 12, 21, 0, 0, 0)
	},
	{
		'title': 'Birthday Party',
		'start': new Date(2015, 3, 13, 7, 0, 0),
		'end': new Date(2015, 3, 13, 10, 30, 0)
	},
	{
		'title': 'Birthday Party 2',
		'start': new Date(2015, 3, 13, 7, 0, 0),
		'end': new Date(2015, 3, 13, 10, 30, 0)
	},
	{
		'title': 'Birthday Party 3',
		'start': new Date(2015, 3, 13, 7, 0, 0),
		'end': new Date(2015, 3, 13, 10, 30, 0)
	},
	{
		'title': 'Late Night Event',
		'start': new Date(2015, 3, 17, 19, 30, 0),
		'end': new Date(2015, 3, 18, 2, 0, 0)
	},
	{
		'title': 'Multi-day Event',
		'start': new Date(2015, 3, 20, 19, 30, 0),
		'end': new Date(2015, 3, 22, 2, 0, 0)
	}
]


export const event2 = [
	{title: "AZUL +5", start: getDate("YEAR-MONTH-02")},
	{title: "AZUL +5", start: getDate("YEAR-MONTH-03")},
	{
		title: "VERDE +10",
		start: getDate("YEAR-MONTH-06"),
		backgroundColor: "green"
	},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AMARILLO -5", start: getDate("YEAR-MONTH-07")},
	{title: "AZUL +5", start: getDate("YEAR-MONTH-08")},
	{
		title: "AMARILLO -5",
		start: getDate("YEAR-MONTH-09"),
		backgroundColor: "yellow",
		textColor: "black"
	},
	{
		title: "LECTURA +20",
		start: getDate("YEAR-MONTH-09"),
		backgroundColor: "purple"
	},
	
	{title: "AZUL +5", start: getDate("YEAR-MONTH-28")},
	{
		title: "AZUL +5",
		start: getDate("YEAR-MONTH-22"),
		backgroundColor: "red",
		textColor: "black"
	},
	{
		start: getDate("YEAR-MONTH-23"),
		end: getDate("YEAR-MONTH-24"),
		allDay: true
	}
];

function getDate(dayString) {
	const today = new Date();
	const year = today.getFullYear().toString();
	let month = (today.getMonth() + 1).toString();
	
	if (month.length === 1) {
		month = "0" + month;
	}
	
	return dayString.replace("YEAR", year).replace("MONTH", month);
}


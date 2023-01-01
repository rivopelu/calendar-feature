import React, {useEffect, useState} from 'react';
import {add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub} from "date-fns";

const dataListActivity = [
	{
		"date": "2022-12-17",
		"title": "Michaelina"
	},
	{
		"date": "2022-12-17",
		"title": "data dua"
	},
	{
		"date": "2022-12-3",
		"title": "data dua"
	},
	{
		"date": "2022-12-18",
		"title": "data dua"
	},
	{
		"date": "2022-12-4",
		"title": "data dua"
	},
]

const Cell = ({children, className, onClick}) => {
	return (
		<div onClick={onClick} className={`p-3 border ${className}`}>{children}</div>
	)
}

const DateBox = ({value, currentDate, data = []}) => {
	
	useEffect(() => {
		
		const result = new Date("2022-12-17").getDate()
		console.log("--------------------------",result)
	},[])
	let dataList = []
	if (data.length > 0) {
		data.map((item, i) => {
			if (new Date(item.date).getDate() === parseInt(value) ) {
				dataList.push(item)
				console.log("item", item)
			}
		})
	}
	
	return (
		<div className={"h-36 border p-3 px-5 flex flex-col items-start"}>
			<div className={'mb-2 flex items-center justify-center'}>
				<div className={`w-8 h-8 text-center ${currentDate && "rounded-full bg-green-600 text-white"}`}>
					<div className={"translate-y-[2px] "}>
						{value}
					</div>
				</div>
			</div>
			<div className={"flex flex-col gap-2"}>
				{
					dataList.map((item, i) => (
						<div key={i} className={"flex items-start gap-2 bg-green-200 p-1 rounded-md"}>
							<div className={"w-1 bg-green-800 h-full rounded-sm"}></div>
							<div className={"text-xs"}>{item.title}</div>
						</div>
					))
				}
			
			</div>
		</div>
	)
}


export const CustomCalendar = () => {
	
	const [currentDate, setCurrentData] = useState(new Date())
	const startDate = startOfMonth(currentDate)
	const endDate = endOfMonth(currentDate)
	const numDays = differenceInDays(endDate, startDate) + 1
	
	const prevMonth = () => {
		setCurrentData(
			sub(currentDate, {months: 1})
		)
	}
	const nextMonth = () => {
		setCurrentData(
			add(currentDate, {months: 1})
		)
	}
	
	const handleCurrentData = (index) => {

	}
	
	const date = setDate(currentDate, 3)
	console.log("ini date", date)
	
	console.log(startDate)
	const dayOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
	
	const prefixDay = startDate.getDay() - 1;
	const suffixDay = 6 - endDate.getDay();
	
	
	return (
		<div className={"h-screen w-screen flex p-10 justify-center "}>
			<div className={"w-[70%] bg-white p-10 rounded-md"}>
				<div className={"mb-10 flex items-center gap-4"}>
					<div className={"text-3xl font-bold "}>{format(currentDate, "LLLL")}</div>
					<div className={"flex items-center gap-3"}>
						<div onClick={prevMonth}
								 className={"border cursor-pointer hover:bg-slate-100 h-9 rounded-md flex items-center justify-center w-9"}>
							<i className="bi bi-arrow-left"></i>
						</div>
						<div
							onClick={nextMonth}
							className={"border cursor-pointer hover:bg-slate-100 h-9 rounded-md flex items-center justify-center w-9"}>
							<i className="bi bi-arrow-right"></i>
						</div>
						<div className={"text-green-700 hover:underline hover:text-green-900 cursor-pointer"}
								 onClick={() => setCurrentData(new Date())}>Reset
						</div>
					</div>
				</div>
				<div className={"grid grid-cols-7 items-center justify-center text-center"}>
					
					{
						dayOfWeek.map((item) => (
							<Cell className={"text-sm font-bold border-0 text-gray-500"} key={item}>{item}</Cell>
						))
					}
					{
						Array.from(({length: prefixDay})).map((_, i) => (
							<DateBox key={i} value={"."}/>
						))
					}
					{
						Array.from({length: numDays}).map((_, index) => {
							const date = index + 1
							const isCurrentDate = date === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth()
							return (
								<DateBox
									data={dataListActivity}
									currentDate={isCurrentDate}
									className={"bg-purple-100 border-purple-500"}
									key={index}
									value={index + 1}/>
							)
						})
					}
					{
						Array.from(({length: suffixDay + 1})).map((_, i) => (
							<DateBox key={i} value={"."}/>
						))
					}
				</div>
			</div>
		</div>
	)
}

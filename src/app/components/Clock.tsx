'use client';

import { useEffect, useState } from "react"


export default function Clock() {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [day, setDay] = useState('00');
    const [month, setMonth] = useState('00');
    const [year, setYear] = useState('00');
  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const hour = dateObject.getHours()<10?`0${dateObject.getHours()}`:dateObject.getHours();
      const minute = dateObject.getMinutes()<10?`0${dateObject.getMinutes()}`:dateObject.getMinutes();
      const second = dateObject.getSeconds()<10?`0${dateObject.getSeconds()}`:dateObject.getSeconds();

      const day=dateObject.getDate()<10?`0${dateObject.getDate()}`:dateObject.getDate();
      const month=dateObject.getMonth()+1<10?`0${dateObject.getMonth()+1}`:dateObject.getMonth()+1;
      const year=dateObject.getFullYear();

        setHour(hour.toString());
        setMinute(minute.toString());
        setSecond(second.toString());

        setDay(day.toString());
        setMonth(month.toString());
        setYear(year.toString());
    }, 1000)

  }, [])
  return (
    <div>
        <div className="text-9xl container mx-auto p-6 grid grid-cols-5">
        <div className="col-span-1 flex flex-col p-4 w-20px">{hour}</div> <div className="ml-12">:</div> <div className="col-span-1 flex flex-col p-4 mr-5 w-20px">{minute}</div> <div className="ml-12">:</div> <div className="col-span-1 flex flex-col p-4 w-20px">{second}</div>
        </div>
      <div className="flex items-center text-6xl justify-center align-middle">
            {`${day}/${month}/${year}`}
        </div>

    </div>
  );
}

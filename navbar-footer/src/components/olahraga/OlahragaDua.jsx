import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const OlahragaDua = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-[50px] text-4xl text-center leading-relaxe bg-green-bg-card-makanan rounded-2xl shadow-xl">
      <p className="font-semibold">{moment(date).format("LLLL")}</p>
      <Calendar
        onChange={(newDate) => setDate(newDate)}
        value={date}
        className={`bg-white py-5 mt-5 mx-[30px] rounded-2xl leading-relaxed`}
      />
    </div>
  );
};

export default OlahragaDua;

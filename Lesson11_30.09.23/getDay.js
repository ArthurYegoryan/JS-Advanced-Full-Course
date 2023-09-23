function getDay(date) {
    const dayNamesShortFull = {
        "Mon": "Monday",
        "Tue": "Tuesday",
        "Wed": "Wednesday",
        "Thu": "Thursday",
        "Fri": "Friday",
        "Sat": "Saturday",
        "Sun": "Sunday"
    };

    const [ month, day, year ] = date.split("/");

    const dateText = new Date(Number(year), Number(month) - 1, Number(day));

    const currentDayShortName = String(dateText).slice(0, 3);

    return dayNamesShortFull[currentDayShortName];
}

const date = "12/07/2016";
console.log(getDay(date));
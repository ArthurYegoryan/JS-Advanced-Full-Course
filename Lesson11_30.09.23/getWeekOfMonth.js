function getWeekOfMonth(date) {
    const weekDays = {
        "Sun": 1,
        "Mon": 2,
        "Tue": 3,
        "Wed": 4,
        "Thu": 5,
        "Fri": 6,
        "Sat": 7,
    };

    const [ dayName, , dayNumber ] = String(date).split(" ");

    let weeksCount = 1;

    let dayCounter = dayNumber;
    dayCounter -= weekDays[dayName];
    
    weeksCount += Math.trunc(dayCounter / 7) + 1;

    return weeksCount;
}

console.log(getWeekOfMonth(new Date(2017, 10, 9)));
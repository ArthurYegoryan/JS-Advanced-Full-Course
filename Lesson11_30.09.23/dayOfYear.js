function dayOfYear(date) {
    const [ month, day, year ] = date.split("/");

    const monthsDates = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    let daysCount = 0;
    let currentMonth = 1;
    
    while (currentMonth < month) {
        daysCount += monthsDates[currentMonth++];
    }

    daysCount += Number(day);

    if (!(Number(year) % 4)) daysCount += 1;

    return daysCount;
}

const date = "12/31/2000";

console.log(dayOfYear(date));
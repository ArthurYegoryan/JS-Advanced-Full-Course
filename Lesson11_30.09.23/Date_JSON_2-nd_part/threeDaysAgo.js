function threeDaysAgo(date) {
    const months = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };

    const threeDaysMilliseconds = 3 * 24 * 60 * 60 * 1000;
    
    const resultDate = new Date(date - threeDaysMilliseconds);
    
    const [ , month, day, year ] = String(resultDate).split(" ");

    return `${year}-${months[month]}-${day}`;
}

console.log(threeDaysAgo(new Date (2018, 0, 1)));
console.log(threeDaysAgo(new Date (2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));
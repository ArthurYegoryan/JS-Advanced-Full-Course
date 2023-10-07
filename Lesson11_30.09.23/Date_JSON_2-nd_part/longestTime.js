function longestTime(hour, minute, second) {
    const hourSeconds = hour * 60 * 60;
    const minuteSeconds = minute * 60;

    const longestTime = Math.max(hourSeconds, minuteSeconds, second);

    if (longestTime === hourSeconds) return hour;
    else if (longestTime === minuteSeconds) return minute;
    else return second;
}

console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));
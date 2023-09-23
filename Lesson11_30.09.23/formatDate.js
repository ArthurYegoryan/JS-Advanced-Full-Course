function formatDate(date) {
    const [ , month, day, year ] = String(date).split(" ");

    return day + " " + month + " " + year;
}

console.log(formatDate(new Date("2020-05-14")));
console.log(formatDate(new Date(2016, 3, 25)));
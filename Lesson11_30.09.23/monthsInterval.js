function monthsInterval(startDate, endDate) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                    "October", "November", "December"];

    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const startMonthIndex = startDate.getMonth();
    const endMonthIndex = endDate.getMonth();
    
    const intervalMonths = [];

    if (Math.abs(startYear - endYear) > 1) return months;

    if (startYear < endYear) {
        if (startMonthIndex <= endMonthIndex) {
            return months;
        }

        intervalMonths.push(...months.slice(0, endMonthIndex + 1));
        intervalMonths.push(...months.slice(startMonthIndex));
    } else if (startYear > endYear) {
        if (startMonthIndex >= endMonthIndex) {
            return months;
        }

        intervalMonths.push(...months.slice(0, startMonthIndex + 1));
        intervalMonths.push(...months.slice(endMonthIndex));
    } else {
        if (startMonthIndex < endMonthIndex) {
            intervalMonths.push(...months.slice(startMonthIndex, endMonthIndex + 1));
        } else if (startMonthIndex > endMonthIndex) {
            intervalMonths.push(...months.slice(endMonthIndex, startMonthIndex + 1));
        } else {
            intervalMonths.push(months[startMonthIndex]);
        }
    }

    return intervalMonths;
}

const startMonth = new Date(2017, 0, 1);
const endMonth = new Date(2018, 0, 1);

console.log(monthsInterval(startMonth, endMonth));




// let startYear, endYear, startYearMonthIndex, endYearMonthIndex = 0;

//     if (startDate.getFullYear() < endDate.getFullYear()) {
//         startYear = startDate.getFullYear();
//         endYear = endDate.getFullYear();
//         startYearMonthIndex = startDate.getMonths();
//         endYearMonthIndex = endDate.getMonths();
//     } else if (startDate.getFullYear() > endDate.getFullYear()) {
//         startYear = endDate.getFullYear();
//         endYear = startDate.getFullYear();
//         startYearMonthIndex = endDate.getMonths();
//         endYearMonthIndex = startDate.getMonths();
//     } else {
//         startYear = startDate.getFullYear();
//         endYear = endDate.getFullYear();

//         if (startDate.getMonths() <= endDate.getMonths()) {
//             startYearMonthIndex = startDate.getMonths();
//             endYearMonthIndex = endDate.getMonths();
//         } else {
//             startYearMonthIndex = endDate.getMonths();
//             endYearMonthIndex = startDate.getMonths();
//         }
//     }

//     const intervalMonths = [];

//     if (endYear - startYear > 1) return months;

//     if (startYear === endYear) return months.slice(startMonthIndex, endMonthIndex + 1);

//     if (startMonthIndex + endMonthIndex)
const arr = [ 
    { book: "Catcher in the Rye", readStatus: true, percent: 40 }, 
    { book: "Animal Farm", readStatus: true, percent: 20 }, 
    { book: "Solaris", readStatus: false, percent: 90 }, 
    { book: "The Fall", readStatus: true, percent: 50 }, 
    { book: "White Nights", readStatus: false, percent: 60 }, 
    { book: "After Dark", readStatus: true, percent: 70 },
];

function percentDecreaseSort(arr) {
    let readStatusTrueArr = arr.filter(element => element.readStatus === true);
    
    let resultArr = [];
    let currentObj = Array.from(readStatusTrueArr);

    for (let i = 0; i < readStatusTrueArr.length; i++) {        
        let maxPercentObj = currentObj[0];

        for (let j = 0; j < currentObj.length; j++) {
            if (currentObj[j].percent > maxPercentObj.percent) {
                maxPercentObj = currentObj[j];
            }
        }

        resultArr.push(maxPercentObj);

        currentObj.length = 0;
        for (let j = 0; j < readStatusTrueArr.length; j++) {
            if (resultArr.includes(readStatusTrueArr[j])) {
                continue;
            } else {
                currentObj.push(readStatusTrueArr[j]);
            }
        }
    }
    
    
    return resultArr;
}

console.log(JSON.stringify(percentDecreaseSort(arr)));
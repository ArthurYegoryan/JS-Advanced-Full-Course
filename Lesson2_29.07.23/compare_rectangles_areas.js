const firstRectangle = { 
    width: 5, 
    height: 10, 
}; 

const secondRectangle = { 
    width: 10, 
    height: 5, 
}; 

const thirdRectangle = { 
    width: 6, 
    height: 8, 
};

function areRectanglesSameArea(firstRectangle, secondRectangle) {
    const firstRectangleArea = firstRectangle.width * firstRectangle.height;
    const secondRectangleArea = secondRectangle.width * secondRectangle.height;

    return firstRectangleArea === secondRectangleArea;
}

console.log(areRectanglesSameArea(firstRectangle, secondRectangle));
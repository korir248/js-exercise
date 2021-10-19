const myArray = ["Ball",3,4,"Ball",1,3,5,6,7,8,4]


const getUniqueValues = (array ) => (
    array.reduce((acc,currentValue)=>(
        acc.includes(currentValue) ? acc : [...acc,currentValue]
    ),[])

)
const myArrayUnique = getUniqueValues(myArray)
console.log(myArrayUnique)


// A second way of accomplishing the same result
const uniqueSet = new Set(myArray)
console.log(uniqueSet)
var myArray = ["Ball",3,4,"Ball",1,3,5,6,7,8,4]


const getUniqueValues = (array ) => (
    array.reduce((acc,currentValue)=>(
        acc.includes(currentValue) ? acc : [...acc,currentValue]
    ),[])

)
var myArrayUnique = getUniqueValues(myArray)
console.log(myArrayUnique)
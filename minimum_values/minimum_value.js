var myArray = ["cars",2,4,"Eugene",1,-1]
var onlyValues = []
for(let i=0;i<myArray.length;i++){
    if(typeof(myArray[i]) === "number"){
        onlyValues.push(myArray[i]) 
    }      
}
var minimumValue = Math.min(...onlyValues)
console.log(minimumValue)
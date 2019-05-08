// return types

const exerciseFunctions = [
    () => {
        console.log("Hello World")
    }
]

exerciseFunctions.forEach( fun => {
    const retVal = fun()
    if (retVal !== undefined) console.log(retVal)
})

//


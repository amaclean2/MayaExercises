// return types

function listOfPrimes (number) {
    var it = 2
    var listOfPrimes = []
    while (it<number){
        var checkIt = 2
        var compositeCheck = false
        while (checkIt < it){
            if (it % checkIt === 0){
                compositeCheck = true
            }
            checkIt += 1
        }
        if (compositeCheck === false){
            listOfPrimes.push(it)
        }
        it += 1
    }
    return listOfPrimes
}
function workingCode() {

   console.log(listOfPrimes(1000))
}

workingCode()

//


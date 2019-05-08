// return types

// a function is a box that takes a paramter "number" and returns some value
function listOfPrimes (number) {
    // it is an integer and an iterator it's used for the while-loop later
    var it = 2

    // listOfPrimes is an array that we're going to store all of our primes in.
    // Now it's empty
    var listOfPrimes = []

    // this is our while-loop that we are going to use to look for every number
    // less than the one provided in our function declaration

    // the part in the parentheses is the condition that we check to see if the loop
    // should keep running
    while (it<number){

        // checkIt is a second iterator to use in our second loop
        // that loop looks at every number less than what "it" currently is
        var checkIt = 2

        // compositeCheck is a boolean that we use to tell if "it" is a prime or composite
        var compositeCheck = false

        // this loop scans through every number less than "it" to tell if to tell if "it"
        // is a prime or not
        while (checkIt < it){

            // it % checkIt is a modular arithmatic operator that is checking to see if the
            // remainder of it / checkIt is 0 or not
            if (it % checkIt === 0){

                // we set compositeCheck to be true if we find that it is divisable by 
                // checkIt
                compositeCheck = true
            }

            // the last thing we do in our loop is to increment our iterator
            checkIt += 1
        }

        // here we check if our number turned out to be composite or not.
        // If it wasn't then we add it to our list of primes

        // the part in the parentheses after the "if" is our condition that we're checking
        if (compositeCheck === false){
            listOfPrimes.push(it)
        }

        // the last thing we do in our loop is to increment our iterator
        it += 1
    }

    // here we finally return our listOfPrimes so that it can be seen from outside the function
    return listOfPrimes
}

// this is our main function that always gets run
function main() {

    // here we write the output of listOfPrimes to the console given a number to show all the primes less than
    console.log(listOfPrimes(100))
}

// this is where we call our base function
main()


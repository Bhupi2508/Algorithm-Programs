/*
 * To require the required files.
 */

var read = require('readline-sync');
var readline = require('readline-sync');
var prompt = require('prompt-sync')

module.exports = {
    input() {
        var readline = require('readline');
        var line = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return line;
    },
    inputread() {
        var input = read.question("");
        return input;
    },

    /******************************************** Algorithm Programs **********************************/


    /*=====================================================================================
     Stopwatch
   */

    /*
    *   @description: return the time in seconds from 1970.
    */

    stopWatch() {
        try {
            var p = new Date();
            var time = p.getUTCSeconds();
            return time;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    First Program = Anagram Program
    */

    /*1.0 Anagram Detection
*
*     purpose : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
*
*    @description : One string is an anagram of another if the second is simply a rearrangement 
*                   of the first. For example, 'heart' and 'earth' are anagrams...  
*                
*/


    anagram(firstString, secondString) {
        try {
            var val1 = firstString;
            var val2 = secondString;
            /*
             First Convert in lowercase
            */
            val1 = val1.toLowerCase()
            /*
            Split the string
            */
            val1 = val1.split('')
            /*
            String sorted
            */
            val1 = val1.sort()
            /*
            Join all the values
           */
            val1 = val1.join('')
            /*
            Trim spaces
            */
            val1 = val1.trim();

            val2 = val2.toLowerCase().split('').sort().join('').trim();

            if (val1 === val2) {
                return true;

            } else {
                return false;
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*
    Anagram for Integer
    */

    /*
     j & k are the integer user inputs
    */
    anagram1(j, k) {
        try {
            arr = [];

            for (i = j; i <= k; i++) {
                var val1 = j.toString();
                var val2 = k.toString();
                val1 = val1.toLowerCase().split('').sort().join('').trim();
                val2 = val2.toLowerCase().split('').sort().join('').trim();

                if (val1 == val2) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Second Program = PrimeNumbers Range
    */

    /*1.1 Is Prime Number
*
*    purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
*
*   @description : Find prime Numbers 
*                
*/

    primeNumber(startNumber, endNumber) {
        try {
            var k = parseInt(startNumber);
            var j = parseInt(endNumber);
            var i, t, arr = [];

            if (k < j) {
                for (i = k; i <= j; i++) {
                    var b = false;
                    /*
                     Prime number condition
                    */
                    for (t = 2; t < i; t++) {

                        if (i % t == 0) {
                            b = true;
                            break;
                        }
                    }
                    if (b == false) {
                        arr.push(i)
                    }
                }
            } else {
                console.log("Last number is less than starting number, Please Enter correct num");

            }
            return arr;
        } catch (error) {
            console.log(error.message);
        }

    },

    /*=====================================================================================
    Palindrome
    */

    /* Is Palindrome
*
*     Purpose      : Use the random number that should print in the reverse order . then, the 
*                    reverse ordered string or number must be equal to given user input.it is 
*                    similar to anagram
*
*    @descriptipn: Declaring the function and passing the userinput as argument.
*    @function   : Diplayname takes the userinput and print it with palinddrome.
*             
*/


    palindrome(string) {
        try {

            var len = string.length;
            var mid = Math.floor(len / 2);

            for (var i = 0; i < mid; i++) {
                if (string[i] !== string[len - 1 - i]) {
                    return false;
                }
            }
            return true;
        } catch (error) {
            console.log(error.message);
        }
    },

    reverseNum(number) {
        var rev = 0;
        var digit;
        while (number > 0) {
            digit = number % 10;
            rev = rev * 10 + digit;
            number = (number - digit) / 10;
        }
        return (rev);
    },

    palindrome1(string1) {
        try {

            var string = string1.toString()
            var lenth = string.length

            var mid = Math.floor(lenth / 2);

            if (string.length === 1) {
                return string;
            }

            if (string.length === 2) {
                for (var i = 0; i < lenth; i++) {
                    if (string[i] == this.reverseNum(string[i + 1])) {
                        return string;
                    }
                    // return false;
                }
            }

            if (string.length > 2) {
                for (var i = 0; i < mid; i++) {
                    if (string[i] == string[lenth - 1 - i]) {
                        return string
                    }
                    // return false;
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },


    /*=====================================================================================
    Forth Program = Sorting and Dearching
    */

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Sorting and Searching 
        @version  - 1.0
        @Date     - 25/02/2019
    */

    binarySearch(arr, low, high, key) {
        try {

            var sort = this.insertion(arr);
            console.log(sort);
            while (low <= high) {
                var mid = Math.floor((high + low) / 2);
                if (sort[mid] == key) {
                    return mid;
                    /*
                    check all the elements in right side
                    */
                } else if (key > sort[mid]) {
                    low = mid + 1;

                    /*
                    check all the elements in left side
                    */
                } else {
                    high = mid - 1;
                }
            }
            /*
            for invalid condition
            */
            return -1;
        } catch (error) {
            console.log(error.message);
        }
    },

    insertion(arr1) {
        try {

            var temp;
            for (var i = 0; i < arr1.length; i++) {
                for (var j = i; j > 0; j--) {

                    if (arr1[j] < arr1[j - 1]) {
                        temp = arr1[j];
                        arr1[j] = arr1[j - 1];
                        arr1[j - 1] = temp;
                    }
                }
            }
            return arr1;
        } catch (error) {
            console.log(error.message);
        }
    },

    bubble(arr) {
        try {

            var temp;
            for (var j = 0; j < arr.length; j++) {
                for (var k = 0; k < (arr.length - j - 1); k++) {
                    /*
                     if arr[k] > arr[k + 1], then Swapping 
                    */
                    if (arr[k] > arr[k + 1]) {
                        temp = arr[k];
                        arr[k] = arr[k + 1];
                        arr[k + 1] = temp;

                    }
                }
            }
            return arr;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Fifth Program = Find a number
    */

    /* To find a number 
*
*     Purpose      : It is going to find the number that is between what we have to given to 
*                   user input.Here we have to fix the limit.it is going to generate the random 
*                   numbers between the given limit.
*              
*
*    @descriptipn : Declaring the function and passing the userinput as argument.
*    @function    : Diplayname takes the userinput and print it with some sentence.                    
    */

    findNumber(low, high) {
        try {

            var mid = low + Math.floor((high - low) / 2)

            if (low < high) {
                /*
                if value is alternate one y one
                */
                if (low == high - 1) {
                    var c;
                    c = readline.question("Is the number " + low + " if yes, press => 'y'. Else Press => 'n' : ")
                    if (c == 'y')
                        return low;
                    if (c == 'n')
                        return high;
                }
                c = readline.question("Is the number " + mid + "-" + high + " if yes, press => 'y'. Else Press => 'n' : ")
                if (c == 'y')
                    /*
                    return the mid value
                    */
                    mid = this.findNumber(mid, high)
                if (c == 'n')
                    /*
                    return the mid value
                    */
                    mid = this.findNumber(low, mid - 1)
            }
            return mid;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Sixth Program = Search the word
    */

    /* To find a number 
*
*     Purpose      : Read in a list of words from File. Then prompt the user to enter a word to
*                    search the list. The program reports if the search word is found in the list.
*              
*
*    @descriptipn : read in the list words comma separated from a File and then enter the word
*                   to be searched
*    @function    : Print the result if the word is found or not                    
    */

    binary(word) {
        try {

            /*
             read the file from folder
            */
            var file = require('fs');
            var f = file.readFileSync('H:/Programming Codes/Algorithm-Programs/Algorithm Programs/file.txt', 'utf8');

            var arr = f.split(" ");
            return arr;
        }
        catch (error) {
            console.log(error.message);
        }
    },




    /*=====================================================================================
    CreateArray for Integer
    */

    createArray(num) {
        try {

            var arr = [];
            for (var val = 0; val < num; val++) {
                arr[val] = read.questionInt("Enter your " + val + " Element : ");

            }

            return arr;

        } catch (error) {
            console.log(error.message);
        }
    },

    /*
    CreateArray for String
    */

    createArray1(num) {
        try {

            var arr1 = [];
            for (var val = 0; val < num; val++) {
                arr1[val] = read.question("Enter your " + val + " String : ");

            }

            return arr1;
        }
        catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Seventh Program = Insertion Sorting
    */

    /* insertion sort
*   
*    Purpose    : It is a insertion sort form sorting.it is going to sort a numbers or variable in
*                 the ascending and descending order.Taken input from the user.It is going 
*                 to check the next element.If it is bigger than this then it should be 
*                 swapped.
*
*   @descriptipn: Declaring the function and passing the userinput as argument.
*   @function   : Diplayname takes the userinput and print it with some sentence.                    
*/

    insertionsort(arr1) {
        try {

            var temp;
            for (var i = 0; i < arr1.length; i++) {
                for (var j = i; j > 0; j--) {
                    /*
                     if arr1[j] < arr1[j - 1], then swapping
                    */
                    if (arr1[j] < arr1[j - 1]) {
                        temp = arr1[j];
                        arr1[j] = arr1[j - 1];
                        arr1[j - 1] = temp;
                    }
                }
            }
            return arr1;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Eighth Program = Bubble sort
    */

    /* bubble sort
*   Purpose      :  It is a bubble form sorting.it is going to sort a numbers or variable in
*                   the ascending and descending order.Taken input from the user.It is going 
*                   to check the next element.If it is bigger than this then it should be 
*                   swapped.
*
*  @descriptipn:    Declaring the function and passing the userinput as argument.
*  @function   :    Diplayname takes the userinput and print it with some sentence.                    
*/

    bubblesort(arr) {
        try {

            var temp;
            for (var j = 0; j < arr.length; j++) {
                for (var k = 0; k < (arr.length - j - 1); k++) {
                    /*
                     if arr[k] > arr[k + 1], then Swapping 
                    */
                    if (arr[k] > arr[k + 1]) {
                        temp = arr[k];
                        arr[k] = arr[k + 1];
                        arr[k + 1] = temp;

                    }
                }
            }
            return arr;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Ninth Program = Merge Sort
    */

    /* mergesort
*   
*   Purpose      : It is a mergesort form sorting.it is going to sort a numbers or variable in
*                  the ascending and descending order.Taken input from the user.It is going to check the
*                  next element.If it is bigger than this then it should be swapped.
*
*   @descriptipn : Declaring the function and passing the userinput as argument.
*   @function    : Diplayname takes the userinput and print it with some sentence.                    
*/

    mergeSort(arr) {
        try {

            if (arr.length === 1) {
                /*
                 return once we hit an array with a single item
                */
                return arr
            }

            const mid = Math.floor(arr.length / 2)
            const left = arr.slice(0, mid)
            const right = arr.slice(mid)

            return this.merge(
                this.mergeSort(left),
                this.mergeSort(right)
            )
        } catch (error) {
            console.log(error.message);
        }
    },

    /*
     compare the arrays item by item and return the concatenated result
    */
    merge(left, right) {
        try {

            let result = []
            let indexLeft = 0
            let indexRight = 0

            while (indexLeft < left.length && indexRight < right.length) {
                if (left[indexLeft] < right[indexRight]) {
                    result.push(left[indexLeft])
                    indexLeft++
                } else {
                    result.push(right[indexRight])
                    indexRight++
                }
            }

            return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
        } catch (error) {
            console.log(error.message);
        }

    },

    /*=====================================================================================
    Tenth Program = Vending Machine
    */

    /* Vending Machine
*   
*   Purpose     : It is going to generate the seperate and multiple amount based on our user
*                requirements.it wil give in the seperate order.
*
*   @descriptipn: Declaring the function and passing the userinput as argument.
*   @function   : Diplayname takes the userinput and print it with some sentence.                    
*/

    vendingMachine(amount, i, notes) {
        try {

            var arr = [1000, 500, 100, 50, 10, 5, 2, 1];

            /*
            if amount and i is zero
            */
            if (amount == 0 && i == arr.length) {
                console.log("Total no. of notes : " + notes);
                return;
            }
            /*
            if amount greater than zero then print all the outcomes
            */
            if (Math.floor(amount / arr[i]) > 0) {
                console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
                notes = notes + Math.floor(amount / arr[i]);
                amount = amount % arr[i];
                this.vendingMachine(amount, i + 1, notes);
                return;
            }
            this.vendingMachine(amount, i + 1, notes)
        } catch (error) {
            console.log(error.message);
        }
    },


    /*=====================================================================================
    Eleventh Program = dayofweek
    */

    /* Day of week
*    
*   Purpose     :  It is used to calculate the respective day from our given input.
*                  that is depends on given day ,month and year.
*
*   @descriptipn : Declaring the function and passing the userinput as argument.
*   @function    : Diplayname takes the userinput and print it with some sentence.                    
*/

    /*
    d = day, m = month, y = year
    */
    dayOfWeek(d, m, y) {
        try {

            var y0 = y - Math.floor((14 - m) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
            var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
            return d0;
        } catch (error) {
            console.log(error.message);
        }
    },

    /*=====================================================================================
    Twflth Program = Temperatur Conversion
    */

    /* Temperature Conversion based on formulae
*
*   Purpose     : It is used to calculate the temperature based on our formulae.
*
*   @descriptipn: Declaring the function and passing the userinput as argument.
*   @function   : Diplayname takes the userinput and print it with some sentence.                    
*/

    temperature() {
        try {

            var val = read.question("Enter Your Temperature format => press c/C for celsius or press f/F for Fahrenheit : ")

            /*
             if temp in celsius and convert into fehrenheit
            */
            if (val === "c" || val === "C") {
                var a = parseInt(read.question("Enter Celsius Temperature : "))
                F = (a * (9 / 5) + 32);
                console.log("Celsius to Fahrenheit : " + F);
            }
            /*
             if temp in fehrenheit and convert into fehrenheit
            */
            else if (val === "f" || val === "F") {
                var d = parseInt(read.question("Enter Fahrenheit Temperature : "))
                C = (d - 32) * (5 / 9);
                console.log("Fahrenheit to Celsius : " + C);
            }
            else {
                console.log("Please Enter correct Input");

            }
        } catch (error) {
            console.log(error.message);
        }

    },


    /*=====================================================================================
    Thirtheen Program = monthlyPayment Program
    */

    /* Monthly payment
*
*   Purpose      : It is used to calculate the EMI depends on formulae.
*
*   @descriptipn : Declaring the function and passing the userinput as argument.
*   @function    : Diplayname takes the userinput and print it with some sentence.                    
*/

    /*
     P = principle, Y = year, R = rate
    */
    payment(P, Y, R) {
        try {
            var n = 12 * Y;
            var r = R / (12 * 100);
            var payment = (P * r) / (1 - Math.pow((1 + r), -n))
            console.log("Payment : " + payment);
        } catch (error) {
            console.log(error.message);
        }

    },


    /*=====================================================================================
    Forteenth Program = Newton's Program
    */

    /* Square root of a number
*
*   Purpose     :  It is used to generate the random numbers that can be squared by a formula
*                  finally that must be in positive value.
*
*   @descriptipn:  Declaring the function and passing the userinput as argument.
*   @function   :  Diplayname takes the userinput and print it with some sentence.                    
*/

    sqrt(c) {
        try {

            var t = c;
            var epsilon = 1e-15;
            while (Math.abs(t - (c / t)) > epsilon * t) {
                t = ((c / t) + t) / 2;
            }
            console.log("the square root of number is: " + t);
        } catch (error) {
            console.log(error.message);
        }

    },

    /*=====================================================================================
    Fifteenth Program = toBinary
    */

    /* Convert to Binary
*
*   Purpose      :  It is used to generate the random numbers that should converted into 
*                   Binary form.
*
*   @descriptipn :  Declaring the function and passing the userinput as argument.
*   @function    :  Diplayname takes the userinput and print it with some sentence.                    
*/

    toBinary(number) {
        try {
            var sum = 0;
            var arr = [];
            var i = 0;
            var revbinary = "";
            /*
            Condition for Binary element
            */
            while (number > 0) {
                arr[i] = number % 2;
                revbinary = arr[i] + revbinary;
                number = Math.floor(number / 2);
                i++
            } while (revbinary.length < 8) {
                revbinary = '0' + revbinary;

            }
            /*
            console.log(revbinary);
            */
            return (revbinary)
        } catch (error) {
            console.log(error.message);
        }
    },

    /*==================================================================================================
    Sixteenth Program = Decimal-Binary & Binary-Decimal Convert
    */

    /* Convert to Binary
*
*   Purpose      :  It is used to generate the random numbers that should converted into 
                    Binary form with eight digit and again convert into decimal form.

*   @descriptipn  : Declaring the function and passing the userinput as argument.
*   @function    :  Display name takes the userinput and print it with some sentence.
*/

    swapNibbles(binary) {
        try {
            let nibble1 = binary.slice(0, 4);
            let nibble2 = binary.slice(4);
            newbinary = nibble2 + nibble1;
            return newbinary;
        } catch (error) {
            console.log(error.message);
        }
    },


    /**
       * @description  :Convert decimal to binary.
       * @param {*} binary  :binary number
    */

    toDecimal(binary) {
        try {

            let pow = 0;
            let decimal = 0, i = 0, m = 10;
            while (i < 8) {
                decimal = decimal + (binary % m) * Math.pow(2, i);
                binary = Math.floor(binary / 10);
                i++;
            }
            return decimal
        } catch (error) {
            console.log(error.message);
        }
    },
}


///////////////////////////////////////   End Algorithm Programs   /////////////////////////////////////



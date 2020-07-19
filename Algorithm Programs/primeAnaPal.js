/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeAnaPal.js
 *                      
 * 
 *  Purpose         : Print palindrome numbers and two numbers compare anagram or not
 * 
 *  @description    
 * 
 *  @file           : primeAnaPal.js
 *  @overview       : prints palindrome and anagram numbers
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var from = read.question("Starting From : ")
var upto = read.question("Range upto : ")
var t = utility.primeNumber(from, upto)
for (var i = 0; i < t.length; i++) {
    let check = utility.palindrome1(t[i])
    if (check) {
        console.log("value is Prime & Palindrome : " + check);
    }
}

for (var j = 0; j < t.length - 1; j++) {
    for (var k = j + 1; k < t.length; k++) {
        var checking = utility.anagram1(t[j], t[k])
        if (checking === true) {
            console.log("Prime & Palindeome & Anagram : ", t[j], "", t[k])
        }
    }
}




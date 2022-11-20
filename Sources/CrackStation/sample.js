var crypto= require('crypto')
var fs = require('fs')
var sha1 = crypto.createHash('sha1')
var dict = {}
// digits 
var digits_arr = [...Array(10).keys()]

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alpha2 =  Array.from(Array(26)).map((e, i) => i + 97);
//const empty  = ""
//dict[crypto.createHash('sha1').update(empty).digest('hex')] = "!!"
const alphabet_arr = alpha.map((x) => String.fromCharCode(x));
const lower_alphabet= alpha2.map((x)=>String.fromCharCode(x));
const additional_symbols =["?","!"]

intializeDict(digits_arr,dict)
intializeDict(alphabet_arr,dict)
intializeDict(lower_alphabet,dict)
intializeDict(additional_symbols,dict)



//twocharacterHashingCall
twoString()
//Two Character Hashing 
function twoString(){

    dict[crypto.createHash('sha1').update(additional_symbols[0]+additional_symbols[0]).digest('hex')] = additional_symbols[0]+additional_symbols[0]
    dict[crypto.createHash('sha1').update(additional_symbols[0]+additional_symbols[1]).digest('hex')] = additional_symbols[0]+additional_symbols[1]
    dict[crypto.createHash('sha1').update(additional_symbols[1]+additional_symbols[0]).digest('hex')] = additional_symbols[1]+additional_symbols[0]
    dict[crypto.createHash('sha1').update(additional_symbols[1]+additional_symbols[1]).digest('hex')] = additional_symbols[1]+additional_symbols[1]


    dict[crypto.createHash('sha256').update(additional_symbols[0]+additional_symbols[0]).digest('hex')] = additional_symbols[0]+additional_symbols[0]
    dict[crypto.createHash('sha256').update(additional_symbols[0]+additional_symbols[1]).digest('hex')] = additional_symbols[0]+additional_symbols[1]
    dict[crypto.createHash('sha256').update(additional_symbols[1]+additional_symbols[0]).digest('hex')] = additional_symbols[1]+additional_symbols[0]
    dict[crypto.createHash('sha256').update(additional_symbols[1]+additional_symbols[1]).digest('hex')] = additional_symbols[1]+additional_symbols[1]





    for(var letter of alphabet_arr){
        for(var letter2 of alphabet_arr){
            dict[crypto.createHash('sha1').update(letter+letter2).digest('hex')] = letter+letter2
            dict[crypto.createHash('sha1').update(letter+letter2.toLowerCase()).digest('hex')] = letter+letter2.toLowerCase()
            dict[crypto.createHash('sha1').update(letter.toLowerCase()+letter2.toLowerCase()).digest('hex')] = letter.toLowerCase()+letter2.toLowerCase()
            dict[crypto.createHash('sha1').update(letter.toLowerCase()+letter2).digest('hex')] = letter.toLowerCase()+letter2
            
            
            
            dict[crypto.createHash('sha1').update(letter.toLowerCase()+additional_symbols[0]).digest('hex')] = letter.toLowerCase()+additional_symbols[0]
            dict[crypto.createHash('sha1').update(letter.toLowerCase()+additional_symbols[1]).digest('hex')] = letter.toLowerCase()+additional_symbols[1]
            dict[crypto.createHash('sha1').update(letter+additional_symbols[1]).digest('hex')] = letter+additional_symbols[1]
            dict[crypto.createHash('sha1').update(letter+additional_symbols[0]).digest('hex')] = letter+additional_symbols[0]
            dict[crypto.createHash('sha1').update(additional_symbols[1]+letter).digest('hex')] = additional_symbols[1]+letter
            dict[crypto.createHash('sha1').update(additional_symbols[0]+letter).digest('hex')] = additional_symbols[0]+letter
            dict[crypto.createHash('sha1').update(additional_symbols[0]+letter.toLowerCase()).digest('hex')] = additional_symbols[0]+letter.toLowerCase()
            dict[crypto.createHash('sha1').update(additional_symbols[1]+letter.toLowerCase()).digest('hex')] = additional_symbols[1]+letter.toLowerCase()



            //sha256
            dict[crypto.createHash('sha256').update(letter+letter2).digest('hex')] = letter+letter2
            dict[crypto.createHash('sha256').update(letter+letter2.toLowerCase()).digest('hex')] = letter+letter2.toLowerCase()
            dict[crypto.createHash('sha256').update(letter.toLowerCase()+letter2.toLowerCase()).digest('hex')] = letter.toLowerCase()+letter2.toLowerCase()
            dict[crypto.createHash('sha256').update(letter.toLowerCase()+letter2).digest('hex')] = letter.toLowerCase()+letter2

                         
            dict[crypto.createHash('sha256').update(letter.toLowerCase()+additional_symbols[0]).digest('hex')] = letter.toLowerCase()+additional_symbols[0]
            dict[crypto.createHash('sha256').update(letter.toLowerCase()+additional_symbols[1]).digest('hex')] = letter.toLowerCase()+additional_symbols[1]
            dict[crypto.createHash('sha256').update(letter+additional_symbols[1]).digest('hex')] = letter+additional_symbols[1]
            dict[crypto.createHash('sha256').update(letter+additional_symbols[0]).digest('hex')] = letter+additional_symbols[0]
            dict[crypto.createHash('sha256').update(additional_symbols[1]+letter).digest('hex')] = additional_symbols[1]+letter
            dict[crypto.createHash('sha256').update(additional_symbols[0]+letter).digest('hex')] = additional_symbols[0]+letter
            dict[crypto.createHash('sha256').update(additional_symbols[0]+letter.toLowerCase()).digest('hex')] = additional_symbols[0]+letter.toLowerCase()
            dict[crypto.createHash('sha256').update(additional_symbols[1]+letter.toLowerCase()).digest('hex')] = additional_symbols[1]+letter.toLowerCase()
        }
        for(var letter3 of digits_arr){
            dict[crypto.createHash('sha1').update(letter.toLowerCase()+letter3.toString()).digest('hex')] = letter.toLowerCase()+letter3.toString()
            dict[crypto.createHash('sha1').update(letter+letter3.toString()).digest('hex')] = letter+letter3.toString()
            dict[crypto.createHash('sha1').update(letter3.toString()+letter).digest('hex')] = letter3.toString()+letter
            dict[crypto.createHash('sha1').update(letter3.toString()+letter.toLocaleLowerCase()).digest('hex')] = letter3.toString()+letter.toLocaleLowerCase()



            //sha256
            dict[crypto.createHash('sha256').update(letter.toLowerCase()+letter3.toString()).digest('hex')] = letter.toLowerCase()+letter3.toString()
            dict[crypto.createHash('sha256').update(letter+letter3.toString()).digest('hex')] = letter+letter3.toString()
            dict[crypto.createHash('sha256').update(letter3.toString()+letter).digest('hex')] = letter3.toString()+letter
            dict[crypto.createHash('sha256').update(letter3.toString()+letter.toLocaleLowerCase()).digest('hex')] = letter3.toString()+letter.toLocaleLowerCase()

        }
    }
    for(var letter of digits_arr){
        dict[crypto.createHash('sha1').update(letter.toString()+additional_symbols[0]).digest('hex')] = letter.toString()+additional_symbols[0]
        dict[crypto.createHash('sha1').update(letter.toString()+additional_symbols[1]).digest('hex')] = letter.toString()+additional_symbols[1]
        dict[crypto.createHash('sha256').update(letter.toString()+additional_symbols[0]).digest('hex')] = letter.toString()+additional_symbols[0]
        dict[crypto.createHash('sha256').update(letter.toString()+additional_symbols[1]).digest('hex')] = letter.toString()+additional_symbols[1]
        dict[crypto.createHash('sha1').update(additional_symbols[0]+letter.toString()).digest('hex')] = additional_symbols[0]+letter.toString()
        dict[crypto.createHash('sha1').update(additional_symbols[1]+letter.toString()).digest('hex')] = additional_symbols[1]+letter.toString()
        dict[crypto.createHash('sha256').update(additional_symbols[0]+letter.toString()).digest('hex')] = additional_symbols[0]+letter.toString()
        dict[crypto.createHash('sha256').update(additional_symbols[1]+letter.toString()).digest('hex')] = additional_symbols[1]+letter.toString()



        for(var letter2 of digits_arr){
            dict[crypto.createHash('sha1').update(letter.toString()+letter2.toString()).digest('hex')] = letter.toString()+letter2.toString()
            dict[crypto.createHash('sha256').update(letter.toString()+letter2.toString()).digest('hex')] = letter.toString()+letter2.toString()
        }
    }
    return dict
}



function allPossibleCombinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    var ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
    }
    return ret;
}
var alphabets = lower_alphabet.concat(alphabet_arr)
var digitsAndAlphabets = alphabets.concat(digits_arr)
var allSymbolArray= digitsAndAlphabets.concat(additional_symbols)
var resultfor3letters = allPossibleCombinations(allSymbolArray,3,"")
intializeDict(resultfor3letters,dict)


function intializeDict(arr,dict) {
    for(i=0;i<arr.length;i++)
    {
        let stringNumber = arr[i].toString()
        dict[crypto.createHash('sha1').update(stringNumber).digest('hex')] = arr[i].toString()
        dict[crypto.createHash('sha256').update(stringNumber).digest('hex')] = arr[i].toString()
    }
    return dict
}


var dictString = JSON.stringify(dict)
fs.writeFile("data.json",dictString, function(err, result) {
    if(err) console.log('error', err)})

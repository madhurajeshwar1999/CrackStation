# CrackStation

CrackStation has a folder named
    1. Sources
  
    Inside sources we have a file named sample.js which is used to generate the hashes and store the dictionary into a file named data.json


    Instructions to run sample.js

    To run sample.js we need to enter the following command
        node sample.js
    Post which we get data.jsonfile generated
      This file generated is accessed  inside crackStation.swift in function loadDictionaryFromDisk()

    In the Tests folder we have the CrackStationTests.swift where we have 3 test cases written which check for the decrypted hash value with that of the value given using XAssertEqual() 
    This can be checked using the command
    
    swift test
NAME - MADHU VENKATA RAJA RAJESHWAR
OREGON MAIL -madhuv@oregonstate.edu
# CrackStation

**OVERVIEW**
CrackStation is an application which is developed to decrypt the hash given to it as input and generate a plain text string  . 

**VERSION**
1.0.0 - tag corresponding to release 1 where we have changes for single character decryption
2.0.0 - tag corresponding to release 2 where we have changes for two 

**FILES**

Main File  - CrackStation.swift (Implements Interface Decrypter)
Interface  - Decrypter.swift (contains the function decrypt which takes a string which is the hash and generates the password .This implementation logic is provided inside CrackStation)
Standalone file - sample.js (written in js using framework express and environment node)


**INSTRUCTIONS TO RUN**

CrackStation has a folder named
    1. Sources
  
    Inside sources we have a file named sample.js which is used to generate the hashes and store the dictionary into a file named data.json


    Instructions to run sample.js

    2. To run sample.js we need to enter the following command
        node sample.js

    3. Post which we get data.jsonfile generated
      This file generated is accessed  inside CrackStation.swift in function loadDictionaryFromDisk()
    4. The dictionary is initalized in init() usinf the loadDictionaryFromDisk() method which is static

    5. The decrypt method is implemented to generated the string from the hash by fetching  the value from dictionary using the key provided to it . In case we don't find any key corresponding to this key it returns nil .

    In the Tests folder we have the CrackStationTests.swift where we have 4 test cases written which check for the decrypted hash value with that of the value given using XAssertEqual() 
    This can be checked using the command
    
    swift test

**GIT LINK**


**AUTHOR :**
NAME - MADHU VENKATA RAJA RAJESHWAR
MAIL -madhuv@oregonstate.edu
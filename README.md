## **CrackStation, A Decrypter implementation**
<hr>

### **OVERVIEW**
<hr>
CrackStation is an application which is developed to decrypt the hash given to it as input and generate a plain text string . 

<br>
<br>

### **VERSION**
**1.0.0**
 Tag corresponding to release 1 where we have changes for single character decryption
 
**2.0.0** - Tag corresponding to release 2 where we have changes for two characters
 
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
    This can be checked using the command swift test


<br>
<hr>


### **Mission Statement**
<hr>
The Crack Station application can be used to decrypt unsalted hashes of strings(upto length 3) and compare the result with that of expected result.

<br>

###  **Installation**
<hr>

### **Swift Package Manager**
The <a href="https://www.swift.org/package-manager/">Swift Package Manager</a> is a tool for managing the distribution of Swift code. It’s integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies.

Once , you have swift package set up, add CrackStation to the list of dependencies in your <mark style="background-color: #696969"><span style="color: Gainsboro;">`Package.swift`</mark></span> file :
```swift
dependencies: [
        .package(url: "https://github.com/madhurajeshwar1999/CrackStation", from:"2.1.0")
    ]
```

<br>
<hr>

###  **Usage**
<hr>

### **The API**

The decrypt protocol has two methods <mark style="background-color: #696969"><span style="color: Gainsboro;">`init`</mark></span> and   <mark style="background-color: #696969"><span style="color: Gainsboro;">`decrypt`</mark></span> below are their signatures

``` swift 
      init()
      func decrypt(shaHash: String) -> String?
```
<p>The init method(constructor) initializes the dictionary by loading the data.json file</p>

The decrypt function either returns the cracked plain-text password or, if unable to crack, then returns nil. Parameter shaHash: The SHA-1 or SHA-256 digest that corresponds to the encrypted password.Returns the underlying plain-text password if `shaHash` was successfully cracked. Otherwise returns nil.


### **The Example**
    

``` swift
@testable import CrackStation
```   
<p>In the snippet above we are importing CrackStation class where we provide implementation to our Decrypt protocol by defining the <b>decrypt()</b> function</p>

```swift

        let hash = "da39a3ee5e6b4b0d3255bfef95601890afd80709"
        let value = CrackStation().decrypt(shaHash:hash)
        XCTAssertEqual(value, nil)
```
<p>In the above snippet we are creating an object of type CrackStation() and are calling the decrypt method with the hash as parameter. </p>
<hr>
<br>






**GIT LINK**
URL -`git@github.com:madhurajeshwar1999/CrackStation.git`


**AUTHOR :**
NAME - MADHU VENKATA RAJA RAJESHWAR
<br>
EMAIL -madhuv@oregonstate.edu
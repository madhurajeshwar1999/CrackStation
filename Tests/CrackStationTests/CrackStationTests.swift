import XCTest
@testable import CrackStation

final class CrackStationTests: XCTestCase {
   func testExample() throws {

      let lookupTable2 = try CrackStation.loadDictionaryFromDisk()
      print(lookUpTable.count)
      let hash = "95cb0bfd2977c761298d9624e4b4d4c72a39974a"
      let value = lookupTable2[hash]
      print("Type :",type(of:value))
        XCTAssertNotNil(value)
        XCTAssertEqual(value,"y")
    }
    func testExample2() throws {
        let lookupTable2 = try CrackStation.loadDictionaryFromDisk()
        let hash = "b6589fc6ab0dc82cf12099d1c2d40ab994e8410c"
        let value = lookupTable2[hash]
        XCTAssertNotNil(value)
        XCTAssertEqual(value,"0")
    }
    func testExample3() throws {
        let lookupTable2 = try CrackStation.loadDictionaryFromDisk()
        let hash = "f747c820b48b0f665572b5886dbd364ad9540852"//hash for "rajeshwar"
        let value = lookupTable2[hash]
        XCTAssertNil(value)
    }
    func testExample4() throws {
        
        let hash = "da39a3ee5e6b4b0d3255bfef95601890afd80709"//hash for empty string
        let value = CrackStation().decrypt(shaHash:hash)
        XCTAssertEqual(value, nil)
    }

    //TEST CASES FOR TWO STRING COMBO
    func testExample8() throws {
        let lookupTable = try CrackStation.loadDictionaryFromDisk()
        let hash = "da23614e02469a0d7c7bd1bdab5c9c474b1904dc" //hash for "ab"
        let value = lookupTable[hash]
        XCTAssertNotNil(value)
        XCTAssertEqual(value,"ab")
    }

    func testExample5() throws{
        let lookupTable = try CrackStation.loadDictionaryFromDisk()
        let hash = "9b2c3280ccea0ba408270c45185bfbcd36164237" //hash for "1a"
        let value = lookupTable[hash]
        XCTAssertNotNil(value)
        XCTAssertEqual(value,"1a")
    }

    func testExample6() throws{
        let lookupTable = try CrackStation.loadDictionaryFromDisk()
        let hash = "17ba0791499db908433b80f37c5fbc89b870084b" //hash for "11"
        let value = lookupTable[hash]
        XCTAssertNotNil(value)
        XCTAssertEqual(value,"11")
    }
}

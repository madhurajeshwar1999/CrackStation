import Foundation
public class CrackStation: Decrypter{
    public private(set) var text = "Hello, World!"

    required public init() {
    }

    public func decrypt(shaHash: String) -> String?{
        let lookUptable = try! CrackStation.loadDictionaryFromDisk()
        let ans = lookUptable[shaHash]
        return ans!
    }


    static func loadDictionaryFromDisk() throws -> [String : String] {
        guard let path = Bundle.module.url(forResource: "data", withExtension: "json") else { return [:] }
        let data = try Data(contentsOf: path)
        
        let jsonResult = try JSONSerialization.jsonObject(with: data)
        if let lookupTable: Dictionary = jsonResult as? Dictionary<String, String> 
        {
            return lookupTable
        } else {
            return [:]
        }
    }
}

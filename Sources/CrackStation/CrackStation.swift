import Foundation


public class CrackStation: Decrypter {

    private let lookUpTable: [String:String] 

     required public  init() 
    {
        do {
            lookUpTable = try CrackStation.loadDictionaryFromDisk()
        } catch {
            lookUpTable = [:]
        }
    }

    public func decrypt(shaHash: String) -> String? {
        let ans = lookUpTable[shaHash]
        return ans
    }


    private static func loadDictionaryFromDisk() throws -> [String : String] {
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

export class GenericHelper {

    
    /**
     * Check if a array parameter is null or empty
     * @param {any[]} array
     * */
    public static isArrayNullOrEmpty = (array: any[]) : Boolean =>{
        let result: Boolean = false;
        result = array === null || array.length === 0;
        return result;
    }

    /**
     * Check if a string parameter is null or empty
     * @param {string} str
     * */
    public static isStringNullOrEmpty = (str?: string) : Boolean =>{
        return (!str || 0 === str.length); 
    }
}
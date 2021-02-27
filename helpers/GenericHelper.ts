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
     * @param {string} value
     * */
    public static isStringNullOrEmpty = (value: string) : Boolean =>{
        let result: Boolean = false;
        result = value === null || value.length === 0;
        return result;
    }
}
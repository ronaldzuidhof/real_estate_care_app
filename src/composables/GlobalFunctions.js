// Global functions for use in the complete program (compasable functions)

// function to convert a string. All letters to lowerCase, First letter to upperCase
export function useStringCapital(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

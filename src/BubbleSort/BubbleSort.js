class BubbleSort {
    constructor(){

    }
    sort(inputArray){
        let isElementsSwapped = true
        while(isElementsSwapped){
            isElementsSwapped = false
            for(let i=0;i<inputArray.length-1;i++){
                if(inputArray[i]>inputArray[i+1]){
                    //this.swap(inputArray[i],inputArray[i+1])
                    let temp = inputArray[i]
                    inputArray[i] = inputArray[i+1]
                    inputArray[i+1] = temp
                    isElementsSwapped = true
                }
            }
        }
        return inputArray
    }
    swap(firstElement,secondElement){
        const temp = firstElement
        firstElement = secondElement
        secondElement = temp
    }
}
module.exports = BubbleSort
class BubbleSort {
    constructor(){
        this.NoOfIterations = 0
    }
    set Iterations(value){
        this.NoOfIterations = value
    }
    sort(inputArray){
        let isElementsSwapped = true
        let passes = 0
        while(isElementsSwapped){
            isElementsSwapped = false
            for(let i=0;i<inputArray.length-1;i++){
                if(inputArray[i]>inputArray[i+1]){
                    let temp = inputArray[i]
                    inputArray[i] = inputArray[i+1]
                    inputArray[i+1] = temp
                    isElementsSwapped = true
                }
            }
            passes+=1
        }
        this.Iterations = passes
        return inputArray
    }
}
module.exports = BubbleSort
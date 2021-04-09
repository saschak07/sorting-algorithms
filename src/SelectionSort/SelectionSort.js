class SelectionSort {
    constructor(){
        this.noOfIterations = 0
    }

    set iterations(value){
        this.noOfIterations = value
    }

    sort(array){
        const length = array.length
        for(let i=0;i<length-1;i++){
            let min = i
            for(let j=i+1;j<length;j++){
                if(array[j]<array[min]){
                    min = j
                }
            }
            if(min!==i){
                let temp = array[min]
                array[min] = array [i]
                array[i] = temp
            }
        }
        return array
    }
    
}
module.exports = SelectionSort
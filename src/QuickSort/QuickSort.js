/**
 * class implementing the quick sort algorithm
 */
class QuickSort {
    /**
     * recursive sorting method , divided by partitions
     * everytime through the upper and lower bounds
     * @param {array} array 
     * @param {number} ub 
     * @param {number} lb 
     */
    sort(array,ub,lb){
        if(ub>lb){
            const loc = this.partition(array,ub,lb)
            if(loc>0 && loc<array.length){
                this.sort(array,loc-1,lb)
                this.sort(array,ub,loc+1)
            }
        }
    }
    /**
     * partitioning the array based on the pivot position
     * returns the index where the pivot was swapped, this index would be the optimum
     * position for the pivot element, next partion happens considering the returned 
     * index as the partitioning element for the array
     * 
     * returns 0 if no swap with the pivot happend, thus stops from further iterations
     * @param {array} array 
     * @param {number} ub 
     * @param {number} lb 
     * @returns 
     */
    partition(array,ub,lb){
        let pivot = array[lb]
        let start = lb+1
        let end = ub
        while(start<end){
            while(array[start]<pivot){
                start++
            }
            while(array[end]>pivot){
                end--
            }
            if(start<end){
                let temp = array[start]
                array[start] = array[end]
                array[end] = temp
            }
            
        }
        if(start>end){
            let tempVar = array[lb]
            array[lb] = array[end]
            array[end] = tempVar
            return end
        }
        return 0
    }
}
module.exports = QuickSort
const o = {
    chunk(array, length = 1) {
        let chunkedArray = new Array;
        if(length < 1){
            return chunkedArray;
        }
        let partarray = new Array;
        for(let i = 0; i < array.length; i++){
            partarray.push(array[i]);
            if((i + 1) % length === 0){
                chunkedArray.push(partarray);
                partarray = new Array;
            }
            else if(i + 1 === array.length){
                chunkedArray.push(partarray);
            }
        }
        return chunkedArray;
    },
    compact(array){
        let compactArray = new Array;
        for(let i = 0; i < array.length; i++){
            if(!array[i] == 0){
                compactArray.push(array[i]);
            }
        }
        return compactArray;
    },
    concat(){
        let concatArray = new Array;
        for(let i = 0; i < arguments.length; i++){
            if(Array.isArray(arguments[i])){
                for(let j = 0; j < arguments[i].length; j++){
                    concatArray.push(arguments[i][j])
                }
            }
            else{
                concatArray.push(arguments[i]);
            }
        }
        return concatArray;
    },
    diffrence(){

    },
    diffrenceBy(){

    },
    diffrenceWith(){

    },
    drop(array, removeleft = 1){
        let dropArray = new Array;
        if(removeleft < 1){
            removeleft = 0;
        }
        for(let i = removeleft; i < array.length; i++){
            dropArray.push(array[i])
        }
        return dropArray;
    },
    dropRight(array, removeRight = 1){
        let dropArray = new Array;
        if(removeRight < 1){
            removeRight = 0;
        }
        for(let i = 0; i < array.length - removeRight; i++){
            dropArray.push(array[i])
        }
        return dropArray;
    },
    dropRightWhile(){

    },
    dropWhile(){

    },
    fill(array, value, start = 0, end = array.length){
        let fillArray = new Array;
        for(let i = 0; i < array.length; i++){
            if(i >= start && i < end){
                array[i] = value;
            }
        }
        return array;
    },
    findIndex(){

    },
    findLastIndex(){

    },
    flatten(array){
        let flattenArray = new Array;
        this.flattenDeeper(array, flattenArray, 1);
        return flattenArray;
    },
    flattenDeep(array){
        let flattenArray = new Array;
        this.flattenDeeper(array, flattenArray, Infinity);
        return flattenArray;
    },
    flattenDeeper(array, oldArray, depth){
        if(Array.isArray(array)){
            for (let i in array)
            {
                if(depth >= 0){
                    this.flattenDeeper(array[i], oldArray, depth);
                    depth--;
                }
                else{
                    oldArray.push(array[i]);
                }
            }
        }
        else{
            oldArray.push(array);
        }
    },
    flattenDepth(array, depth){
        let flattenArray = new Array;
        let thisDepth = depth;
        this.flattenDeeper(array, flattenArray, thisDepth);
        return flattenArray;
    },
    fromPairs(){
        
    },
    head(array){
        return (array && array.length) ? array[0] : undefined;
    },
    indexOf(array, value, startIndex = 0){
        for(let index = startIndex; index < array.length; index++){
            if(array[index] == value){
                return index;
            }
        }
        return -1;
    },
    initial(array){
        let initialArray = array;
        return initialArray.slice(0, array.length - 1);
    },
    intersection(arrayOne, arrayTwo){

    },
    intersectionBy(){

    },
    intersectionWith(){

    },
    join(array, separator){
        let result = "";
        for(let i = 0; i < array.length - 1; i++){
            result+=array[i] + String(separator);
        }
        result += array[array.length - 1];
        return result;
    },
    last(array){
        return (array && array.length) ? array[array.length - 1] : undefined;
    },
    lastIndexOf(array, value, startIndex = array.length - 1)
    {
        for(let index = startIndex; index > 0; index--){
            if(array[index] == value){
                return index;
            }
        }
        return -1;
    },
    nth(array, n=0){
        return (n >= 0) ? array[n] : array[array.length + n] 
    }

}
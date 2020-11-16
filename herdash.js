const a = {
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
    },
    pull(array){
        for(let i = 1; i < arguments.length; i++){
           let idx = array.indexOf(arguments[i]);
           while(idx != -1){
               array.splice(idx, 1);
               idx = array.indexOf(arguments[i], idx);
           } 
        }
        return array;
    },
    pullAll(array, pullArray){
        for(let i = 0; i < pullArray.length; i++){
            let idx = array.indexOf(pullArray[i]);
            while(idx != -1){
                array.splice(idx, 1);
                idx = array.indexOf(pullArray[i], idx);
            } 
         }
         return array;
    },
    pullAllBy(){

    },
    pullAllWith(){
        
    },
    pullAt(array, indexes){
        let pulledArray = new Array;
        for(let i = 0; i < indexes.length; i++){
                pulledArray.push(array[indexes[i] - i])
                array.splice(indexes[i]-i, 1);
         }
         return pulledArray;
    },
    remove(array, param){

    },
    reverse(array){
        array = array.reverse()
        return array;
    },
    slice(array, start = 0, end = array.length){

    },
    sortedIndex(array, value){
        let start=0, end=array.length-1; 
        while (start<=end){ 
            let mid=Math.floor((start + end)/2); 
            if (array[mid] < value)  {
                start = mid + 1; 
            }
            else{
                end = mid - 1; 
            }
        } 
        return start; 
    },
    sortedIndexBy(){
        
    },
    sortedIndexOf(array, value){
        let start=0, end=array.length-1; 
        while (start<=end){ 
            let mid=Math.floor((start + end)/2); 
            if (array[mid] < value)  {
                start = mid + 1; 
            }
            else{
                end = mid - 1; 
            }
        }
        if(array[start] == value){
            return start; 
        }
        else{
            return start - 1;
        }
    },
    sortedLastIndex(array, value){
        let start=0, end=array.length-1; 
        while (start<=end){ 
            let mid=Math.floor((start + end)/2); 
            if (array[mid] <= value){
                start = mid + 1; 
            }
            else{
                end = mid - 1; 
            }
        }
        return start;
    },
    sortedLastIndexBy(){

    },
    sortedLastIndexOf(array, value){
        let start=0, end=array.length-1; 
        while (start<=end){ 
            let mid=Math.floor((start + end)/2); 
            if (array[mid] <= value){
                start = mid + 1; 
            }
            else{
                end = mid - 1; 
            }
        }
        if(array[start] == value){
            return start; 
        }
        else{
            return start - 1;
        }
    },
    sortedUniq(array){
        let uniqArray = new Array;
        let x = array[0]
        uniqArray.push(x);
        for(let i = 0; i < array.length; i++){
            if(x < array[i]){
                x = array[i];
                uniqArray.push(x) 
            }
        }
        return uniqArray;
    },
    sortedUniqBy(){
        
    },
    tail(array){
        let tailArray = array;
        return tailArray.slice(1,array.length);
    },
    take(array, n = 1){
        let takeArray = array;
        return takeArray.slice(0, n);
    },
    takeRight(array, n = 1){
        let takeArray = array;
        array.length < n ? n = array.length : n = n;
        return takeArray.slice(array.length -  n,array.length)
    },
    takeRightWhile(array){

    },
    takeWhile(){

    },
    union(){
        let unionArray = new Array;
        for(let i = 0; i < arguments.length; i++){
            for(let j = 0; j < arguments[i].length; j++){
                if(this.indexOf(unionArray, arguments[i][j]) < 0){
                    unionArray.push(arguments[i][j])
                }
            }
        }
        return unionArray;
    },
    unionBy(){

    },
    unionWith(){

    },
    uniq(array){
        let uniqArray = new Array;
        for(let j = 0; j < array.length; j++){
            if(this.indexOf(uniqArray, array[j]) < 0){
                uniqArray.push(array[j])
            }
        }
        return uniqArray;
    },
    uniqBy(){

    },
    uniqWith(){

    },
    unzip(array){
        let unzippedArray = new Array;
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                try{
                    unzippedArray[j][i] = array[i][j]
                }
                catch{
                    let insideArray = new Array;
                    for(let k = 0; k < array.length; k++){
                        insideArray[k]=undefined;
                    }
                    insideArray[i] = array[i][j];

                    unzippedArray.push(insideArray);
                }
            }
        }
        return unzippedArray
    },
    unzipWith(){

    },
    without(array){
        let withoutArray = new Array;
        for(let i = 0; i < array.length; i++){
            let push = true;
            for(let j = 1; j < arguments.length; j++){
                if(arguments[j] === array[i]){
                    push = false;
                }
            }
            if(push){
                withoutArray.push(array[i]);
            }
        }
        return withoutArray;
    },
    xor(){
        let xorArray = arguments[0];
        for(let i = 1; i < arguments.length; i++){
            for(let j = 0; j < arguments[i].length; j++){
                let index = this.indexOf(xorArray, arguments[i][j]);
                if(index < 0){
                    xorArray.push(arguments[i][j])
                }
                else{
                    xorArray.splice(index, 1)
                }
            }
        }
        return xorArray;
    },
    xorBy(){

    },
    xorWith(){

    },
    zip(){
        let zippedArray = new Array;
        for(let i = 0; i < arguments.length; i++){
            for(let j = 0; j < arguments[i].length; j++){
                try{
                    zippedArray[j][i] = arguments[i][j]
                }
                catch{
                    let insideArray = new Array;
                    for(let k = 0; k < arguments.length; k++){
                        insideArray[k]=undefined;
                    }
                    insideArray[i] = arguments[i][j];

                    zippedArray.push(insideArray);
                }
            }
        }
        return zippedArray;
    },
    zipObject(keys, values){
        let zipObject = new Object;
        for(let i = 0; i < keys.length; i++){
            zipObject[keys[i]] = values[i]
        }
        return zipObject
    },
    zipObjectDeep(){

    },
    zipWith(){
        
    }
}
function test(param1, param2) {
    let array = ["1" , "2", "", "слово", false, "slovo", 0, "3", "4" ];
    for(let i = -1; i< array.length; i++){
        if(!_.isEqual(param1(array,i),param2(array,i))){
            console.log(param1(array,i));
            console.log(param2(array,i));
        }
    }
}
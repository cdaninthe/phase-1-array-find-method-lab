// code your solution here

//function superbowlWin(record, index){
//    function year(record, index){
//      return record[index].year;
//    }
//    if (record[index].result === 'W') {
//      return year(record, index);
//    }
//    else {
//        return 'undefined';
//    }
//  }

//function superbowlWin(record){
//    const win = record.find( record => record.result === 'W')
//    if (win.result === 'W'){
 //     return win.year;
 //   } 
 //   else {
//      return undefined;
//    }
//}

function superbowlWin(record){
    const win = record.find( record => record.result === 'W')
    console.log(win)
    if (win){
        return win.year;
    }
}
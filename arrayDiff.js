function arrayDiff(a, b) {

  let uniqueArray = []; //make a unique array for unique values

  for(let i = 0; i<a.length; i++){ //check if values in array a exist in b and
                                      //push the unique one to unique array
    if(b.indexOf(a[i]) === -1){
      uniqueArray.push(a[i]);
    }
  }
  return uniqueArray;// return the unique array.
}

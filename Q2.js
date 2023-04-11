function searchArrayValue(arr, value) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === value) {
      return true;
    } else {
      return searchArrayValue(arr.slice(1), value);
    }
  }

let myArrayValue = [1, 26, 3, 14, 65, 34, 87, 55];
console.log(searchArrayValue(myArrayValue, 34)); 
console.log(searchArrayValue(myArrayValue, 76)); 

  
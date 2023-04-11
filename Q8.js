function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage using the property name as the key
    for (let property in obj) {
      localStorage.setItem(property, JSON.stringify(obj[property]));
    }
  
    // Retrieve the object from localStorage and return it as a new object
    const newObj = {};
    for (let property in obj) {
      const val = localStorage.getItem(property);
      newObj[property] = val ? JSON.parse(val) : null;
    }
  
    return newObj;
  }
  const myObj = { name: "Wasfa", age: 20, city: "Karachi", country: "Pakistan", PhoneNumber : 031342467};
  const savedObj = saveObjectToLocalStorage(myObj);
  console.log(savedObj);
    
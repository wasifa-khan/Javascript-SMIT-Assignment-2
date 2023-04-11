function getObjectFromLocalStorage(key) {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }
  const my_Object = getObjectFromLocalStorage('my_Key');
  console.log(my_Object);
    
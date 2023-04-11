
function saveAnObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  let my_Object = { name: 'Wasfa', age: 20 };
  saveAnObjectToLocalStorage('my_Key', my_Object);
    
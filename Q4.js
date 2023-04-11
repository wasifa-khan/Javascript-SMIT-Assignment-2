function addListItem(text) {
    let ul = document.querySelector('ul'); // select the unordered list
    let li = document.createElement('li'); // create a new list item
    li.textContent = text; 
    ul.appendChild(li); // add the list item to the end of the unordered list
  }
  addListItem("Mercedes");
  addListItem("BMW");
  addListItem("Volvo");
  addListItem("Audi");
  addListItem("Kia");
    
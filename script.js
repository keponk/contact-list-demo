var contactList = [
  "Halina",
  "Rayford",
  "Many",
  "Hans",
  "Danuta",
  "Anisha",
  "Tijuana",
  "Wei",
  "Bob",
  "Veronique",
  "Theodora",
  "Rosita",
  "Johana",
  "Micaela",
  "Owen",
  "Antwan",
  "Valeria",
  "Misty",
  "Angelina",
  "Peggy",
];
var listGroup = document.getElementById("list-group");
var search = document.getElementById("search");

function handleOnInput(e) {
  console.log("input");
  var searchFilter = e.target.value;
  console.log("filter ", searchFilter);

  /**
   * The commented code below is one way to do it.
   * Filter the list with if/else
   */
  //   var filteredList = [];
  //   for (var name of contactList) {
  //     if (name.toLowerCase().includes(searchFilter.toLowerCase())) {
  //       filteredList.push(name);
  //     }
  //   }
  //   if (filteredList.length > 0) {
  //     fillContactList(filteredList);
  //   } else {
  //     fillContactList(contactList);
  //   }

  /**
   * This is another way. Make use of "filter"
   * function in javascript
   */
  var filteredList = contactList.filter(function (contact) {
    // the keyword "includes" is a short way to "indexOf"
    return contact.toLowerCase().includes(searchFilter.toLowerCase());
  });
  fillContactList(filteredList.sort());
}

search.addEventListener("input", handleOnInput);

function fillContactList(list) {
  listGroup.innerHTML = "";

  // We could add some logic here to also
  // take care of adding the capital letter.
  var currentLetter = "";

  for (const name of list) {
    console.log(name);
    var node = document.createElement("LI");
    node.classList.add("list-group-item");
    node.appendChild(document.createTextNode(name));
    listGroup.appendChild(node);
  }
}

fillContactList(contactList.sort());

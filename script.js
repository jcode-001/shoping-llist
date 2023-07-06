"use script";

const button = document.getElementById("button");
const ul = document.querySelector("ul");
const input = document.getElementById("input");


const addListAfterClick = () => {
  if (addinputlength() > 0) {
    liElement();
  }
};

const addinputlength = () => {
  return input.value.length;
};

const liElement = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  if (addinputlength() > 0) appendListElement(li);
};


const appendListElement = (liElem) => {
  ul.appendChild(liElem);
  liElem.classList.value = "li-list";
  input.value = "";
};


button.addEventListener("click", addListAfterClick);

const addlistAfterKeyPress = (event) => {
  if (addinputlength() > 0 && event.keyCode === 13) {
    liElement();
  }
};

input.addEventListener("keypress", addlistAfterKeyPress);

const buttonToClick = document.querySelector(".button");

function insertUserName(one, two) {
  const body = document.querySelector("body");
  const userName = document.createElement("p");
  userName.innerText = "kim";
  body.append(userName);
}

buttonToClick.addEventListener("click", () => insertUserName(1, 2));

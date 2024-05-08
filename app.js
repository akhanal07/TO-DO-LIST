let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  item.appendChild(deleteBtn);

  // Check if ul exists before appending
  if (ul) {
    ul.appendChild(item);
    ul.appendChild(document.createElement("br")); // Add line break
  } else {
    console.error("ul element not found");
  }

  inp.value = "";
});

ul.addEventListener("click", function(event) {
  if (event.target.nodeName === "BUTTON") {
    // Check if the parent element exists before removing
    if (event.target.parentElement) {
      let element = event.target.parentElement;
      element.style.textDecoration = "underline"; // Apply underline style
      element.remove();
    }
  } else if (event.target.nodeName === "LI") { // Check if clicked element is an li
    event.target.classList.toggle("underlined"); // Toggle underline on click
  }
});




// let Delbtns = document.querySelectorAll(".delete");
// for (Delbtn of Delbtns){
//     Delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//         console.log(par);
//     })
// }

function addTask() {
  const inputElem = document.getElementById("input");
  const ulElem = document.getElementById("tasks-list");

  if (inputElem.value === "") return;

  const deleteBtnElem = document.createElement("button");
  deleteBtnElem.innerText = "❌";
  deleteBtnElem.classList.add("btnAction");
  deleteBtnElem.onclick = () => liElem.remove();

  const doneBtnElem = document.createElement("button");
  doneBtnElem.innerText = "✅";
  doneBtnElem.classList.add("btnAction");
  doneBtnElem.onclick = () => {
    liElem.classList.toggle("completed");
  };

  const editBtnElem = document.createElement("button");
  editBtnElem.innerText = "🔨";
  editBtnElem.classList.add("btnAction");
  editBtnElem.onclick = () => {
      inputElem.value = liElem.firstChild.textContent;
      const btn = document.querySelector('button');
      btn.innerText = "Update";
      btn.onclick = () => {
          if (inputElem.value === "") return;
          liElem.firstChild.textContent = inputElem.value;
          inputElem.value = "";
          btn.innerText = "Add";
          btn.onclick = addTask;
      };
  };

  const liElem = document.createElement("li");

  liElem.innerText = inputElem.value;
  liElem.appendChild(editBtnElem);
  liElem.appendChild(deleteBtnElem);
  liElem.appendChild(doneBtnElem);

    ulElem.appendChild(liElem);
    inputElem.value = "";
}

function filter() {
    const searchInput = document.getElementById("search-input");
    const olElem      = document.querySelectorAll("ol#tasks-list li");
    const input       = searchInput.value;

    olElem.forEach((li) => {
        li.style.display = li.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    });

}
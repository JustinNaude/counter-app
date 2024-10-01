let counterEl = document.getElementById("counter-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1; // old version - count + 1
  counterEl.innerText = count;
}

function save() {
  console.log(count);
  saveEl.innerText += ` ${count} - `;
  count = 0;
  counterEl.textContent = count;
}

// += takes the old code and adds on to it

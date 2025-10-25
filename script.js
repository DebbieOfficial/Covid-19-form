let selectedRow = null;

function submitForm(event) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    // not editing, add new record
    insertNewRecord(formData);
  } else {
    // editing, update existing record
    updateRecord(formData);
  }
  reset();
}

function readFormData() {
  var formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["checkbox"] = document.getElementById("checkbox").checked
    ? "Yes"
    : "No";
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("table-list")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName + " " + data.lastName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.checkbox;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onclick="editRow(this)">Edit</button>`;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;
}

function editRow(td) {
  selectedRow = td.parentElement.parentElement; // get the row
  document.getElementById("firstName").value =
    selectedRow.cells[0].innerHTML.split(" ")[0];
  document.getElementById("lastName").value =
    selectedRow.cells[0].innerHTML.split(" ")[1];
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
  document.getElementById("checkbox").checked =
    selectedRow.cells[3].innerHTML === "Yes";

  document.getElementById("btn-submit").value = "Update";
  document.getElementById("btn-submit2").textContent = "Cancel";
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName + " " + formData.lastName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.gender;
  selectedRow.cells[3].innerHTML = formData.checkbox;
}
function deleteRow(btn) {
  if (confirm("Are you sure you want to delete this record?")) {
    var row = btn.parentElement.parentElement;
    row.remove();
  }
}
function clearForm() {
  reset();
}
function reset() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").selectedIndex = 0;
  document.getElementById("checkbox").checked = false;
  selectedRow = null;

  document.getElementById("btn-submit").value = "Submit";
  document.getElementById("btn-submit2").textContent = "Clear";
}

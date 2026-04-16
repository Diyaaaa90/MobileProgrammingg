function createUser() {
  const id = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  window.firebaseCreateUser(id, name, email);
}

function readUser() {
  window.firebaseReadUser();
}

function updateUser() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const email = document.getElementById("updateEmail").value;

  window.firebaseUpdateUser(id, { name, email });
}

function deleteUser() {
  const id = document.getElementById("deleteId").value;
  window.firebaseDeleteUser(id);
}
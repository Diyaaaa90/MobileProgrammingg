import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCM9wJ5com7t55mARo-mnMKJ78yyXJMTC8",
  authDomain: "mobile-programming-b8538.firebaseapp.com",
  projectId: "mobile-programming-b8538",
  storageBucket: "mobile-programming-b8538.firebasestorage.app",
  messagingSenderId: "629503992438",
  appId: "1:629503992438:web:e206f54a3022e3b7cb7557"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase connected");

// CREATE
function firebaseCreateUser(id, name, email) {
  if (!id || !name || !email) {
    alert("Fill all fields");
    return;
  }

  set(ref(db, 'users/' + id), {
    name,
    email
  })
  .then(() => alert("User created"))
  .catch(console.error);
}

// READ
function firebaseReadUser() {
  get(ref(db, 'users'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Users List:");
        snapshot.forEach((child) => {
          console.log(child.key, child.val());
        });
      } else {
        console.log("No data");
      }
    })
    .catch(console.error);
}

// UPDATE
function firebaseUpdateUser(id, data) {
  if (!id) {
    alert("Enter ID");
    return;
  }

  update(ref(db, 'users/' + id), data)
    .then(() => alert("User updated"))
    .catch(console.error);
}

// DELETE
function firebaseDeleteUser(id) {
  if (!id) {
    alert("Enter ID");
    return;
  }

  remove(ref(db, 'users/' + id))
    .then(() => alert("User deleted"))
    .catch(console.error);
}

    

// Make functions global so script.js can access them
window.firebaseCreateUser = firebaseCreateUser;
window.firebaseReadUser = firebaseReadUser;
window.firebaseUpdateUser = firebaseUpdateUser;
window.firebaseDeleteUser = firebaseDeleteUser;
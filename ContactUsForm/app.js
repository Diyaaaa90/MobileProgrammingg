import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mobile-programming-b8538.firebaseapp.com",
  databaseURL: "https://mobile-programming-b8538-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-b8538",
  storageBucket: "mobile-programming-b8538.firebasestorage.app",
  messagingSenderId: "629503992438",
  appId: "1:629503992438:web:e206f54a3022e3b7cb7557"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const reason = document.getElementById("reason").value;

  const contactRef = ref(db, "contacts");
  const newContact = push(contactRef);

  set(newContact, {
    firstName,
    lastName,
    email,
    phone,
    reason,
    timestamp: Date.now()
  })
  .then(() => {
    alert("Saved successfully!");
    this.reset();
  })
  .catch((error) => {
    console.error(error);
  });
});
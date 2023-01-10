const firebaseConfig = {
    apiKey: "AIzaSyCNzQX7Hh313VuQATCYWEla9G57mZMfSx8",
    authDomain: "ielts-coaching-db.firebaseapp.com",
    databaseURL: "https://ielts-coaching-db-default-rtdb.firebaseio.com",
    projectId: "ielts-coaching-db",
    storageBucket: "ielts-coaching-db.appspot.com",
    messagingSenderId: "829784358227",
    appId: "1:829784358227:web:49ca95c77e14618f45b5a6",
    measurementId: "G-BQKXLWCK5C"

  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var phone = getElementVal("phone");
  
    saveMessages(name, emailid, phone, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
//     location.reload();
  }
  
  const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      console.log("User is signed in.");
    } else {
      // No user is signed in.
      console.log("No user is signed in.");
      window.location="../index.html";
    }
});
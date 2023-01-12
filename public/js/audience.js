const form = document.querySelector( "#form" );

const test1 = document.querySelector("#test1");
const test2 = document.querySelector("#test2");
const test3 = document.querySelector("#test3");

const collection = "audience";

const db = firebase.firestore( );
const docRef = db.collection( collection ) ;


$(document).ready(function() {


  $("#next-button-1").click(function() {
    $("#step1").removeClass("active")
    $("#step2").addClass("active");
  });
  $("#next-button-2").click(function() {
    $("#step2").removeClass("active");
    $("#step3").addClass("active");
  });
  $("#prev-button-2").click(function() {
    $("#step2").removeClass("active");
    $("#step1").addClass("active");
  });

  $("#prev-button-3").click(function() {
    $("#step3").removeClass("active");
    $("#step2").addClass("active");
  });
});





  /** ADD RECORD */
  form.addEventListener( "submit" , ( e ) => {
    e.preventDefault() ;
    try {
      
      var audience = { 
          objective: test1.value,
          seed: test2.value,
          composition: test3.value
        };

      addRecord(collection, audience).then( ( ) => {
        location.reload();
      } ) ;

    } catch ( e ) {
      console.error( "Error adding document: " , e );
    }
  });
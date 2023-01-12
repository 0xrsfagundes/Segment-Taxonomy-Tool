$(document).ready(function() {
    $('#menu').append(`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Audience COE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="audience.html">Audience Builder</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="objective.html">Objective</a></li>
              <li><a class="dropdown-item" href="bu.html">Business Unit</a></li>
              <li><a class="dropdown-item" href="region.html">Region</a></li>
              <li><a class="dropdown-item" href="country.html">Country</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="btnLogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `);


  /** LOGOUT BUTTON SETUP */
  const logout = document.querySelector( "#btnLogout" );

  
  logout.addEventListener( "click" , ( e ) => {
    e.preventDefault() ;
    try {

      console.log("Logged out");
      firebase.auth().signOut().then(() => {
        window.location="../index.html";
      }).catch((error) => {
        console.error( "Error adding document: " , e );
      });

    } catch ( e ) {
      console.error( "Error adding document: " , e );
    }
  });


});



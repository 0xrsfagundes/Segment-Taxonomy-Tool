
  const form = document.querySelector( "#form" );
  const countryField = document.querySelector( "#country" );
  const outputDiv = document.querySelector( "#output" );
  const docRef = db.collection( "country" ) ;


  /** PAGE LOAD*/
  $(document).ready(function(){
    try {
        var tbody = $('tbody')
        docRef.get( ).then( ( querySnapshot ) => {
        querySnapshot.forEach( ( doc ) => {
            let data = doc.data( );
            tbody.append(`\
            <tr>\
            <td class="id">${doc.id}</td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.country}' readonly></td>\
            <td>\
            <button class="btn edit" id="edit${doc.id}">Edit</button>\
            <button class="btn" id="delete">Delete</button>\
            </td>\
            </tr>\
            `);
        });
    });
      } catch ( e ) {
        console.error( "Error adding document: " , e ) ;
      }

  });


  /** ADD RECORD */
  form.addEventListener( "submit" , ( e ) => {
    e.preventDefault() ;
    try {
      
        var dataObject = { country: countryField.value };

        addRecord("country", dataObject).then( ( ) => {
            countryField.style.display = "none" ;
            form.style.display = "none" ;
          document.querySelector('label').style.display = "none" ;
          document.querySelector('form').style.display = "none" ;
          location.reload();
        } ) ;

    } catch ( e ) {
      console.error( "Error adding document: " , e );
    }
  });


  /** DELETE RECORD */
  $('table').on('click', '#delete', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    deleteRecord("country", id).then( () => {
        location.reload();
    }); 
  });


  /** EDIT RECORD */
  $('table').on('click', '.edit', function() {

    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    $('#'+id).attr("readonly", false);
    $("#edit"+id).html('Update');
    $("#edit"+id).addClass('update').removeClass('edit');
    $("#edit"+id).prop('id', 'update'+id);

  });

  $('table').on('click', '.update', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    var name = $('#'+id).val();
    $('#'+id).attr("readonly", false);
    $('#'+id).attr("readonly", true);
    $("#update"+id).html('Edit');
    $("#update"+id).addClass('edit').removeClass('update');
    $("#update"+id).prop('id', 'edit'+id);
    updateRecord("country", id, name);
  });


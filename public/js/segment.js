
  const form = document.querySelector( "#form" );

  const objectiveField = document.querySelector( "#objective" );
  const seedField = document.querySelector( "#seed" );
  const audienceField = document.querySelector( "#audience" );
  const countryField = document.querySelector( "#country" );
  const buField = document.querySelector( "#BU" );
  const typeField = document.querySelector( "#type" );
  const sourceField = document.querySelector( "#source" );

  const collection = "Segment";
  const docRef = db.collection( collection );


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
            <!--<td><input type="text" class="form-control" id='${doc.id}' value='${data.objective}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.seed}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.audience}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.country}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.bu}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.type}' readonly></td>\
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.source}' readonly></td>\-->
            <td><input type="text" class="form-control" id='${doc.id}' value='${data.segmentName}' readonly></td>\
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


      const docRef1 = db.collection( "country" );
      docRef1.get( ).then( ( querySnapshot ) => {
        querySnapshot.forEach( ( doc ) => {
          let data = doc.data( );
          countryField.append(new Option(data.country,doc.id)); 
        });
      });

      const docRef2 = db.collection( "BU" );
      docRef2.get( ).then( ( querySnapshot ) => {
        querySnapshot.forEach( ( doc ) => {
          let data = doc.data( );
          buField.append(new Option(data.bu,doc.id)); 
        });
      });

  });


  /** ADD RECORD */
  form.addEventListener( "submit" , ( e ) => {
    e.preventDefault() ;
    try {

      var strSegmentName = [objectiveField.value, seedField.value,audienceField.value,countryField.value,buField.value,typeField.value,sourceField.value].join('_');
        
        var dataObject = { 
          objective: objectiveField.value,
          seed: seedField.value,
          audience: audienceField.value,
          country: countryField.value,
          bu: buField.value,
          type: typeField.value,
          source: sourceField.value,
          segmentName: strSegmentName
         };

        addRecord(collection, dataObject).then( ( ) => {
          buField.style.display = "none" ;
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
    deleteRecord(collection, id).then( () => {
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
    updateRecord(collection, id, name);
  });


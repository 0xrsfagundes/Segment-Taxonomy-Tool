function addRecord(collection, dataObject) {
    console.log(collection, dataObject);
    const docRef = db.collection(collection);
    return docRef.add(dataObject);
  }

  function updateRecord(collection, dataObject) {
    console.log(collection, dataObject);
    const docRef = db.collection(collection);
    return docRef.doc(dataObject.id).update(dataObject);
  }

  function deleteRecord(collection, id) {
    console.log(collection, id);
    const docRef = db.collection(collection);
    return docRef.doc(id).delete();
  }

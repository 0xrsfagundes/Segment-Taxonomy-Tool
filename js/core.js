function addRecord(collection, dataObject) {
    console.log(collection, dataObject);
    const docRef = db.collection(collection);
    return docRef.add(dataObject);
  }

  function updateRecord(collection, id, name) {
    console.log(collection,id, name);
    const docRef = db.collection(collection);
    return docRef.doc(id).update({country: name});
  }

  function deleteRecord(collection, id) {
    console.log(collection, id);
    const docRef = db.collection(collection);
    return docRef.doc(id).delete();
  }
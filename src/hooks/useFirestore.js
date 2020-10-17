import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//creating hook
const useFirestore = (collection) => {
  //setting up state for collection
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //active listener to update wehn new image is uploaded
    const unsub = projectFirestore
      .collection(collection)
      //using method to organize data by newest created
      .orderBy("createdAt", "desc")
      //method that fires callback function
      //takes a snapshot of all docs at that time
      .onSnapshot((snap) => {
        let documents = [];
        //cycling through documents
        snap.forEach((doc) => {
          //pushing that data object into the empty array with all key value pairs

          documents.push({ ...doc.data(), id: doc.id });
        });
        //updating state with the doc
        setDocs(documents);
      });

    //unmounts using a cleanup function(unsubscribes from the collection when we dont need it anymore)
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;

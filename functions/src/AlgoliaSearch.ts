import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import algoliasearch from "algoliasearch";
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_INDEX_NAME = "datzpress";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
admin.initializeApp();
const firestore = admin.firestore();
const AlgoliaSearch = functions
  .region("asia-northeast3")
  .firestore.document("{collectionId}/{documentId}")
  .onWrite(async (change, context) => {
    const { documentId, collectionId } = context.params;
    switch (collectionId) {
      case "publication":
      case "artist":
      case "exhibition":
      case "event":
        // case "news":
        break;
      default:
        return null;
    }
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    const objectID = `${collectionId}-${documentId}`;
    if (change.after.exists) {
      const data = change.after.data();
      if (!data) return new Error("no data");
      if (data.public === false) return; // private post
      // Add an 'objectID' field which Algolia requires
      data.objectID = objectID;
      data.collection = collectionId;
      data.address = documentId;
      return index.saveObject(data);
    } else {
      const field = `rel_${collectionId}s`;
      const prom1 = ["publication", "artist", "exhibition", "event"].map(
        (col) =>
          firestore
            .collection(col)
            .where(field, "array-contains", documentId)
            .get()
            .then((snapshot) =>
              snapshot.docs.map((doc) =>
                doc.ref
                  .update(
                    field,
                    admin.firestore.FieldValue.arrayRemove(documentId)
                  )
                  .then((_) => `${col}/${doc.id}`)
              )
            )
      );
      const prom2 = await Promise.all(prom1);
      const prom3 = prom2.reduce((acc, val) => acc.concat(val), []);
      const updated = await Promise.all(prom3);
      console.log({ objectID, updated });
      return index.deleteObject(objectID);
    }
  });

export default AlgoliaSearch;

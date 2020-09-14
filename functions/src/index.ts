import * as functions from "firebase-functions";
import algoliasearch from "algoliasearch";
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_INDEX_NAME = "datzpress";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
exports.onWrite = functions
  .region("asia-northeast3")
  .firestore.document("{collectionId}/{documentId}")
  .onWrite((change, context) => {
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
    if (change.after.exists) {
      const data = change.after.data();
      if (!data) return new Error("no data");
      // Add an 'objectID' field which Algolia requires
      data.objectID = documentId;
      data.collection = collectionId;
      return index.saveObject(data);
    } else {
      return index.deleteObject(documentId);
    }
  });

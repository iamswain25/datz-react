import * as functions from "firebase-functions";
import * as firestore from "@google-cloud/firestore";
const client = new firestore.v1.FirestoreAdminClient();

// Replace BUCKET_NAME
const bucket = "gs://datzpress1.appspot.com/backup/";
const scheduledBackup = functions
  .region("asia-northeast3")
  .pubsub.schedule("every monday 05:00")
  .onRun(async () => {
    const projectId =
      process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT || "";
    const databaseName = client.databasePath(projectId, "(default)");

    return client
      .exportDocuments({
        name: databaseName,
        outputUriPrefix: bucket + firestore.Timestamp.now(),
        // Leave collectionIds empty to export all collections
        // or set to a list of collection IDs to export,
        // collectionIds: ['users', 'posts']
        collectionIds: [],
      })
      .then((responses: any) => {
        const response = responses[0];
        console.log(`Operation Name: ${response["name"]}`);
      })
      .catch((err: Error) => {
        console.error(err);
        throw new Error("Export operation failed");
      });
  });
export default scheduledBackup;

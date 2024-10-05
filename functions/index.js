/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
// const logger = require("firebase-functions/logger");

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
    cors(req, res, async () => {
      try{
        const booksCollection = admin.firestore().collection("books");
        const snapshot = await booksCollection.get();
        const count = snapshot.size;
  
        res.status(200).send({count})
      } catch (error) {
        console.error("Error counting books:",error.message);
        res.status(500).send("Error counting books")
      }
    });
  });

  exports.addBooks = onRequest((req, res) => {
    cors(req, res, async () => {
      try{
        const {isbn,name} = req.body

        await admin.firestore().collection("books").add({isbn:isbn.toUpperCase(),name:name.toUpperCase()});
        // const snapshot = await booksCollection.get();
        // const count = snapshot.size;
  
        res.status(200).send("successful!")
      } catch (error) {
        console.error("Error add book:",error.message);
        res.status(500).send("Error add book")
      }
    });
  });

  exports.getAllBooks = onRequest((req, res) => {
    cors(req, res, async () => {
      try{

        const booksCollection = admin.firestore().collection("books");
        const snapshot = await booksCollection.get();
        const books = snapshot.docs.map(doc => ({
            id: doc.id,  // 包含文档的自动生成ID
            isbn: doc.data().isbn,
            name: doc.data().name
          }));
  
        res.status(200).send({books})
      } catch (error) {
        console.error("Error get all book:",error.message);
        res.status(500).send("Error get all book")
      }
    });
  });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

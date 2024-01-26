import { MongoClient, ServerApiVersion } from 'mongodb';
import express from "express";

const app = express();
app.use(express.json());

const uri = "mongodb+srv://eivindholvik:asdf1234@test.g1hias5.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("my app")
});

app.get("/user", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("lectureTest");
    const users = database.collection("users");
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Missing name" });
    }
    const query = { name: name };
    const options = {};
    const user = await users.findOne(query, options);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.send(user);
  } catch (e) {
    res.json(e);
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
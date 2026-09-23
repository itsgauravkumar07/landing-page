import dotenv from "dotenv";
dotenv.config();

import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// Vercel calls this function on every request instead of running a
// persistent server. We make sure the DB connection is ready, then let
// the existing Express app handle the request exactly as it does locally.
let dbReady;

export default async function handler(req, res) {
  if (!dbReady) {
    dbReady = connectDB();
  }
  await dbReady;
  return app(req, res);
}
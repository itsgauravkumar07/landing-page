import mongoose from "mongoose";

// Serverless functions can be invoked many times against the same warm
// instance, so we cache the connection instead of reconnecting on every
// request (which would exhaust MongoDB's connection limit fast).
let cachedConnection = null;

export async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set in the environment");
  }

  mongoose.set("strictQuery", true);

  cachedConnection = await mongoose.connect(uri);
  console.log("MongoDB connected:", mongoose.connection.host);
  return cachedConnection;
}

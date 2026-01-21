"use server";
import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  const mongoUrl = process.env.MONGODB_URL;
  console.log("Attempting to connect to MongoDB...");

  if (!mongoUrl) {
    throw new Error("MONGODB_URL environment variable is not set");
  }

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(mongoUrl, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    isConnected = false;
    console.error(
      "MongoDB connection error:",
      error instanceof Error ? error.message : error,
    );
    throw error; // Re-throw to handle upstream
  }
};

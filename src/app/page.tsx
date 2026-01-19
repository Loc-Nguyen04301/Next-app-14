import { connectToDatabase } from "@/libs/mongoose";

export default function Home() {
  const connect = connectToDatabase()

  return <div>Homepage</div>;
}

import mongoose from "mongoose";

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_DATABASE_PASSWORD;
const dbName = process.env.MONGODB_USER;
const dbPort = process.env.MONGODB_PORT;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb://${dbUser}:${dbPassword}@127.0.0.1:${dbPort}/${dbName}`
  );
}

//'mongodb://user:password@127.0.0.1:27017/test'

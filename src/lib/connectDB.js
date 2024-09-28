import { MongoClient } from "mongodb";
// const{username,password} = process.env;

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        // const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.sirqfba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('PlenoraDB')
        return db;
    } catch (error) {
        console.log(error);
    }
};
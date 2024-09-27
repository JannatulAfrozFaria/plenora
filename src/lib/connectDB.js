let db;
export const connectDB = async()=>{
    if(db) return db;
    try {
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
    } catch (error) {
        console.log(error);
    }
}
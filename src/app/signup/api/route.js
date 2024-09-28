import { connectDB } from "@/lib/connectDB";

export const POST = async(request) => {
const newUser = await request.json();
try {
    const db = await connectDB();
    const userCollection = db.collection('users')
    const exist = await userCollection.findOne({email:newUser.email})
    if(exist){
        return Response.json({message: "User Existes"}, {status: 304})
    }
    const response = await userCollection.insertOne(newUser)
    return Response.json({message: "User Created Successfully!"},{status:200})
} catch (error) {
    return Response.json({message: "Something went Wrong", error},{status:500})
}
}
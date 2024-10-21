import mongoose from "mongoose";

export function dbConnection() { 
    mongoose.connect("mongodb://localhost:27017/Messaging-app").then(
        () => { console.log("Database connected successfully"); },
    )
    .catch(err => console.log(err));

}


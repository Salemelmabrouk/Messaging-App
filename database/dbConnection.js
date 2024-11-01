import mongoose from "mongoose";

export function dbConnection() { 
    mongoose.connect(process.env.DB_URL ).then(
        () => { console.log("Database connected successfully"); },
    )
    .catch(err => console.log(err));

}


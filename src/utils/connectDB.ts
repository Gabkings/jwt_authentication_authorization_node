import mongoose from 'mongoose';
import customUtil from '../config/custom-environment-variables'
require('dotenv').config();

// const dbUrl = `mongodb://${customUtil.dbName}:${customUtil.dbPass}@localhost:6000/jwtAuth?authSource=admin`;
const dbUrl = `mongodb://${customUtil.dbName}:${customUtil.dbPass}@localhost:6000/jwtAuth?authSource=admin`;

// const connectDB = async () => {
//     mongoose.connect(dbUrl)
//         .then(() => {
//           console.log('Connected to database !!');
//         })
//         .catch((err)=>{
//           console.log('Connection failed !!'+ err.message);
//         });
// };


const connectDB = async () => {

    let url = "mongodb://localhost:6000/jwtAuth";

    try {
        let client = await mongoose.connect( url, {
            authSource: "admin",
            user: "codevoweb",
            pass: "password123", 
        } );

        console.log( "Database is connected!" );
    } catch ( error ) {
        console.log( error );
        process.exit( 1 );
    }

}


export default connectDB;


import * as mongoose from 'mongoose';

export const TeaSchema = new mongoose.Schema({
    id:Number,
    name:String!,
    origin:String,
    description:String,
    category:String
});
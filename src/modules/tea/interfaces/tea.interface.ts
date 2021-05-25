import { Document } from 'mongoose';

export interface Tea extends Document {
    readonly id:number,
    readonly name:string,
    readonly origin:string|null,
    readonly description:string|null,
    readonly category:string|null  
}
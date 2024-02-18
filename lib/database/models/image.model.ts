import { Document, Schema, model, models } from "mongoose";


export interface IImage extends Document {
    title: string;
    transformationType: string;
    pubicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }; 
    createdAt: Date;
    updatedAt: Date;
}


const ImageSchema = new Schema({
    title:{type:String,required:true},
    transformationType:{type:String,required:true},
    pubicId:{type:String,required:true},
    secureUrl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:String},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User',required:true},
    createdAt:{type:Date,required:true},
    updatedAt:{type:Date,required:true},

})

const Image = models.Image || model('Image',ImageSchema)

export default Image
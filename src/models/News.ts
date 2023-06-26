import mongoose, { Schema, model, Model } from "mongoose";
import { DataNewsResponse } from "../interface";

const NewsSchema = new Schema({
    author     : { type: String },
    title      : { type: String, required: true },
    description: { type: String, required: true },
    url        : { type: String, required: true },
    source     : { type: String, required: true },
    image      : { type: String },
    category   : {
        type: String,
        enum: {
            values  : ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'],
            message : '{VALUE} is not supported',
            default : 'general',
            required: true,
        }
    },
    language: {
        type: String,
        enum: {
            values  : ['es', 'ar', 'de', 'en', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'zh'],
            message : '{VALUE} is not supported',
            default : 'es',
            required: true,
        }
    },
    country: { type: String, required: true },
    published_at: { type: String, required: true },
},
    {
        timestamps: true,
    }
)

// const News = Model<DataNewsResponse> = mongoose.models.News || model('News', NewsSchema);

const News = mongoose.models.News || mongoose.model<DataNewsResponse>('News', NewsSchema);

export default News;

import { newsApi } from "../baseURL";
import { News } from '../models';
import { NewsResponse } from "../interface";
import { Types } from "mongoose";

interface args {
  _id: Types.ObjectId;
}

export const resolvers = {
  Query: {
    hello: () => 'Hello World!!!',
    getNews: async () => await News.find(),
    getNewsById: async (_: any, { _id }: args) => await News.findById(_id),

  },

  Mutation: {
    importNewsFromApi: async () => {
      try {

        const response = await newsApi.get<NewsResponse>('/news')

        const articles = response.data.data;

        const news = articles.map((article) => new News({
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          source: article.source,
          image: article.image,
          category: article.category,
          language: article.language,
          country: article.country,
          published_at: article.published_at
        }));

        await News.insertMany(news);

        return JSON.stringify({ success: true, message: 'News imported successfully.' });
      
      } catch (error) {
       
        console.error(error);
       
        return { success: false, message: 'Failed to import news.' };
      }
    }
  }
}


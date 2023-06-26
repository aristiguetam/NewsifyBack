
export interface NewsResponse {
    pagination: Pagination;
    data: DataNewsResponse[];
}

export interface DataNewsResponse {
    id: string;
    author: null | string;
    title: string;
    description: string;
    url: string;
    source: string;
    image: null | string;
    category: Category;
    language: Language;
    country: string;
    published_at: string;
    createdAt?: string;
    updatedAt?: string;
}

export enum Category {
    General = "general",
    Business = "business",
    Entertainment = "entertainment",
    Health = "health",
    Science = "science",
    Sports = "sports",
    Technology = "technology",
}

export enum Language {
    Es = "es",
    Ar = "ar",
    De = "de",
    En = "en",
    Fr = "fr",
    He = "he",
    It = "it",
    Nl = 'nl',
    No = 'no',
    Pt = 'pt',
    Ru = 'ru',
    Se = 'se',
    Zh = 'zh',
}

export interface Pagination {
    limit: number;
    offset: number;
    count: number;
    total: number;
}

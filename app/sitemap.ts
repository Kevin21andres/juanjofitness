import type {MetadataRoute} from "next";
import {getPublishedBlogPosts} from "@/lib/current-posts";
export const dynamic = "force-dynamic";
const base="https://juanjofitness.com";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const fixed:MetadataRoute.Sitemap=["/","/blog","/legal","/privacy","/cookies"].map(path=>({url:base+path,changeFrequency:"monthly",priority:path==="/"?1:0.5}));
 const blog:MetadataRoute.Sitemap=(await getPublishedBlogPosts()).map(p=>({url:base+"/blog/"+p.slug,lastModified:new Date(p.updatedAt),changeFrequency:"monthly",priority:0.7}));
 return [...fixed,...blog];
}

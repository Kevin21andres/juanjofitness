import type {MetadataRoute} from "next";
import {publishedPosts} from "@/lib/posts";
const base="https://juanjofitness.com";
export default function sitemap():MetadataRoute.Sitemap{
 const fixed:MetadataRoute.Sitemap=["/","/blog","/legal","/privacy","/cookies"].map(path=>({url:base+path,changeFrequency:"monthly",priority:path==="/"?1:0.5}));
 const blog:MetadataRoute.Sitemap=publishedPosts().map(p=>({url:base+"/blog/"+p.slug,lastModified:new Date(p.updatedAt),changeFrequency:"monthly",priority:0.7}));
 return [...fixed,...blog];
}

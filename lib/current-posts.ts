import "server-only";
import {unstable_cache} from "next/cache";
import {allPosts} from "./posts";
import {listRemotePosts} from "./github-cms";
import type {BlogPost} from "./blog-types";

// Avoid repeated calls to GitHub on the public production website.
const cachedPosts = unstable_cache(async () => listRemotePosts(), ["jjhp-blog-posts"], {revalidate:30});

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO) return allPosts();
  try {
    return process.env.NODE_ENV === "development" ? await listRemotePosts() : await cachedPosts();
  } catch (error) {
    console.error("GitHub blog temporarily unavailable; using bundled posts:", error);
    return allPosts();
  }
}
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return (await getBlogPosts()).filter(post => post.status === "published");
}

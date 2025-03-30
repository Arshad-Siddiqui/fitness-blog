import fs from 'fs';
import path from 'path';

type Post = { filename: string, title: string, date: string, category: string }

// postsDirectory is the absolute path to /contents
const postsDirectory = path.join(process.cwd(), '/content');

export default function getPosts(): Post[] {
  // Gets all file names from that directory
  const filenames = fs.readdirSync(postsDirectory);

  // Returns an array of objects containing metadata of file
  return filenames.map((filename) => {
    const module = require(`../../../content/${filename}`); // Dynamically import
    
    if (!module.title || !module.date || !module.contentType) {
      console.log(`Missing title, date or content type in file: ${filename}`);
    }

    return {
      filename,
      slug: filename.replace(".mdx", ""),
      title: module.title, // Metadata
      date: module.date,
      category: module.category
    };
  });
}

export function filterPosts(posts:Post[], category: string): Post[] {
  return posts.filter(post => post.category = category)
}
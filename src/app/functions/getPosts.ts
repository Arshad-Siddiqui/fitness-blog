import fs from 'fs';
import path from 'path';

// postsDirectory is the absolute path to /contents
const postsDirectory = path.join(process.cwd(), '/content');

export default function getPosts() {
  // Gets all file names from that directory
  const filenames = fs.readdirSync(postsDirectory);

  // Returns an array of objects containing metadata of file
  return filenames.map((filename) => {
    const module = require(`../../../content/${filename}`); // Dynamically import
    
    if (!module.title || !module.date) {
      console.log(`Missing title or date in file: ${filename}`);
    }

    return {
      filename,
      slug: filename.replace(".mdx", ""),
      title: module.title, // Metadata
      date: module.date,
    };
  });
}
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), '/content');

export function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const module = require(`../../content/${filename}`); // Dynamically import
    return {
      filename,
      title: module.title, // Metadata
      date: module.date,
    };
  });
}

console.log(getPosts());

import algoliasearch from 'algoliasearch';
import { config } from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables from .env.local
config({ path: '.env.local' });

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.ALGOLIA_ADMIN_KEY || '' // Note: This is different from the search key
);

const index = client.initIndex('content');

// Function to read and parse markdown files
const getContentFromDirectory = (dir: string) => {
  const items: any[] = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith('.mdx') || file.endsWith('.md')) {
      const fullPath = path.join(dir, file);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const slug = path.basename(file, path.extname(file));
      
      // Basic frontmatter parsing (you might want to use a proper MDX parser)
      const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1].split('\n').reduce((acc: any, line) => {
        const [key, ...value] = line.split(':');
        if (key && value.length) {
          acc[key.trim()] = value.join(':').trim();
        }
        return acc;
      }, {}) : {};

      items.push({
        objectID: slug,
        slug,
        title: frontmatter.title || slug,
        description: frontmatter.description || '',
        content: content.replace(/---\n[\s\S]*?\n---/, '').trim(), // Remove frontmatter
        type: dir.includes('blog') ? 'blog' : 'project',
        ...frontmatter
      });
    }
  });

  return items;
};

async function uploadToAlgolia() {
  try {
    // Get content from both blog and projects directories
    const blogPosts = getContentFromDirectory(path.join(process.cwd(), 'src/content/blog'));
    const projects = getContentFromDirectory(path.join(process.cwd(), 'src/content/projects'));
    
    const allContent = [...blogPosts, ...projects];

    // Upload to Algolia
    await index.saveObjects(allContent);
    console.log(`📚 Uploaded ${allContent.length} items to Algolia`);
  } catch (error) {
    console.error('Error uploading to Algolia:', error);
    process.exit(1);
  }
}

// Configure index settings
async function configureIndex() {
  try {
    await index.setSettings({
      searchableAttributes: [
        'title',
        'description',
        'content'
      ],
      attributesForFaceting: ['type'],
      customRanking: ['desc(date)']
    });
    console.log('✅ Index settings configured');
  } catch (error) {
    console.error('Error configuring index:', error);
    process.exit(1);
  }
}

// Run the upload
async function main() {
  await configureIndex();
  await uploadToAlgolia();
}

main();

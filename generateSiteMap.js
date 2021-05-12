const fetch = require('cross-fetch');
const fs = require('fs');
const globby = require('globby');
const _ = require('lodash');

const parsePlatformNameForUrl = (platformName) =>
  _.toLower(platformName).replace(' ', '_');
async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[id].tsx',
    '!pages/api',
  ]);

  const res = await fetch(
    'https://sidehustlestack-web.vercel.app/api/graphql',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
    query {
      allPlatforms {
        name
      }
    }
    `,
      }),
    }
  );

  const json = await res.json();
  const platforms = json.data.allPlatforms;
  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page
      .replace('pages', '')
      .replace('.js', '')
      .replace('.md', '');
    const route = path === '/index' ? '' : path;
    return `
            <url>
                <loc>${`https://sidehustlestack.co${route}`}</loc>
                <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
            </url>
        `;
  })
  .join('')}
  
  ${platforms.map(
    ({ name }) => `
                <url>
                <loc>${`https://sidehustlestack.co/${parsePlatformNameForUrl(
                  name
                )}`}</loc>
                <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
            </url>`
  )}
</urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();

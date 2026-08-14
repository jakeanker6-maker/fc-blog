# SEO and AEO Optimization Design for FC Blog

## Overview
Optimize two existing blog pages for search engine optimization (SEO) and answer engine optimization (AEO). The goal is to improve organic traffic, voice search visibility, and featured snippet opportunities while maintaining the existing static HTML structure and design.

## Constraints
- Static HTML only (no server-side changes)
- Maintain existing visual design
- Follow Fast Company style patterns
- No external dependencies
- Manual HTML editing approach

## Design Sections

### 1. Basic SEO Meta Tags
Add the following to each blog page's `<head>` section after the viewport meta tag:

- **Title tag:** `[Article Title] | Fast Company`
- **Meta description:** Concise summary (150-160 characters)
- **Canonical URL:** `https://fastcompany.business/blogs/alt/[category]/[slug]`
- **Open Graph tags:** og:title, og:description, og:type (article), og:url, og:image, og:site_name
- **Twitter card tags:** twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image

### 2. Structured Data (JSON-LD)
Add Article schema in JSON-LD format to each page's `<head>` section:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "[Article Title]",
  "description": "[Meta description]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "url": "[Author URL]"
  },
  "datePublished": "[Publication Date]",
  "image": "[Featured Image URL]",
  "publisher": {
    "@type": "Organization",
    "name": "Fast Company",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fastcompany.business/_public/fc_logo_black.svg"
    }
  },
  "mainEntityOfPage": "[Canonical URL]"
}
```

### 3. Sitemap and Robots.txt
Create at project root:

**sitemap.xml:**
- Include both blog pages and index page
- Set priority: 0.5 for all pages
- Set change frequency: "monthly" for blog pages
- No `<lastmod>` dates

**robots.txt:**
- Allow all user agents
- Include sitemap location: `Sitemap: https://fastcompany.business/sitemap.xml`

## Implementation Plan

### Files to Modify
1. `blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html`
2. `blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html`

### Files to Create
1. `sitemap.xml`
2. `robots.txt`

### Specific Changes
For each blog page:
1. Extract article metadata from existing HTML:
   - Title from article content or page structure
   - Author from byline element
   - Description from first paragraph (truncate to 150-160 characters)
   - Image from existing img tags (use first large image or og:image if present)
   - Publication date from article content or use current date
2. Insert SEO meta tags after viewport meta tag:
   - Title tag, meta description, canonical URL
   - Open Graph tags, Twitter card tags
3. Add JSON-LD structured data before closing `</head>` tag with extracted metadata

### Content Extraction
Each article's metadata will be extracted from the existing HTML content:

**Article 1 (Clean Energy):**
- Title: "Global Clean Energy Initiative Breaks Ground" (from page content)
- Author: Adi Robertson (from byline)
- Category: Technology (from URL path)
- Description: First sentence of article content (will be truncated to 150-160 characters)
- Image: Will extract featured image URL from existing img tags or og:image if present
- Publication Date: Will extract from article content or use current date if not found

**Article 2 (Financial Responsibility):**
- Title: "Why Financial Responsibility Matters for Retirees" (from page content)
- Author: Dris Webb (from byline)
- Category: Investing (from URL path)
- Description: First sentence of article content (will be truncated to 150-160 characters)
- Image: Will extract featured image URL from existing img tags or og:image if present
- Publication Date: Will extract from article content or use current date if not found

## Success Criteria
- Both pages have complete SEO meta tags
- JSON-LD structured data validates with Google's Rich Results Test
- sitemap.xml includes all pages with correct URLs
- robots.txt properly references sitemap
- No visual changes to the site
- All changes maintain existing design integrity

## Testing
1. Validate HTML structure after changes
2. Test JSON-LD with Google's Structured Data Testing Tool
3. Verify sitemap.xml is well-formed
4. Check that all URLs are correctly formatted
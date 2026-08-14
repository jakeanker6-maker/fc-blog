# SEO and AEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize two blog pages for SEO and AEO by adding meta tags, structured data, sitemap, and robots.txt.

**Architecture:** Manual HTML editing of existing static files. Add SEO meta tags and JSON-LD structured data to each page's `<head>` section. Create sitemap.xml and robots.txt at project root.

**Tech Stack:** Static HTML, JSON-LD, XML, plain text.

---

## File Structure

**Modified Files:**
- `blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html`
- `blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html`

**Created Files:**
- `sitemap.xml`
- `robots.txt`

---

## Task 1: Extract Metadata from Article 1 (Clean Energy)

**Files:**
- Read: `blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html`

- [ ] **Step 1: Open the HTML file and locate the article title**

  Open the file and search for the article title. It's likely within an `<h1>` tag or similar. Extract the exact text.

- [ ] **Step 2: Locate the author byline**

  Find the author name "Adi Robertson" in the HTML. Note the surrounding HTML structure.

- [ ] **Step 3: Extract the first paragraph for meta description**

  Find the first `<p>` tag with article content. Copy the first sentence, truncate to 150-160 characters if needed.

- [ ] **Step 4: Locate the featured image**

  Find the first large image in the article (likely an `<img>` tag). Extract the `src` attribute.

- [ ] **Step 5: Determine publication date**

  Look for any date in the article content or metadata. If not found, use current date.

---

## Task 2: Insert SEO Meta Tags into Article 1

**Files:**
- Modify: `blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html`

- [ ] **Step 1: Locate the insertion point**

  Find the string: `<meta name="viewport" content="width=device-width, initial-scale=1"/>`

- [ ] **Step 2: Insert title tag**

  After the viewport meta tag, insert:
  ```html
  <title>Global Clean Energy Initiative Breaks Ground | Fast Company</title>
  ```

- [ ] **Step 3: Insert meta description**

  After the title tag, insert:
  ```html
  <meta name="description" content="[First sentence of article, truncated to 150-160 characters]"/>
  ```

- [ ] **Step 4: Insert canonical URL**

  After meta description, insert:
  ```html
  <link rel="canonical" href="https://fastcompany.business/blogs/alt/technology/global-clean-energy-initiative-breaks-ground"/>
  ```

- [ ] **Step 5: Insert Open Graph tags**

  After canonical URL, insert:
  ```html
  <meta property="og:title" content="Global Clean Energy Initiative Breaks Ground"/>
  <meta property="og:description" content="[Same as meta description]"/>
  <meta property="og:type" content="article"/>
  <meta property="og:url" content="https://fastcompany.business/blogs/alt/technology/global-clean-energy-initiative-breaks-ground"/>
  <meta property="og:image" content="[Featured image URL]"/>
  <meta property="og:site_name" content="Fast Company"/>
  ```

- [ ] **Step 6: Insert Twitter card tags**

  After Open Graph tags, insert:
  ```html
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Global Clean Energy Initiative Breaks Ground"/>
  <meta name="twitter:description" content="[Same as meta description]"/>
  <meta name="twitter:image" content="[Featured image URL]"/>
  ```

---

## Task 3: Insert JSON-LD Structured Data into Article 1

**Files:**
- Modify: `blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html`

- [ ] **Step 1: Locate the closing head tag**

  Find the string: `</head>`

- [ ] **Step 2: Insert JSON-LD script**

  Before the closing `</head>` tag, insert:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Global Clean Energy Initiative Breaks Ground",
    "description": "[Same as meta description]",
    "author": {
      "@type": "Person",
      "name": "Adi Robertson",
      "url": "https://www.fastcompany.com/user/adirobertson"
    },
    "datePublished": "[Publication date]",
    "image": "[Featured image URL]",
    "publisher": {
      "@type": "Organization",
      "name": "Fast Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastcompany.business/_public/fc_logo_black.svg"
      }
    },
    "mainEntityOfPage": "https://fastcompany.business/blogs/alt/technology/global-clean-energy-initiative-breaks-ground"
  }
  </script>
  ```

---

## Task 4: Extract Metadata from Article 2 (Financial Responsibility)

**Files:**
- Read: `blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html`

- [ ] **Step 1: Open the HTML file and locate the article title**

  Search for the article title within an `<h1>` tag or similar.

- [ ] **Step 2: Locate the author byline**

  Find the author name "Dris Webb" in the HTML.

- [ ] **Step 3: Extract the first paragraph for meta description**

  Find the first `<p>` tag with article content. Copy the first sentence.

- [ ] **Step 4: Locate the featured image**

  Find the first large image in the article.

- [ ] **Step 5: Determine publication date**

  Look for any date in the article content or metadata.

---

## Task 5: Insert SEO Meta Tags into Article 2

**Files:**
- Modify: `blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html`

- [ ] **Step 1: Locate the insertion point**

  Find the string: `<meta name="viewport" content="width=device-width, initial-scale=1"/>`

- [ ] **Step 2: Insert title tag**

  After the viewport meta tag, insert:
  ```html
  <title>Why Financial Responsibility Matters for Retirees | Fast Company</title>
  ```

- [ ] **Step 3: Insert meta description**

  After the title tag, insert:
  ```html
  <meta name="description" content="[First sentence of article, truncated to 150-160 characters]"/>
  ```

- [ ] **Step 4: Insert canonical URL**

  After meta description, insert:
  ```html
  <link rel="canonical" href="https://fastcompany.business/blogs/alt/investing/why-financial-responsibility-matters-for-retirees"/>
  ```

- [ ] **Step 5: Insert Open Graph tags**

  After canonical URL, insert:
  ```html
  <meta property="og:title" content="Why Financial Responsibility Matters for Retirees"/>
  <meta property="og:description" content="[Same as meta description]"/>
  <meta property="og:type" content="article"/>
  <meta property="og:url" content="https://fastcompany.business/blogs/alt/investing/why-financial-responsibility-matters-for-retirees"/>
  <meta property="og:image" content="[Featured image URL]"/>
  <meta property="og:site_name" content="Fast Company"/>
  ```

- [ ] **Step 6: Insert Twitter card tags**

  After Open Graph tags, insert:
  ```html
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Why Financial Responsibility Matters for Retirees"/>
  <meta name="twitter:description" content="[Same as meta description]"/>
  <meta name="twitter:image" content="[Featured image URL]"/>
  ```

---

## Task 6: Insert JSON-LD Structured Data into Article 2

**Files:**
- Modify: `blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html`

- [ ] **Step 1: Locate the closing head tag**

  Find the string: `</head>`

- [ ] **Step 2: Insert JSON-LD script**

  Before the closing `</head>` tag, insert:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Why Financial Responsibility Matters for Retirees",
    "description": "[Same as meta description]",
    "author": {
      "@type": "Person",
      "name": "Dris Webb",
      "url": "https://www.fastcompany.com/user/driswebb"
    },
    "datePublished": "[Publication date]",
    "image": "[Featured image URL]",
    "publisher": {
      "@type": "Organization",
      "name": "Fast Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastcompany.business/_public/fc_logo_black.svg"
      }
    },
    "mainEntityOfPage": "https://fastcompany.business/blogs/alt/investing/why-financial-responsibility-matters-for-retirees"
  }
  </script>
  ```

---

## Task 7: Create sitemap.xml

**Files:**
- Create: `sitemap.xml`

- [ ] **Step 1: Create sitemap.xml with all pages**

  Create a new file `sitemap.xml` at project root with the following content:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://fastcompany.business/</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://fastcompany.business/blogs/alt/investing/why-financial-responsibility-matters-for-retirees</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://fastcompany.business/blogs/alt/technology/global-clean-energy-initiative-breaks-ground</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
  </urlset>
  ```

---

## Task 8: Create robots.txt

**Files:**
- Create: `robots.txt`

- [ ] **Step 1: Create robots.txt**

  Create a new file `robots.txt` at project root with the following content:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://fastcompany.business/sitemap.xml
  ```

---

## Task 9: Validate All Changes

**Files:**
- Read: All modified/created files

- [ ] **Step 1: Validate HTML structure**

  Open each modified HTML file in a browser or HTML validator to ensure no syntax errors.

- [ ] **Step 2: Validate JSON-LD**

  Use Google's Rich Results Test (https://search.google.com/test/rich-results) to validate the JSON-LD structured data.

- [ ] **Step 3: Validate sitemap.xml**

  Use an XML validator to ensure sitemap.xml is well-formed.

- [ ] **Step 4: Verify robots.txt**

  Ensure robots.txt is correctly formatted and accessible.

---

## Task 10: Commit and Push Changes

**Files:**
- All modified/created files

- [ ] **Step 1: Stage all changes**

  ```bash
  git add blogs/alt/technology/global-clean-energy-initiative-breaks-ground/index.html
  git add blogs/alt/investing/why-financial-responsibility-matters-for-retirees/index.html
  git add sitemap.xml
  git add robots.txt
  ```

- [ ] **Step 2: Commit changes**

  ```bash
  git commit -m "feat: add SEO/AEO optimization for blog pages"
  ```

- [ ] **Step 3: Push to remote**

  ```bash
  git push origin main
  ```
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = true,
  schema
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('property', 'twitter:title', title);
      updateMetaTag('name', 'title', title);
    }

    // Update description
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'twitter:description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update canonical
    const canonicalUrl = canonical || `${siteUrl}${location.pathname}`;
    updateLinkTag('canonical', canonicalUrl);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'twitter:url', canonicalUrl);

    // Update OG image
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('property', 'twitter:image', ogImage);
    }

    // Update robots
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
    updateMetaTag('name', 'robots', robotsContent);

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    updateMetaTag('name', 'last-modified', today);

    // Add Schema.org JSON-LD
    if (schema) {
      addSchemaScript(schema);
    }

    return () => {
      // Cleanup schema script on unmount
      const existingScript = document.getElementById('schema-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, noindex, schema, location.pathname, siteUrl]);
};

const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.href = href;
};

const addSchemaScript = (schema: object) => {
  // Remove existing schema script
  const existingScript = document.getElementById('schema-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema script
  const script = document.createElement('script');
  script.id = 'schema-jsonld';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Schema.org templates
export const createWebPageSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Sankofa Vault CMS',
    url: import.meta.env.VITE_SITE_URL || 'https://example.com'
  }
});

export const createWebApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Sankofa Vault CMS',
  description: 'Content management system for Sankofa Vault - Manage your cultural heritage content with ease',
  url: import.meta.env.VITE_SITE_URL || 'https://example.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

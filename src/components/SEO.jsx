import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'SS Safety Solutions | Premium Safety Equipment & Protective Gear Pakistan',
  description = 'Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan. Quality safety solutions for industrial, construction, and emergency services.',
  keywords = 'safety equipment, protective gear, fire fighting equipment, rescue equipment, personal protective equipment, PPE, safety shoes, road safety, fire alarm systems, fall arrest systems, laboratory safety, Pakistan',
  url = 'https://www.sssafetysolutions.com/',
  image = '/og-image.jpg',
  type = 'website',
  article = false,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags,
  breadcrumbs,
  schema
}) => {
  const fullTitle = title.includes('SS Safety Solutions') ? title : `${title} | SS Safety Solutions`;
  
  // Generate breadcrumbs schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  } : null;

  // Combine default schema with custom schema
  const combinedSchema = schema ? 
    Array.isArray(schema) ? [...(breadcrumbSchema ? [breadcrumbSchema] : []), ...schema] :
    [breadcrumbSchema, schema].filter(Boolean) :
    breadcrumbSchema ? [breadcrumbSchema] : [];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SS Safety Solutions" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="SS Safety Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article Specific Open Graph Tags */}
      {article && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {category && <meta property="article:section" content={category} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Schema.org Structured Data */}
      {combinedSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema.length === 1 ? combinedSchema[0] : combinedSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
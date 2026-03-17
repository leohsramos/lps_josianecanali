import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  structuredData?: any; // Novo suporte para Schema.org
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, structuredData }) => {
  useEffect(() => {
    // Atualiza o Título da Página
    document.title = title;

    // Função auxiliar para atualizar meta tags
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Atualiza Meta Tags Padrão
    updateMeta('description', description);

    // Atualiza Open Graph (Facebook/WhatsApp/LinkedIn)
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    if (image) updateMeta('og:image', image, 'property');
    if (url) updateMeta('og:url', url, 'property');

    // Atualiza Twitter Cards
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');
    if (image) updateMeta('twitter:image', image, 'property');

    // Injeção de JSON-LD (Structured Data)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, image, url, structuredData]);

  return null; // Este componente não renderiza nada visualmente
};

export default SEO;
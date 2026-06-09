// Eventos do Meta Pixel para as páginas da Comunidade.
// O pixel (ID 980869827782208, "Dados - Kiwify Comunidade") já é inicializado
// globalmente no index.html, que também dispara o PageView. Aqui só adicionamos
// os eventos de funil. Dispara com segurança: se o fbq ainda não carregou,
// simplesmente não faz nada (não quebra a página).

const fbq = (...args: unknown[]) => {
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...a: unknown[]) => void }).fbq(...args);
    }
};

// Usa o caminho da URL (ex.: /comunidade-4) como nome do conteúdo,
// assim cada variação fica separada nos relatórios do Meta sem precisar de pixels diferentes.
const pageName = () => (typeof window !== 'undefined' ? window.location.pathname : 'comunidade');

// Disparado quando a pessoa abre a página da Comunidade.
export const trackViewContent = () => {
    fbq('track', 'ViewContent', {
        content_name: pageName(),
        content_category: 'comunidade'
    });
};

// Disparado no clique do botão de compra (vai para o checkout do Kiwify).
export const trackInitiateCheckout = () => {
    fbq('track', 'InitiateCheckout', {
        value: 579,
        currency: 'BRL',
        content_name: pageName(),
        content_category: 'comunidade'
    });
};

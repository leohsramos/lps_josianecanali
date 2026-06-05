import React from 'react';
import ComunidadeBase from './ComunidadeBase';

// Variação SEM o vídeo no hero (mantém a foto da Dra. Josi como mídia principal).
const Comunidade2: React.FC = () => (
    <ComunidadeBase
        heroPhoto={true}
        heroVideo={false}
        canonicalUrl="https://lp.institutocanali.com/comunidade-2"
    />
);

export default Comunidade2;

import React from 'react';
import ComunidadeBase from './ComunidadeBase';

// Variação de hero SEM a foto da Dra. Josi (mantém o vídeo).
const Comunidade1: React.FC = () => (
    <ComunidadeBase
        heroPhoto={false}
        heroVideo={true}
        canonicalUrl="https://lp.institutocanali.com/comunidade-1"
    />
);

export default Comunidade1;

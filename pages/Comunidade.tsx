import React from 'react';
import ComunidadeBase from './ComunidadeBase';

// Variação principal: hero com foto da Dra. Josi + vídeo.
const Comunidade: React.FC = () => (
    <ComunidadeBase
        heroPhoto={true}
        heroVideo={true}
        canonicalUrl="https://lp.institutocanali.com/comunidade"
    />
);

export default Comunidade;

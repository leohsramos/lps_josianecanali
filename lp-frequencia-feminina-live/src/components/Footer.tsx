export default function Footer() {
  return (
    <footer className="bg-carvao px-6 py-12 text-center md:px-12">
      <p className="mx-auto max-w-xl font-sans text-xs leading-relaxed text-champagne/45">
        Este conteúdo é educativo e não substitui consulta médica.
        <br />
        Dra. Josiane Canali | CRM PR 40.088 | RQE 4.382
      </p>

      <div className="mt-5 flex items-center justify-center gap-3 font-sans text-xs text-champagne/40">
        {/* TODO: apontar para as páginas reais de Política de Privacidade e Termos de Uso */}
        <a href="#" className="transition-colors hover:text-champagne/70">
          Política de Privacidade
        </a>
        <span aria-hidden="true">|</span>
        <a href="#" className="transition-colors hover:text-champagne/70">
          Termos de Uso
        </a>
      </div>
    </footer>
  );
}

export default function EcolLandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 lg:px-20 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-green-900/20 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm text-green-300">Sustentabilidade + Blockchain</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-4">
              <span className="text-white">E-</span>
              <span className="text-green-400">COL</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-6" />
            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              Transforme resíduos em <span className="text-green-400">valor.</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
              A E-COL conecta reciclagem e tecnologia através de pontos de coleta inteligentes que recompensam usuários com tokens Solana por embalagens recicláveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-400 transition-all text-black font-bold px-6 py-4 rounded-2xl">Conhecer Projeto</button>
              <button className="border border-white/20 hover:border-green-500 hover:bg-green-500/10 transition-all px-6 py-4 rounded-2xl">Baixar App</button>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 lg:px-20 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl font-black mb-4">O problema da reciclagem no Brasil</h2>
            <p className="text-zinc-400 max-w-3xl text-lg">Mesmo com a Política Nacional de Resíduos Sólidos, grande parte das embalagens recicláveis ainda não retorna à cadeia produtiva.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Baixa adesão à reciclagem', 'Poucos pontos de coleta', 'Falta de incentivo financeiro', 'Dificuldade de rastreamento ambiental'].map((item, index) => (
              <div key={index} className="bg-black border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition-all">
                <div className="bg-green-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5"><span className="text-green-400 text-2xl">♻</span></div>
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTO INFORMATIVO */}
      <section className="px-6 lg:px-20 py-24 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-black mb-6">Política Nacional de Resíduos Sólidos</h2>
            <p className="text-green-400 text-xl font-semibold max-w-3xl mx-auto">Lei nº 12.305/2010 • Logística Reversa • Economia Circular</p>
          </div>
          <div className="bg-zinc-950 border border-white/10 rounded-[40px] p-8 lg:p-14 space-y-10">
            <div>
              <h3 className="text-3xl font-black mb-6 text-green-400">Política de Logística Reversa de Embalagens no Brasil</h3>
              <p className="text-zinc-300 leading-relaxed text-lg mb-6">A Política de Logística Reversa de Embalagens no Brasil é um instrumento da Política Nacional de Resíduos Sólidos (PNRS), instituída pela Lei nº 12.305/2010. Ela estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos.</p>
            </div>
            <div className="space-y-8">
              <div className="bg-black rounded-3xl border border-white/5 p-8"><h4 className="text-2xl font-black mb-4 text-green-400">O que é Logística Reversa?</h4><p className="text-zinc-300 leading-relaxed text-lg">É o conjunto de ações para coletar, devolver e reaproveitar resíduos sólidos, como embalagens, ao setor empresarial para reciclagem.</p></div>
              <div className="bg-black rounded-3xl border border-white/5 p-8"><h4 className="text-2xl font-black mb-4 text-green-400">Quem é obrigado a implementar?</h4><p className="text-zinc-300 leading-relaxed text-lg mb-4">Fabricantes, importadores, distribuidores e comerciantes.</p><ul className="space-y-3 text-zinc-400 text-lg list-disc list-inside"><li>Embalagens plásticas, metálicas, de vidro e papel.</li><li>Produtos comercializados em embalagens.</li></ul></div>
              <div className="bg-black rounded-3xl border border-white/5 p-8"><h4 className="text-2xl font-black mb-6 text-green-400">Como funciona na prática?</h4><div className="grid lg:grid-cols-3 gap-6">{['Empresas', 'Consumidores', 'Poder Público'].map(item => (<div key={item} className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6"><h5 className="font-black text-xl mb-3">{item}</h5><p className="text-zinc-300">Responsabilidades específicas de cada agente no ciclo.</p></div>))}</div></div>
              <div className="bg-black rounded-3xl border border-white/5 p-8"><h4 className="text-2xl font-black mb-4 text-green-400">Metas Recentes</h4><div className="grid lg:grid-cols-2 gap-6"><div className="bg-green-500/10 rounded-3xl p-6 border border-green-500/20"><h5 className="text-4xl font-black text-green-400 mb-3">2026</h5><p className="text-zinc-300">Recuperar 32% das embalagens plásticas.</p></div><div className="bg-green-500/10 rounded-3xl p-6 border border-green-500/20"><h5 className="text-4xl font-black text-green-400 mb-3">2040</h5><p className="text-zinc-300">Atingir 50% de recuperação e 40% de conteúdo reciclado.</p></div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20"><h2 className="text-5xl font-black mb-6">Recicle. Escaneie. Ganhe.</h2></div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[{title:'Leve sua embalagem',text:'Plástico, vidro, papel ou metal.'},{title:'Escaneie o QR Code',text:'Ponto identifica o descarte.'},{title:'Receba tokens',text:'Ganhe recompensas em Solana.'},{title:'Acompanhe no app',text:'Veja saldo e impacto.'}].map((step, i) => (
              <div key={i} className="bg-zinc-950 border border-white/10 rounded-3xl p-8"><div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-green-400">⚡</div><h3 className="text-2xl font-bold mb-4">{step.title}</h3><p className="text-zinc-400">{step.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24"><div className="max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-emerald-700 rounded-[40px] p-12 lg:p-20 text-center"><h2 className="text-5xl font-black text-black mb-6">O futuro da reciclagem é inteligente.</h2><div className="flex flex-wrap justify-center gap-4"><button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">Entrar na Beta</button></div></div></section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 lg:px-20 py-10"><div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6"><h3 className="text-2xl font-black text-green-400">E-COL</h3><p className="text-zinc-500">© 2026 E-COL. Todos os direitos reservados.</p></div></footer>
    </div>
  );
}
/*
E-COL Landing Page

COMO RODAR O PROJETO:

1. Criar projeto Vite:
npm create vite@latest ecol

2. Entrar na pasta:
cd ecol

3. Instalar dependências:
npm install
npm install tailwindcss @tailwindcss/vite

4. Configurar vite.config.js:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

5. Configurar src/index.css:
@import "tailwindcss";

6. Substituir src/App.jsx por este arquivo.

7. Rodar projeto:
npm run dev

COMO PUBLICAR:

1. Criar repositório no GitHub
2. Rodar:

git init
git add .
git commit -m "E-COL"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main

3. Entrar em:
https://vercel.com

4. Login com GitHub
5. Import Project
6. Deploy

A landing page ficará online automaticamente.
*/

export default function EcolLandingPage() {
    return (
      <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
        {/* HERO */}
        <section className="relative px-6 lg:px-20 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-green-900/20 blur-3xl" />
  
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
                <span className="text-sm text-green-300">
                  Sustentabilidade + Blockchain
                </span>
              </div>
  
              <div className="mb-6">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-4">
                  <span className="text-white">E-</span>
                  <span className="text-green-400">COL</span>
                </h1>
  
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-6" />
  
                <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                  Transforme resíduos em <span className="text-green-400">valor.</span>
                </h2>
              </div>
  
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
                A E-COL conecta reciclagem e tecnologia através de pontos de
                coleta inteligentes que recompensam usuários com tokens Solana
                por embalagens recicláveis.
              </p>
  
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 hover:bg-green-400 transition-all text-black font-bold px-6 py-4 rounded-2xl">
                  Conhecer Projeto
                </button>
  
                <button className="border border-white/20 hover:border-green-500 hover:bg-green-500/10 transition-all px-6 py-4 rounded-2xl">
                  Baixar App
                </button>
              </div>
            </div>
  
            {/* MOCKUP */}
            <div className="relative">
              <div className="bg-zinc-900 border border-white/10 rounded-[40px] p-6 shadow-2xl">
                <div className="bg-black rounded-[30px] p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-bold text-xl">E-COL Wallet</h3>
                      <p className="text-zinc-400 text-sm">
                        Tokens recebidos hoje
                      </p>
                    </div>
                  </div>
  
                  <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-6 mb-6">
                    <p className="text-black/70 font-medium mb-2">
                      Saldo disponível
                    </p>
                    <h2 className="text-4xl font-black text-black">
                      245 SOL
                    </h2>
                  </div>
  
                  <div className="space-y-4">
                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Plástico reciclado</p>
                        <p className="text-zinc-500 text-sm">+12 Tokens</p>
                      </div>
                      <span className="text-green-400">QR</span>
                    </div>
  
                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Vidro reciclado</p>
                        <p className="text-zinc-500 text-sm">+8 Tokens</p>
                      </div>
                      <span className="text-green-400">QR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* PROBLEMA */}
        <section className="px-6 lg:px-20 py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <h2 className="text-4xl font-black mb-4">
                O problema da reciclagem no Brasil
              </h2>
  
              <p className="text-zinc-400 max-w-3xl text-lg">
                Mesmo com a Política Nacional de Resíduos Sólidos, grande parte
                das embalagens recicláveis ainda não retorna à cadeia produtiva.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Baixa adesão à reciclagem',
                'Poucos pontos de coleta',
                'Falta de incentivo financeiro',
                'Dificuldade de rastreamento ambiental',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition-all"
                >
                  <div className="bg-green-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                    <span className="text-green-400 text-2xl">♻</span>
                  </div>
  
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
              <h2 className="text-5xl font-black mb-6">
                Política Nacional de Resíduos Sólidos
              </h2>
  
              <p className="text-green-400 text-xl font-semibold max-w-3xl mx-auto">
                Lei nº 12.305/2010 • Logística Reversa • Economia Circular
              </p>
            </div>
  
            <div className="bg-zinc-950 border border-white/10 rounded-[40px] p-8 lg:p-14 space-y-10">
              <div>
                <h3 className="text-3xl font-black mb-6 text-green-400">
                  Política de Logística Reversa de Embalagens no Brasil
                </h3>
  
                <p className="text-zinc-300 leading-relaxed text-lg mb-6">
                  A Política de Logística Reversa de Embalagens no Brasil é um instrumento da Política Nacional de Resíduos Sólidos (PNRS), instituída pela Lei nº 12.305/2010. Ela estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, envolvendo fabricantes, importadores, distribuidores, comerciantes, consumidores e poder público.
                </p>
              </div>
  
              <div className="space-y-8">
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    O que é Logística Reversa?
                  </h4>
  
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    É o conjunto de ações para coletar, devolver e reaproveitar resíduos sólidos, como embalagens, ao setor empresarial para reciclagem, reutilização ou destinação ambientalmente adequada. O objetivo é fechar o ciclo, reduzir o volume de lixo enviado a aterros e lixões e promover a economia circular.
                  </p>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Quem é obrigado a implementar?
                  </h4>
  
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    De acordo com o art. 33 da PNRS, fabricantes, importadores, distribuidores e comerciantes de diversos produtos devem estruturar e implementar sistemas de logística reversa.
                  </p>
  
                  <ul className="space-y-3 text-zinc-400 text-lg list-disc list-inside">
                    <li>Embalagens plásticas, metálicas, de vidro e papel/papelão.</li>
                    <li>Produtos comercializados em embalagens.</li>
                    <li>Casos específicos como embalagens de agrotóxicos e óleos lubrificantes.</li>
                  </ul>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-6 text-green-400">
                    Como funciona na prática?
                  </h4>
  
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
                      <h5 className="font-black text-xl mb-3 text-white">
                        Empresas
                      </h5>
                      <p className="text-zinc-300 leading-relaxed">
                        Organizam a coleta, estruturam pontos de entrega, financiam ou operam o sistema e comprovam resultados ambientais.
                      </p>
                    </div>
  
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
                      <h5 className="font-black text-xl mb-3 text-white">
                        Consumidores
                      </h5>
                      <p className="text-zinc-300 leading-relaxed">
                        Devem descartar corretamente embalagens em pontos de entrega voluntária, coleta seletiva ou locais indicados.
                      </p>
                    </div>
  
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">
                      <h5 className="font-black text-xl mb-3 text-white">
                        Poder Público
                      </h5>
                      <p className="text-zinc-300 leading-relaxed">
                        Realiza coleta urbana e pode integrar cooperativas, mas a logística reversa não deve onerar o serviço público.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Instrumentos de Implementação
                  </h4>
  
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    O principal instrumento para embalagens em geral é o Acordo Setorial firmado em 2015 entre o setor privado e o governo federal, conhecido como Coalizão Embalagens.
                  </p>
  
                  <ul className="space-y-3 text-zinc-400 text-lg list-disc list-inside">
                    <li>Acordos Setoriais</li>
                    <li>Termos de Compromisso</li>
                    <li>Decretos e Regulamentos Federais e Estaduais</li>
                    <li>Modelos coletivos ou individuais de operação</li>
                  </ul>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Ações Práticas
                  </h4>
  
                  <ul className="space-y-3 text-zinc-300 text-lg list-disc list-inside leading-relaxed">
                    <li>Instalação de Pontos de Entrega Voluntária (PEVs).</li>
                    <li>Parcerias com cooperativas de catadores.</li>
                    <li>Triagem, reciclagem e reintrodução do material na cadeia produtiva.</li>
                    <li>Relatórios anuais enviados ao SINIR.</li>
                  </ul>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Metas Recentes
                  </h4>
  
                  <p className="text-zinc-300 leading-relaxed text-lg mb-4">
                    Em outubro de 2025, o Decreto nº 12.688 instituiu o Sistema de Logística Reversa de Embalagens de Plástico com metas progressivas de recuperação e reciclagem.
                  </p>
  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-green-500/10 rounded-3xl p-6 border border-green-500/20">
                      <h5 className="text-4xl font-black text-green-400 mb-3">
                        2026
                      </h5>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Recuperar e reciclar 32% das embalagens plásticas colocadas no mercado.
                      </p>
                    </div>
  
                    <div className="bg-green-500/10 rounded-3xl p-6 border border-green-500/20">
                      <h5 className="text-4xl font-black text-green-400 mb-3">
                        2040
                      </h5>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Atingir 50% de recuperação e 40% de conteúdo reciclado em novas embalagens.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="bg-black rounded-3xl border border-white/5 p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Fiscalização e Consequências
                  </h4>
  
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Estados e municípios regulamentam e fiscalizam a logística reversa. O descumprimento das metas pode gerar multas, embargos, responsabilização administrativa e dificuldades para obtenção de licenças ambientais.
                  </p>
                </div>
  
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8">
                  <h4 className="text-2xl font-black mb-4 text-green-400">
                    Como a E-COL contribui
                  </h4>
  
                  <p className="text-zinc-200 leading-relaxed text-lg">
                    A E-COL fortalece a logística reversa através de pontos de coleta inteligentes conectados à blockchain Solana. O projeto incentiva consumidores a descartarem corretamente embalagens recicláveis por meio de recompensas digitais, promovendo educação ambiental, rastreabilidade e economia circular.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* COMO FUNCIONA */}
        <section className="px-6 lg:px-20 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6">
                Recicle. Escaneie. Ganhe.
              </h2>
  
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                Um sistema simples e inteligente que transforma descarte correto
                em recompensa digital.
              </p>
            </div>
  
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Leve sua embalagem',
                  text: 'Plástico, vidro, papel ou metal.',
                },
                {
                  title: 'Escaneie o QR Code',
                  text: 'O ponto inteligente identifica o descarte.',
                },
                {
                  title: 'Receba tokens',
                  text: 'Ganhe recompensas em Solana.',
                },
                {
                  title: 'Acompanhe no app',
                  text: 'Veja saldo e impacto ambiental.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 border border-white/10 rounded-3xl p-8"
                >
                  <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-green-400 text-2xl">
                    ⚡
                  </div>
  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
  
                  <p className="text-zinc-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="px-6 lg:px-20 py-24">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-emerald-700 rounded-[40px] p-12 lg:p-20 text-center">
            <h2 className="text-5xl font-black text-black mb-6">
              O futuro da reciclagem é inteligente.
            </h2>
  
            <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">
              Junte-se à E-COL e transforme sustentabilidade em impacto real
              através da tecnologia blockchain.
            </p>
  
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                Entrar na Beta
              </button>
  
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                Conhecer App
              </button>
            </div>
          </div>
        </section>
  
        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 lg:px-20 py-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-green-400">E-COL</h3>
              <p className="text-zinc-500 mt-2">
                Sustentabilidade + Blockchain + Economia Circular
              </p>
            </div>
  
            <div className="text-zinc-500">
              © 2026 E-COL. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    );
  }
  

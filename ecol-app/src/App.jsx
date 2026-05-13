// E-COL MVP Prototype
// Stack:
// Frontend: React Native
// Backend: Node.js
// Blockchain: Solana
// Tokens: SPL / USDC
// NFTs/RWAs: Metaplex
//
// Fluxo do MVP:
// 1. Usuário escaneia QR Code da embalagem
// 2. Backend valida ID da embalagem
// 3. Smart contract registra reciclagem
// 4. Usuário recebe recompensa em USDC
// 5. Cooperativa registra reciclagem concluída

import mascote from "./assets/mascote.png";

export default function App() {
  const history = [
    {
      item: "Garrafa PET",
      reward: "+0.25 USDC",
      status: "Validada",
    },
    {
      item: "Lata de Alumínio",
      reward: "+0.15 USDC",
      status: "Processada",
    },
    {
      item: "Embalagem Long Neck",
      reward: "+0.30 USDC",
      status: "Blockchain OK",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),transparent_40%)]" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-green-500/20 bg-green-500/10 text-green-400 px-5 py-2 rounded-full mb-6">
            ♻ Blockchain + Reciclagem Inteligente
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6">
            E-COL
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed max-w-xl mb-8">
            Transformando embalagens recicláveis em ativos digitais e recompensas reais através da blockchain Solana.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-green-500 hover:bg-green-400 transition px-7 py-4 rounded-2xl font-bold text-black shadow-2xl shadow-green-500/30">
              Escanear embalagem
            </button>

            <button className="border border-zinc-700 hover:border-green-500 px-7 py-4 rounded-2xl font-semibold transition">
              Ver Wallet
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5 backdrop-blur-sm">
              <p className="text-3xl mb-2">💰</p>
              <h3 className="font-bold mb-2">USDC Rewards</h3>
              <p className="text-sm text-zinc-400">
                Ganhe recompensas reais reciclando.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5 backdrop-blur-sm">
              <p className="text-3xl mb-2">⛓</p>
              <h3 className="font-bold mb-2">Blockchain</h3>
              <p className="text-sm text-zinc-400">
                Transparência e rastreabilidade.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5 backdrop-blur-sm">
              <p className="text-3xl mb-2">🌱</p>
              <h3 className="font-bold mb-2">Impacto ESG</h3>
              <p className="text-sm text-zinc-400">
                Sustentabilidade mensurável.
              </p>
            </div>
          </div>
        </div>

        {/* Mascote */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[450px] h-[450px] bg-green-500/20 rounded-full blur-3xl" />

          <img
            src={mascote}
            alt="Mascote E-COL"
            className="relative z-10 w-[420px] drop-shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-pulse"
          />
        </div>
      </section>

      {/* APP MOCKUP */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Home */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-5 backdrop-blur-xl">
            <div className="bg-black rounded-[32px] p-6 min-h-[700px] relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black">E-COL</h2>
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                  ♻
                </div>
              </div>

              <h3 className="text-4xl font-black leading-tight mb-4">
                Recicle hoje,
                <span className="text-green-400"> colha o futuro!</span>
              </h3>

              <p className="text-zinc-400 mb-8">
                Transformamos embalagens em ativos digitais e recompensas.
              </p>

              <div className="flex justify-center mb-8">
                <img
                  src={mascote}
                  alt="Mascote"
                  className="w-60 drop-shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                />
              </div>

              <button className="w-full bg-green-500 text-black py-4 rounded-2xl font-black text-lg hover:bg-green-400 transition mb-4">
                Escanear embalagem
              </button>

              <button className="w-full border border-green-500/30 py-4 rounded-2xl font-semibold hover:bg-green-500/10 transition">
                Meu Painel
              </button>
            </div>
          </div>

          {/* Scan */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-5 backdrop-blur-xl">
            <div className="bg-black rounded-[32px] p-6 min-h-[700px] relative overflow-hidden flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black mb-3">
                  Escanear embalagem
                </h2>

                <p className="text-zinc-400 mb-8">
                  Aponte a câmera para o QR Code ou NFC.
                </p>

                <div className="relative border-2 border-green-500 rounded-[40px] h-[380px] overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 rounded-3xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-6xl mx-auto mb-6">
                      📦
                    </div>

                    <p className="text-zinc-300 font-semibold">
                      QR Code detectado
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg hover:opacity-90 transition mt-8">
                Validar reciclagem
              </button>
            </div>
          </div>

          {/* Reward */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[40px] p-5 backdrop-blur-xl">
            <div className="bg-black rounded-[32px] p-6 min-h-[700px] relative overflow-hidden">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <img
                    src={mascote}
                    alt="Mascote"
                    className="w-40"
                  />
                </div>

                <div className="w-28 h-28 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-5xl mx-auto mb-6">
                  ✔
                </div>

                <h2 className="text-3xl font-black mb-3">
                  Embalagem validada!
                </h2>

                <p className="text-zinc-400 mb-8">
                  Você descartou corretamente e recebeu uma recompensa.
                </p>

                <div className="bg-green-500 text-black rounded-3xl py-6 font-black text-4xl mb-8">
                  +0.25 USDC
                </div>
              </div>

              <div className="space-y-4">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{item.item}</p>
                      <p className="text-sm text-zinc-500">{item.status}</p>
                    </div>

                    <div className="text-green-400 font-bold">
                      {item.reward}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 text-center text-zinc-500 border-t border-zinc-900 mt-20">
        <p>
          E-COL • Solana • USDC • Metaplex • Reciclagem Inteligente
        </p>
      </footer>
    </div>
  );
}


                  
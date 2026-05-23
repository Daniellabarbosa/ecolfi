import mascote from "../assets/mascote.png";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#021B1A] text-white relative overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f766e,#021B1A_60%)] opacity-60"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 p-6">

        {/* LOGO */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-400">
            E-COL
          </h1>

          <div className="text-2xl">
            🔔
          </div>
        </div>

        {/* TEXO PRINCIPAL */}
        <div className="mt-10">
          <h2 className="text-5xl font-bold leading-tight">
            Recicle hoje,
            <br />
            <span className="text-green-400">
              colha o futuro!
            </span>
          </h2>

          <p className="text-zinc-300 mt-5 text-lg leading-relaxed">
            Transformamos embalagens em ativos digitais e recompensas para você.
          </p>
        </div>

        {/* MASCOTE */}
        <div className="flex justify-center mt-10">
          <img
            src={mascote}
            alt="Mascote"
            className="w-[320px] drop-shadow-[0_0_40px_rgba(34,197,94,0.5)]"
          />
        </div>

        {/* BOTÕES */}
        <div className="mt-10 space-y-4">

          <button className="w-full bg-green-500 hover:bg-green-400 transition-all py-5 rounded-3xl text-xl font-bold shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            Escanear embalagem
          </button>

          <button className="w-full border border-green-500 text-green-400 py-5 rounded-3xl text-xl font-bold">
            Meu Painel
          </button>

        </div>

      </div>

      {/* MENU INFERIOR */}
      <BottomNav />
    </div>
  );
}
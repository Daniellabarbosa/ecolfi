export default function BottomNav() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#062B29]/80 backdrop-blur-xl border-t border-green-900">
  
        <div className="flex justify-around items-center py-4 text-white">
  
          <div className="flex flex-col items-center text-green-400">
            <span>🏠</span>
            <span className="text-sm">Início</span>
          </div>
  
          <div className="flex flex-col items-center">
            <span>💰</span>
            <span className="text-sm">Carteira</span>
          </div>
  
          <div className="bg-green-500 p-5 rounded-full -mt-10 shadow-[0_0_30px_rgba(34,197,94,0.7)]">
            📷
          </div>
  
          <div className="flex flex-col items-center">
            <span>📜</span>
            <span className="text-sm">Histórico</span>
          </div>
  
          <div className="flex flex-col items-center">
            <span>👤</span>
            <span className="text-sm">Perfil</span>
          </div>
  
        </div>
      </div>
    );
  }
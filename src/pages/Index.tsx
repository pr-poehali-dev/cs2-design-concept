import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mainRoster = [
    { name: "romapriroda", role: "Rifle" },
    { name: "Terl1ght", role: "AWP" },
    { name: "CyBoRG01", role: "Rifle" },
    { name: "d3c1ded", role: "IGL" },
    { name: "WITZKZY", role: "Rifle" }
  ];

  const reserveRoster = [
    { name: "FAZYBTW", role: "Rifle" },
    { name: "gE-NO", role: "Rifle" },
    { name: "POMA86", role: "Rifle" }
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-screen-2xl aspect-video bg-gradient-to-br from-red-900 via-red-950 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>
        
        <div className="h-full flex flex-col justify-center px-12 py-8">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <Icon name="Trophy" size={24} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold font-oswald tracking-wider bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                OUTLIER
              </h1>
            </div>
            <div className="text-lg font-roboto text-red-300 mb-2">CS2 OFFICIAL ROSTER</div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-yellow-400 text-lg">⚡</span>
              <span className="text-red-400 font-medium">EST. 2024</span>
              <span className="text-yellow-400 text-lg">⚡</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Main Roster */}
            <div className="col-span-2">
              <Card className="bg-black/40 border-red-600/50 backdrop-blur-md p-6 h-full">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="Users" size={28} className="text-red-400 mr-3" />
                  <h2 className="text-3xl font-bold font-oswald text-white">
                    ROSTER ⚡
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {mainRoster.map((player, index) => (
                    <div 
                      key={player.name}
                      className="group bg-gradient-to-r from-red-950/50 to-black/50 border border-red-800/30 rounded-lg p-4 transition-all duration-300 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center">
                        <span className="text-red-400 mr-4 text-2xl group-hover:scale-110 transition-transform">✦</span>
                        <div className="flex-1">
                          <div className="text-xl font-bold text-white font-roboto">{player.name}</div>
                          <div className="text-sm text-red-300 font-medium">{player.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Reserve Roster */}
            <div>
              <Card className="bg-black/30 border-gray-600/40 backdrop-blur-md p-6 h-full">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-yellow-500 mr-3 text-2xl">⏳</span>
                  <h3 className="text-xl font-oswald text-gray-300">RESERVE</h3>
                </div>
                <div className="space-y-3">
                  {reserveRoster.map((player, index) => (
                    <div key={player.name} className="text-center p-2 bg-gray-900/30 rounded">
                      <div className="text-white font-medium text-sm">{player.name}</div>
                      <div className="text-xs text-gray-400">{player.role}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Index;
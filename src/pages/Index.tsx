import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mainRoster = [
    { name: "romapriroda", role: "IGL/Entry" },
    { name: "Terl1ght", role: "AWP" },
    { name: "CyBoRG01", role: "Rifler" },
    { name: "d3c1ded", role: "Support" },
    { name: "WITZKZY", role: "Lurker" }
  ];

  const reserveRoster = [
    { name: "FAZYBTW", role: "Rifler" },
    { name: "gE-NO", role: "Support" },
    { name: "POMA86", role: "Entry" }
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-950 to-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>
      
      <div className="h-full flex flex-col justify-center px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <Icon name="Trophy" size={32} className="text-white" />
            </div>
            <h1 className="text-7xl font-bold font-oswald tracking-wider bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              OUTLIER
            </h1>
          </div>
          <div className="text-2xl font-roboto text-red-300 mb-2">CS2 OFFICIAL ROSTER</div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-yellow-400 text-xl">⚡</span>
            <span className="text-red-400 font-medium">EST. 2024</span>
            <span className="text-yellow-400 text-xl">⚡</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Roster */}
          <Card className="bg-black/40 border-red-600/50 backdrop-blur-md p-10 shadow-2xl mb-8">
            <div className="flex items-center justify-center mb-10">
              <Icon name="Users" size={36} className="text-red-400 mr-4" />
              <h2 className="text-5xl font-bold font-oswald text-white">
                ROSTER ⚡
              </h2>
            </div>
            
            <div className="space-y-6">
              {mainRoster.map((player, index) => (
                <div 
                  key={player.name}
                  className="group bg-gradient-to-r from-red-950/50 to-black/50 border border-red-800/30 rounded-lg p-6 transition-all duration-300 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <span className="text-red-400 mr-6 text-4xl group-hover:scale-110 transition-transform">✦</span>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-white font-roboto">{player.name}</div>
                      <div className="text-lg text-red-300 font-medium mt-1">{player.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Reserve Roster */}
          <Card className="bg-black/30 border-gray-600/40 backdrop-blur-md p-8">
            <div className="flex items-center justify-center mb-8">
              <span className="text-yellow-500 mr-4 text-3xl">⏳</span>
              <h3 className="text-2xl font-oswald text-gray-300">RESERVE</h3>
            </div>
            <div className="text-center">
              <div className="text-xl text-gray-400 font-roboto">
                {reserveRoster.map(player => player.name).join(" | ")}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
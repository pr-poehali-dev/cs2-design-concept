import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mainRoster = [
    { name: "romapriroda", role: "IGL/Entry", rating: "1.24", kd: "1.31" },
    { name: "Terl1ght", role: "AWP", rating: "1.18", kd: "1.15" },
    { name: "CyBoRG01", role: "Rifler", rating: "1.09", kd: "1.02" },
    { name: "d3c1ded", role: "Support", rating: "0.98", kd: "0.94" },
    { name: "WITZKZY", role: "Lurker", rating: "1.12", kd: "1.08" }
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

        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {/* Main Roster */}
          <div className="col-span-2">
            <Card className="bg-black/40 border-red-600/50 backdrop-blur-md p-8 shadow-2xl">
              <div className="flex items-center mb-8">
                <Icon name="Users" size={32} className="text-red-400 mr-3" />
                <h2 className="text-4xl font-bold font-oswald text-white">
                  MAIN ROSTER
                </h2>
                <div className="ml-auto">
                  <Badge className="bg-red-600 text-white text-lg px-4 py-2">ACTIVE</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                {mainRoster.map((player, index) => (
                  <div 
                    key={player.name}
                    className="group bg-gradient-to-r from-red-950/50 to-black/50 border border-red-800/30 rounded-lg p-4 transition-all duration-300 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-red-400 mr-4 text-2xl group-hover:scale-110 transition-transform">✦</span>
                        <div>
                          <div className="text-2xl font-bold text-white font-roboto">{player.name}</div>
                          <div className="text-sm text-red-300 font-medium">{player.role}</div>
                        </div>
                      </div>
                      <div className="flex space-x-6 text-right">
                        <div>
                          <div className="text-xs text-gray-400">RATING</div>
                          <div className="text-lg font-bold text-green-400">{player.rating}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">K/D</div>
                          <div className="text-lg font-bold text-blue-400">{player.kd}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Reserve & Info */}
          <div className="space-y-6">
            {/* Reserve Roster */}
            <Card className="bg-black/30 border-gray-600/40 backdrop-blur-md p-6">
              <div className="flex items-center mb-6">
                <Icon name="Clock" size={24} className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-oswald text-white">RESERVE</h3>
              </div>
              <div className="space-y-3">
                {reserveRoster.map((player, index) => (
                  <div key={player.name} className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <div>
                      <div className="text-white font-medium">{player.name}</div>
                      <div className="text-xs text-gray-400">{player.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team Stats */}
            <Card className="bg-black/30 border-green-600/40 backdrop-blur-md p-6">
              <div className="flex items-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-green-400 mr-3" />
                <h3 className="text-lg font-oswald text-white">TEAM STATS</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Win Rate</span>
                  <span className="text-green-400 font-bold">73%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Maps Played</span>
                  <span className="text-blue-400 font-bold">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Avg. Rating</span>
                  <span className="text-yellow-400 font-bold">1.12</span>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-black/30 border-yellow-600/40 backdrop-blur-md p-6">
              <div className="flex items-center mb-4">
                <Icon name="Award" size={24} className="text-yellow-500 mr-3" />
                <h3 className="text-lg font-oswald text-white">ACHIEVEMENTS</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-yellow-400">🥇 Regional Champions 2024</div>
                <div className="text-sm text-gray-300">🥈 Major Qualifier</div>
                <div className="text-sm text-gray-300">🥉 Season League</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
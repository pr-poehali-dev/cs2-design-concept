import { Card } from "@/components/ui/card";

const Index = () => {
  const mainRoster = [
    "romapriroda",
    "Terl1ght", 
    "CyBoRG01",
    "d3c1ded",
    "WITZKZY"
  ];

  const reserveRoster = ["FAZYBTW", "gE-NO", "POMA86"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 font-oswald tracking-wider">
            ⚡ OUTLIER | CS2 OFFICIAL ROSTER ⚡
          </h1>
        </div>

        {/* Main Roster */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-black/30 border-red-500/50 backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-8 font-oswald text-white">
              ROSTER ⚡
            </h2>
            <div className="space-y-6">
              {mainRoster.map((player, index) => (
                <div 
                  key={player}
                  className="flex items-center text-2xl font-roboto transition-all duration-300 hover:scale-105 hover:text-red-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-red-400 mr-4 text-3xl">✦</span>
                  <span className="text-white font-medium">{player}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Reserve Roster */}
        <div className="max-w-xl mx-auto">
          <Card className="bg-black/20 border-gray-500/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-oswald text-gray-300 mb-4 flex items-center">
              <span className="mr-3 text-2xl">⏳</span>
              RESERVE
            </h3>
            <div className="text-lg text-gray-400 font-roboto">
              {reserveRoster.join(" | ")}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
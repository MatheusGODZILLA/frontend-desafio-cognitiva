import React from 'react';
import { ModelRanking } from '../types';
import { Trophy, Medal } from 'lucide-react';

interface RankingCardProps {
  rankings: ModelRanking[];
}

export function RankingCard({ rankings }: RankingCardProps) {
  const icons = {
    0: <Trophy className="w-6 h-6 text-yellow-400" />,
    1: <Medal className="w-6 h-6 text-gray-400" />,
    2: <Medal className="w-6 h-6 text-amber-600" />,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Ranking dos Modelos</h3>
      <div className="space-y-4">
        {rankings.map((rank, index) => (
          <div
            key={rank.modelName}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
          >
            <div className="flex items-center gap-3">
              {icons[index as keyof typeof icons]}
              <span className="font-medium capitalize">{rank.modelName}</span>
            </div>
            <span className="font-semibold">{rank.finalScore.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
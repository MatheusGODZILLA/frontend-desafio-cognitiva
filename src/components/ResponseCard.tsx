import React from 'react';
import { Evaluation } from '../types';
import { Star } from 'lucide-react';

interface ResponseCardProps {
  modelName: string;
  response: string;
  evaluation: Evaluation;
  isBest: boolean;
}

const metricMapping: Record<string, string> = {
  clarity: 'Clareza',
  accuracy: 'Precisão',
  creativity: 'Criatividade',
  grammar: 'Gramática',
};

export function ResponseCard({ modelName, response, evaluation, isBest }: ResponseCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg mb-6 ${isBest ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white'}'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 capitalize">{modelName}</h3>
        <div className="flex items-center gap-2">
          <Star
            className={`w-5 h-5 ${isBest ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
          />
          <span className="font-semibold text-lg">
            {evaluation.finalScore.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="prose max-w-none mb-4 whitespace-pre-wrap">
        {response}
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Object.entries(evaluation.scores).map(([metric, score]) => (
          <div key={metric} className="text-center">
            <div className="text-sm text-gray-600 capitalize mb-1">{metricMapping[metric] || metric}</div>
            <div className="font-semibold text-gray-800">{score}/10</div>
          </div>
        ))}
      </div>
    </div>
  );
}
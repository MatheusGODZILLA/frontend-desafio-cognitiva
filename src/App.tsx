import React, { useState } from 'react';
import { AIResponse } from './types';
import { ResponseCard } from './components/ResponseCard';
import { RankingCard } from './components/RankingCard';
import { Loader2, Brain } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('https://desafio-cognitiva-matheusdasilva-8c3c6de8.koyeb.app/llm/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      
      if (!res.ok) {
        throw new Error('Erro na requisição da API');
      }
      
      const data: AIResponse = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Desafio Cognitiva
            </h1>
          </div>
          <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto mb-8">
            Explore o poder dos diferentes modelos de LLMs através de prompts interativos
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Escreva seu prompt..."
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
            </button>
          </div>
        </form>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <p className="mt-6 text-xl font-medium text-gray-600">Gerando respostas...</p>
          </div>
        ) : response ? (
          <div className="space-y-8">
            <div className="grid gap-6">
              {Object.entries(response.responses).map(([model, text]) => (
                <ResponseCard
                  key={model}
                  modelName={model}
                  response={text}
                  evaluation={response.evaluations.find(e => e.modelName === model)!}
                  isBest={model === response.bestResponse.modelName}
                />
              ))}
            </div>
            
            <RankingCard rankings={response.ranking} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

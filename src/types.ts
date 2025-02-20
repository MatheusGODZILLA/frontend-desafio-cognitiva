export interface ModelScore {
  clarity: number;
  accuracy: number;
  creativity: number;
  grammar: number;
}

export interface Evaluation {
  modelName: string;
  scores: ModelScore;
  finalScore: number;
}

export interface ModelRanking {
  modelName: string;
  finalScore: number;
}

export interface AIResponse {
  prompt: string;
  responses: {
    [key: string]: string;
  };
  evaluations: Evaluation[];
  bestResponse: ModelRanking;
  ranking: ModelRanking[];
}
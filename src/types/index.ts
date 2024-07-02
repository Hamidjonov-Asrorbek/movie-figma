export type Movie = {
  id: number;
  name?: string;
  alternativeName: string;
  description?: string;
  year?: number;
  type: string;
  poster?: {
    url: string;
  };
  backdrop?: {
    url: string;
  };
};

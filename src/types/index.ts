export type Movie = {
  id: number;
  name?: string;
  alternativeName: string;
  year?: number;
  type: string;
  poster?: {
    url: string;
  };
  backdrop?: {
    url: string;
  };
};

export type Cocktail = {
  id: number;
  attributes: {
    title: string;
    instructions: string;
    ingredients: Array<string>;
  }
}
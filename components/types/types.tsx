export type IinitialState = {
  id: number;
  quantity: number;
}[];

export type IPayload = {
  id: number;
  quantity?: number;
};

export type IActionObj = {
  type: string;
  id: number;
};

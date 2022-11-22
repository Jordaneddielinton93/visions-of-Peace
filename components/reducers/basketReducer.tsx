import { IActionObj, IinitialState, IPayload } from "../types/types";

export const initialState: IinitialState = [];

export default function basketReducer(
  state: any,
  { type, payload }: IActionObj
) {
  switch (type) {
    case "addToBasket":
      let stateAllreadyContainsId = state.some(
        ({ id }: any) => id === payload?.id
      );

      if (stateAllreadyContainsId) {
        const foundIndex = state.findIndex((x: any) => x.id == payload?.id);
        let newState = state;
        newState[foundIndex] = { id: payload?.id, quantity: payload?.quantity };
        return newState;
      }

      let removeById = state.filter((obj: any) => obj.id !== payload);
      let newItemAndQuantity = payload;
      return [...removeById, newItemAndQuantity];

    case "removeFromBasket":
      let newState = state.filter((obj: IPayload) => {
        return obj.id !== payload?.id;
      });
      return newState;
    case "removeAllFromBasket":
      return [];
    default:
      return state;
  }
}

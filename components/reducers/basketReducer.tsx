import { IActionObj, IinitialState } from "../types/types";

export const initialState: IinitialState = [];

export default function basketReducer(state: any, { type, id }: IActionObj) {
  console.log(type);
  switch (type) {
    case "addOneToBasket":
      let stateAllreadyContainsId = state.some(({ id: ID }: any) => ID === id);

      if (stateAllreadyContainsId) {
        const foundIndex = state.findIndex((x: any) => x.id == id);
        let newState = [...state];
        newState[foundIndex] = {
          id: id,
          quantity: state[foundIndex].quantity + 1,
        };

        return newState;
      } else {
        return [...state, { id: id, quantity: 1 }];
      }

    case "removeOneFromBasket":
      let stateAllreadyContainsID = state.some(({ id: ID }: any) => ID === id);

      if (stateAllreadyContainsID) {
        const foundIndex = state.findIndex((x: any) => x.id == id);
        if (state[foundIndex].quantity == 0) {
          let newState = [...state];

          return newState.filter((obj) => obj.id !== id);
        } else {
          let newState = [...state];
          newState[foundIndex] = {
            id: id,
            quantity: state[foundIndex].quantity - 1,
          };
          if (newState[foundIndex].quantity == 0) {
            let newState = [...state];

            return newState.filter((obj) => obj.id !== id);
          }
          return newState;
        }
      }
      return state;

    case "removeItemFromBasket":
      console.log("heeeree", id);
      let newState = [...state];
      console.log(newState.filter((obj: any) => obj.id !== id));
      return newState.filter((obj: any) => obj.id !== id);

    case "removeAllFromBasket":
      return [];
    default:
      return state;
  }
}

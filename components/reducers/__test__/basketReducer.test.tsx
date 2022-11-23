import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
import { IinitialState } from "../../types/types";
// import basketReducer from "../basketReducer";
let initialState: IinitialState = [];
// let initialStateFull: IinitialState = [
//   { id: 1, quantity: 2 },
//   { id: 2, quantity: 3 },
//   { id: 3, quantity: 4 },
// ];
beforeEach(() => {
  initialState = [];
});

// describe("Basket Reducer", () => {
//   it("should bring back orginal state ", () => {
//     let actionObj: IActionObj = { type: "" };
//     let result = basketReducer(initialStateFull, actionObj);
//     expect(result).toEqual(initialStateFull);
//   });
//   describe("ADD - to reducer state", () => {
//     it("should add a single object to the state with an id and quantity", () => {
//       let actionObj: IActionObj = {
//         type: "addToBasket",
//         payload: { id: 1, quantity: 2 },
//       };
//       let result = basketReducer(initialState, actionObj);
//       expect(result).toHaveLength(1);
//       expect(result[0]).toEqual({ id: 1, quantity: 2 });
//     });
//   });
//   describe("UPDATE - from reducer state ", () => {
//     it("should update the quantity if there is allready an item in state ", () => {
//       let actionObj: IActionObj = {
//         type: "addToBasket",
//         payload: { id: 1, quantity: 5 },
//       };
//       let result = basketReducer(initialStateFull, actionObj);

//       expect(result).toEqual([
//         { id: 1, quantity: 5 },
//         { id: 2, quantity: 3 },
//         { id: 3, quantity: 4 },
//       ]);
//     });
//   });
//   describe("REMOVE - from reducer state", () => {
//     it("should remove an item by id", () => {
//       initialState = [];

//       let actionObj: IActionObj = {
//         type: "removeFromBasket",
//         payload: { id: 1 },
//       };
//       let result = basketReducer(initialStateFull, actionObj);

//       expect(result).not.toEqual(
//         expect.arrayContaining([
//           expect.objectContaining({ id: 1, quantity: 2 }),
//         ])
//       );
//       expect(result).toHaveLength(2);
//     });
//     it("should remove all items from basket", () => {
//       let actionObj: IActionObj = {
//         type: "removeAllFromBasket",
//         payload: { id: 1 },
//       };
//       let result = basketReducer(initialStateFull, actionObj);
//       expect(result).toEqual([]);
//     });
//   });
// });

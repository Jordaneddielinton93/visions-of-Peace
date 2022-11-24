import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React, { useReducer } from "react";

import { BasketContextWrapper } from "../../contexts/BasketWrapper";
import basketReducer from "../../reducers/basketReducer";

import StoreQuantityButton from "../StoreQuantityButtons";

function BasketWrap(props: any) {
  let [basket, setBasket] = useReducer<any>(basketReducer, props.initState);

  return (
    <BasketContextWrapper.Provider value={{ basket, setBasket }}>
      {props.children}
    </BasketContextWrapper.Provider>
  );
}

describe("intergration - testing quantity buttons", () => {
  it("should add 2 to the quantity with the id of 2", async () => {
    render(
      <BasketWrap initState={[]}>
        <StoreQuantityButton id={2} />
      </BasketWrap>
    );
    let plusButton = screen.getByRole("button", { name: "plus" });

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    let quantityNumb = await screen.findByRole("button", {
      name: "quantity",
    });
    expect(quantityNumb.textContent).toBe("2");
  });

  it("should remove 2 to the quantity with the id of 2", async () => {
    let initiState = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
      { id: 3, quantity: 4 },
    ];
    render(
      <BasketWrap initState={initiState}>
        <StoreQuantityButton id={2} />
      </BasketWrap>
    );
    let plusButton = screen.getByRole("button", { name: "minus" });

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    let quantityNumb = await screen.findByRole("button", {
      name: "quantity",
    });
    expect(quantityNumb.textContent).toBe("1");
  });
  it("should remove 2 to the quantity with the id of 2", async () => {
    let initiState = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
      { id: 3, quantity: 4 },
    ];
    render(
      <BasketWrap initState={initiState}>
        <StoreQuantityButton id={1} />
      </BasketWrap>
    );
    let plusButton = screen.getByRole("button", { name: "minus" });

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    let quantityNumb = await screen.findByRole("button", {
      name: "quantity",
    });
    expect(quantityNumb.textContent).toBe("0");
  });
});

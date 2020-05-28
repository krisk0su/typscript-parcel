import { createContext } from "react";
import { observable, action } from "mobx";

export class Store {
  @action printS() {
    console.log("heyu from mobx");
  }
}

export const storeContext = createContext(new Store());

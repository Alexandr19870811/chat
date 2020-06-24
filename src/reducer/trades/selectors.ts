import { RootState } from "../index";

export const currentUser = (state: RootState) => state.tradesStore.currentUser

export const currentUserTrades = (state: RootState) => state.tradesStore[state.tradesStore.currentUser]

export const currentUserName = (state: RootState) => state.tradesStore[state.tradesStore.currentUser].name
import React from 'react'
import { connectReduxDevtools } from '@reatom/debug'
import { createStore } from '@reatom/core'
import { mainAppAtom } from './src/Model/atoms'
import { context as ReatomContext } from '@reatom/react'
import { MainView } from "./src/View/MainView"


export const store = createStore(mainAppAtom)

connectReduxDevtools(store)


export default function App() {
  return (
      <ReatomContext.Provider value={store}>
        <MainView />
      </ReatomContext.Provider> 
  )     
}
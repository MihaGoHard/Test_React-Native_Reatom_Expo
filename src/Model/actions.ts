import { declareAction, declareAtom, map, createStore, PayloadActionCreator, ActionCreator } from '@reatom/core'

export const ADD_TODO_ELEM = declareAction<string>()

export const REMOVE_TODO_ELEM = declareAction<string>()

export const MOVE_TODO_ELEM = declareAction()
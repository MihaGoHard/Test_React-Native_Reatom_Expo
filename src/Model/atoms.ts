import { declareAtom, combine, Atom, initAction } from "@reatom/core";
import { addToDoElemToElems, deleteToDoElemFromElems } from "./commonFunctions";
import { ToDoElemType, ToDoProgramm } from "./types";
import { ADD_TODO_ELEM, REMOVE_TODO_ELEM} from "../Model/actions"


const emptyArr: Array<ToDoElemType> = []


export const toDoElemsAtom: Atom<Array<ToDoElemType>> = declareAtom(emptyArr, (on) => [
    on(ADD_TODO_ELEM, (state, payload: string | undefined) => addToDoElemToElems(state, String(payload))),
    on(REMOVE_TODO_ELEM, (state, payload) => deleteToDoElemFromElems(state, String(payload)))
])


export const selectedElemsAtom: Atom<ToDoElemType> = declareAtom(emptyArr, on => [

])


export const commonDepsAtom: Atom<any> = declareAtom({}, on => [

])


const toDoProgAtom = combine({
    toDoElems: toDoElemsAtom,
    selectedElems: selectedElemsAtom
})


export const mainAppAtom: Atom<ToDoProgramm> = combine({
    toDoProg: toDoProgAtom,
    commonDeps: commonDepsAtom
})
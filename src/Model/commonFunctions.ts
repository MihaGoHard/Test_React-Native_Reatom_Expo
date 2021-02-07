import { ToDoElemType, ToDoProgramm } from "./types"


export function createProgramm(): ToDoProgramm {
    return {
        toDoProg: {
            toDoElems: [],
            selectedElems: []
        },
        commonDeps: {
    
        }
    }
}


export function createToDoElem(title: string): ToDoElemType {
    return {
        id: Date.now().toString(),
        title,
        content: ''
    }
}


export function changeToDoElem(toDoElem: ToDoElemType, newTitle: string): ToDoElemType {
    return {
        ...toDoElem,
        title: newTitle
    }
}


export function addToDoElemToElems(toDoElems: Array<ToDoElemType>, title: string): Array<ToDoElemType> {

    return [
        ...toDoElems,
        createToDoElem(title)
    ]
}


export function deleteToDoElemFromElems(toDoElems: Array<ToDoElemType>, delElemId: string): Array<ToDoElemType> { 
    return toDoElems.filter(elem => elem.id != delElemId)
}
export enum StateTypes {
    CREATE_DEFAULT_PROGRAMM,
    CREATE_TODO_ELEM,
    ADD_TODO_ELEM,
    REMOVE_TODO_ELEM,
    MOVE_TODO_ELEM
}


export type ToDoProg = {
    toDoElems: Array<ToDoElemType>,
    selectedElems: Array<string>
}


export type CommonDeps = {

}


export type ToDoProgramm = {
    toDoProg: ToDoProg,
    commonDeps: CommonDeps
}


export type ToDoElemType = {
    id: string,
    title: string,
    content: string
}
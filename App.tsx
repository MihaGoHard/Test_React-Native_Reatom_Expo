import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { NavBar } from './src/View/NavBar'
import { ToDoElem } from './src/View/ToDoElem'
import { createStore } from '@reatom/core'
import { initialState, toDoElemsAtom } from './src/Model/atoms'
import { AddToDoElem } from './src/View/AddToDoElem'
import { ToDoElemType } from './src/Model/types'


export const store = createStore(initialState)

export const dispatch = store.dispatch

export const subscribe = store.subscribe


export default function App() {

    const [toDoElems, setToDoElems] = useState<Array<ToDoElemType>>([])

    subscribe(toDoElemsAtom, (toDoElems: Array<ToDoElemType>) => setToDoElems(toDoElems))

    return (
        <View>
            <NavBar title='ToDo App'/>
            <View style={styles.container}>
                <AddToDoElem />
                <FlatList                    
                  style={styles.flatList}
                  data={toDoElems}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (<ToDoElem toDo={item} />)}
                  keyboardShouldPersistTaps="handled"    
                /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }, 
  flatList: {
    height: '80%'
  }
})
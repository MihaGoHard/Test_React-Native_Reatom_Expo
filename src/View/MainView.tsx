import React  from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { NavBar } from './NavBar'
import ToDoElem from './ToDoElem'
import { toDoElemsAtom } from '../Model/atoms'
import { AddToDoElem } from './AddToDoElem'
import { useAtom } from '@reatom/react'


export const MainView = () => {

    const toDoElems = useAtom(toDoElemsAtom)

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
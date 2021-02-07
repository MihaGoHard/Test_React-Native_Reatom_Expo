import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'   //touchableOpacity мониторит нажатие на компонент внутри него, меняет прозрачность, при нажатии  
import { dispatch } from '../../App'
import { REMOVE_TODO_ELEM } from '../Model/actions'

interface toDoProps {
    toDo: {
        id: string,
        title: string
    }
}


export const ToDoElem = (props: toDoProps) => {

    const onLongPressHandler = () => {
        dispatch(REMOVE_TODO_ELEM(props.toDo.id))
    }
  
    return (
        <TouchableOpacity 
            activeOpacity={0.3}
            onPress={() => console.log('pressed')}
            onLongPress={onLongPressHandler}
        >            
            <View style={styles.toDo}>
                <Text>{props.toDo.title}</Text>
            </View>
        </TouchableOpacity>        
    )    
}


const styles = StyleSheet.create({   //вопрос по скроллу
    toDo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10
    }
})
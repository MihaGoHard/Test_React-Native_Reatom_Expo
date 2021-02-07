import { createStore, declareAction, declareAtom, map } from '@reatom/core'
import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import { dispatch, store } from '../../App'
import { ADD_TODO_ELEM } from '../Model/actions'
import { toDoElemsAtom } from '../Model/atoms'


export const AddToDoElem = () => {

    const [value, setValue] = useState<string>('')


    const pressHandler = () => {
        if (value.trim()) {                                   //проверка на пустую строку                          
            dispatch(ADD_TODO_ELEM(value))              //props.addToDo(value)
            setValue('')
        } else {
            Alert.alert('заполните поле ввода')
        }   
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='введите задачу...'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title="отправить" onPress={pressHandler}/>
        </View>    
    )    
}


const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: 'black'
    }
})


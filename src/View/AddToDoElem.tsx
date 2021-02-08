import { createStore, declareAction, declareAtom, map } from '@reatom/core'
import { useAction } from '@reatom/react'
import React, {useRef, useState} from 'react'
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import { ADD_TODO_ELEM } from '../Model/actions'


export const AddToDoElem = () => {

    const [value, setValue] = useState<string>('')

    const inputRef = useRef<TextInput>(null)

    const addElem = useAction(ADD_TODO_ELEM)

    const pressHandler = () => {
        if (value.trim()) {                                   //проверка на пустую строку                          
            addElem(value)
            setValue('')
        } else {
            Alert.alert('заполните поле ввода')
        }   
    }

    return (
        <View style={styles.block}>
            <TextInput 
                ref={inputRef}
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


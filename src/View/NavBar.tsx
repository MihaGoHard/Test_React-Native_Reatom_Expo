import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

interface navBarProps {
    title: string
}

export const NavBar = (props: navBarProps) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>    
    )    
}


const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#3949ab',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 5
    }
})


import React, { useState } from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const Login = () => {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <>
            <Text>Username</Text>
            <TextInput onChangeText={onChangeUsername} value={username} style={styles.input}/>
            <Text>Password</Text>
            <TextInput onChangeText={onChangePassword} value={password} secureTextEntry style={styles.input}/>
            <Text>{username} and {password}</Text>
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40, 
        width: 200,
        margin: 12, 
        borderWidth: 1,
    }
})

export default Login

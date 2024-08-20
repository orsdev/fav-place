import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../constants';
import { ImagePicker } from '../ui';

export const PlaceForm = () => {

    const { handleSubmit, control, setValue } = useForm({
        defaultValues: {
            address: ""
        },
    });

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <ImagePicker />
            <Controller
                control={control}
                name="address"
                render={({ fieldState, field: { onChange, onBlur, value } }) => {
                    return (
                        <View style={styles.inputContainer}>
                            <Text style={styles.textColor}>Title</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder=""
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="default"
                            />
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 50,
        gap: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    textColor: {
        color: Colors.primary200
    },
    inputContainer: {
        width: '100%'
    },
    input: {
        marginTop: 10,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
        color: '#fff',
        borderColor: Colors.primary700
    }
})


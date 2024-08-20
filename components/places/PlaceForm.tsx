import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const PlaceForm = () => {

    const { handleSubmit, control, setValue } = useForm({
        defaultValues: {
            address: ""
        },
    });

    return (
        <View>
            <Controller
                control={control}
                name="address"
                render={({ fieldState, field: { onChange, onBlur, value } }) => {
                    return (
                        <View>
                            <Text>Label</Text>
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
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    input: {}
})


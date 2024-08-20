import React, { useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import * as Picker from 'expo-image-picker';
import { Colors } from '../../constants';

export const ImagePicker = () => {
    const [cameraPermissionInformation, requestPermission] =
        Picker.useCameraPermissions();
    const [image, setImage] = useState<string | null>(null);

    async function verifyPermissions() {
        if (!cameraPermissionInformation) return;

        if (cameraPermissionInformation.status === Picker.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === Picker.PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.'
            );
            return false;
        }

        return true;
    }


    const pickImage = async () => {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        setImage(null);
        // No permissions request is necessary for launching the image library
        let result = await Picker.launchImageLibraryAsync({
            mediaTypes: Picker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View style={styles.pickerContainer}>
            <Pressable onPress={pickImage} style={({ pressed }) => [styles.imagePicker, pressed && styles.pressedPicker]}>
                <Text style={{ color: '#fff' }}>Pick image</Text>
            </Pressable>
            {image &&
                <View style={styles.imageContainer}>
                    <Pressable style={styles.changeImage} onPress={pickImage}>
                        <Text style={{ color: '#fff' }}>Change image</Text>
                    </Pressable>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerContainer: {
        position: 'relative',
        height: 120,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: Colors.primary700,
        borderRadius: 15,
        width: 150,
    },
    imagePicker: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    pressedPicker: {
        opacity: .5
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    changeImage: {
        position: 'absolute',
        borderRadius: 5,
        backgroundColor: Colors.gray700,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        paddingVertical: 5,
        height: 30,
        zIndex: 5
    }
})
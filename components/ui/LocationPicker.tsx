import { Alert, StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants"
import { OutlinedButton } from "./OutlineButton"
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useState } from "react";

export const LocationPicker = () => {
    const [pickedLocation, setPickedLocation] = useState<{
        lat: number;
        lng: number;
    }>();
    const [locationPermissionInformation, requestPermission] =
        useForegroundPermissions() as any;

    async function verifyPermissions() {
        if (
            locationPermissionInformation.status === PermissionStatus.UNDETERMINED
        ) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permissions to use this app.'
            );
            return false;
        }

        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const location = await getCurrentPositionAsync();
        console.log(location);
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
    }

    function pickOnMapHandler() { }

    return (
        <View style={styles.container}>
            <View style={styles.mapPreview}>
                <Text style={{
                    color: '#000'
                }}>I don't have an api key</Text>
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        padding: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
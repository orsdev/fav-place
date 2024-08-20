import { Colors } from '../../constants';
import { IPlace } from '../../interfaces/place.interface';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"

interface IPlacesList {
    places: IPlace[];
};

interface IPlaceItem {
    place: IPlace;
    handlePress(): void;
}

const PlaceItem = ({ place, handlePress }: IPlaceItem) => {
    return (
        <Pressable style={styles.itemPressable} onPress={handlePress}>
            <Image source={{ uri: place.imageUrl }} />
            <View>
                <Text style={[styles.textColor]}>{place.title}</Text>
                <Text style={[styles.textColor]}>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export const PlacesList = ({ places }: IPlacesList) => {
    if(!places || !places.length) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={[styles.fallbackText, styles.textColor]}>No places added yet - start adding some!</Text>
            </View>
        )
    }
    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PlaceItem place={item} handlePress={() => {
                console.log('clicked')
            }} />}
        />
    )
}

const styles = StyleSheet.create({
    itemPressable: {

    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16
    },
    textColor:  {
        color: Colors.primary200
    }
})
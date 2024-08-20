import { StyleSheet, Text, View } from "react-native"
import { PlacesList } from "../components/places";

const AllPlacesPage = () => {
    return ( 
    <>
    <PlacesList places={[]}  />
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AllPlacesPage;
import { StyleSheet, Text, View } from "react-native"
import { PlaceForm } from "../components/places";

const AddPlacesPage = () => {
    return (
        <>
           <PlaceForm />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AddPlacesPage;
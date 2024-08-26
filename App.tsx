import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet } from 'react-native';
import AllPlacesPage from './screens/AllPlaces';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AddPlacesPage from './screens/AddPlaces';
import { Colors } from './constants';

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY!

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerShadowVisible: false, // TODO: Hide header bottom shadow
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          }
        }}>
          <Stack.Screen
            name="home"
            component={AllPlacesPage}
            options={({ navigation }) => ({
              title: '',
              headerRight: ({ tintColor }) => {
                return (
                  <Pressable
                    onPress={() => navigation.navigate('add')}
                    style={({ pressed }) => [pressed && styles.pressedButton]}>
                    <Ionicons name="add" size={25} color={tintColor} />
                  </Pressable>
                )
              }
            })}
          />
          <Stack.Screen
            name="add"
            options={{
              title: ''
            }}
            component={AddPlacesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedButton: {
    opacity: .6
  }
});

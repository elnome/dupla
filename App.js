import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>pikajju</Text>
      <Text>fala mano</Text>
      <Text>qual foi macaco</Text>
      <Text>so de boa?</Text>
      <Text>tranquilidade uai</Text>
      <Text>e por ai?</Text>
      <Text>de boa dms uai</Text>
      <Text>trabalho da porra </Text>
      <Text>entt neh zé, tem q ver oq nois vai faze </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

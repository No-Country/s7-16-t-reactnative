import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Example from './src/Example'

export default function App() {
	return (
		<View style={styles.container}>
			<Example />
			{/* <Text>Open up App.tsx to start working on your app!</Text> */}
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

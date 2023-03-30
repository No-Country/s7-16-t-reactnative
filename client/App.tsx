import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner'

export default function App() {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState<boolean>(false)

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()

			setHasPermission(status === 'granted')
		}

		getBarCodeScannerPermissions()
	}, [])

	const handleBarCodeScanned = (result: BarCodeScannerResult) => {
		setScanned(true)
		alert(
			`Bar code with type ${result.type} and data ${result.data} has been scanned!`
		)
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
				barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
				type={BarCodeScanner.Constants.Type.back}
			/>
			{scanned && (
				<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

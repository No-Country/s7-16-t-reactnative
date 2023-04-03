import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

interface Props {
	text: string
	onPress: () => void
	cancel?: boolean
}

export const NavigateButton = ({ text, onPress, cancel }: Props) => {
	return (
		<TouchableOpacity style={styles.touchable} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>

			{cancel ? (
				<Feather
					name='x'
					size={24}
					color='#212121'
					style={{ textAlign: 'center' }}
				/>
			) : (
				<MaterialIcons
					name='arrow-forward-ios'
					size={24}
					color='#212121'
					style={{ textAlign: 'center' }}
				/>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	touchable: {
		borderRadius: 3,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		height: 54,
		width: 326,
		borderWidth: 1,
		borderColor: 'rgb(224,224,224)',
		paddingHorizontal: 12,
	},
	text: {
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 24,
	},
})

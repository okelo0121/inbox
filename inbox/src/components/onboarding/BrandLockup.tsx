import { Image, Text, View } from 'react-native'

export function BrandLockup() {
  return (
    <View className="items-center">
      <Image
        accessibilityLabel="inbox logo"
        className="mb-4 h-24 w-24"
        resizeMode="contain"
        source={require('../../../assets/icon.png')}
      />
      <Text className="text-display text-text-primary">
        inbox<Text className="text-primary-strong">.</Text>
      </Text>
    </View>
  )
}

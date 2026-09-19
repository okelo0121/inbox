import { Image, Text, View } from 'react-native'

type BrandLockupProps = {
  compact?: boolean
}

export function BrandLockup({ compact = false }: BrandLockupProps) {
  return (
    <View className="items-center">
      <Image
        accessibilityLabel="inbox logo"
        className={compact ? 'mb-2 h-10 w-10' : 'mb-4 h-24 w-24'}
        resizeMode="contain"
        source={require('../../../assets/icon.png')}
      />
      <Text className={compact ? 'text-title text-text-primary' : 'text-display text-text-primary'}>
        inbox<Text className="text-primary-strong">.</Text>
      </Text>
    </View>
  )
}

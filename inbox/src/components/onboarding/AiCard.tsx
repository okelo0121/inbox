import { Text, View } from 'react-native'

export function AiCard() {
  return (
    <View className="w-full max-w-xs rounded-card border border-border bg-surface p-4 shadow-card">
      <View className="mb-5 flex-row items-center">
        <View className="mr-3 h-10 w-10 items-center justify-center rounded-control bg-primary-soft">
          <Text className="text-heading text-primary-strong">✦</Text>
        </View>
        <View>
          <Text className="text-label text-text-primary">inbox. AI</Text>
          <Text className="text-caption text-text-muted">Your onchain assistant</Text>
        </View>
      </View>
      <Text className="text-body text-text-primary">You swapped 25 USDC for 0.24 SOL on Jupiter.</Text>
      <Text className="mt-4 text-caption text-text-muted">Why?</Text>
    </View>
  )
}

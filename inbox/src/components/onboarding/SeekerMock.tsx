import { Text, View } from 'react-native'

export function SeekerMock() {
  return (
    <View className="h-64 w-36 items-center rounded-card border-2 border-border-strong bg-surface-elevated px-3 pt-3 shadow-card">
      <View className="mb-7 h-1 w-12 rounded-pill bg-text-muted opacity-60" />
      <View className="h-32 w-24 items-center justify-center rounded-control border border-border bg-background">
        <Text className="text-3xl text-primary-strong">≋</Text>
        <Text className="mt-2 text-caption text-text-primary">SEEKER</Text>
      </View>
      <Text className="mt-4 text-caption text-text-muted">secure by design</Text>
    </View>
  )
}

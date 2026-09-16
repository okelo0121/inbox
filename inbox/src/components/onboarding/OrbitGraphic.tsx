import { Text, View } from 'react-native'

const features = [
  { label: 'Payments', icon: '$', position: 'left-0 top-10' },
  { label: 'Security', icon: 'S', position: 'right-0 top-8' },
  { label: 'Agents', icon: '✦', position: 'left-4 bottom-5' },
  { label: 'Apps', icon: '▦', position: 'right-4 bottom-4' },
]

export function OrbitGraphic() {
  return (
    <View className="h-56 w-full max-w-xs items-center justify-center">
      <View className="absolute h-40 w-64 rounded-pill border border-border opacity-70" />
      <View
        className="absolute h-24 w-56 rounded-pill border border-border opacity-50"
        style={{ transform: [{ rotate: '28deg' }] }}
      />
      <View className="h-20 w-20 items-center justify-center rounded-card border border-primary bg-primary-soft shadow-glow">
        <Text className="text-4xl text-text-primary">≋</Text>
      </View>
      {features.map((feature) => (
        <View key={feature.label} className={`absolute ${feature.position} items-center`}>
          <View className="h-11 w-11 items-center justify-center rounded-control border border-border bg-surface-elevated">
            <Text className="text-heading text-primary-strong">{feature.icon}</Text>
          </View>
          <Text className="mt-1 text-caption text-text-muted">{feature.label}</Text>
        </View>
      ))}
    </View>
  )
}

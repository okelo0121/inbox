import { View } from 'react-native'

const bars = [25, 38, 30, 48, 40, 62, 51, 78, 68, 92]

export function Sparkline() {
  return (
    <View className="h-16 flex-row items-end justify-end gap-1">
      {bars.map((height, index) => (
        <View
          key={index}
          className={`w-1.5 rounded-pill ${index > 6 ? 'bg-primary-strong' : 'bg-primary-soft'}`}
          style={{ height }}
        />
      ))}
    </View>
  )
}

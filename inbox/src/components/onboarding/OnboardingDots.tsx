import { View } from 'react-native'

type OnboardingDotsProps = {
  activeIndex: number
}

export function OnboardingDots({ activeIndex }: OnboardingDotsProps) {
  return (
    <View className="h-4 flex-row items-center justify-center gap-2">
      {[0, 1, 2, 3].map((index) => (
        <View
          key={index}
          className={`h-1.5 rounded-pill ${index === activeIndex ? 'w-5 bg-text-primary' : 'w-1.5 bg-text-muted opacity-60'}`}
        />
      ))}
    </View>
  )
}

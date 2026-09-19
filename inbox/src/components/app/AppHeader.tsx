import { Pressable, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { BrandLockup } from '../onboarding'

type AppHeaderProps = {
  title?: string
  back?: boolean
  action?: string
  onAction?: () => void
}

export function AppHeader({ title, back = false, action, onAction }: AppHeaderProps) {
  const router = useRouter()

  return (
    <View className="flex-row items-center justify-between px-5 pb-3 pt-4">
      <View className="flex-row items-center">
        {back ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            className="mr-3 h-10 w-10 items-center justify-center rounded-pill active:bg-surface-muted"
            onPress={() => router.back()}
          >
            <Text className="text-title text-text-primary">‹</Text>
          </Pressable>
        ) : null}
        {title ? <Text className="text-heading text-text-primary">{title}</Text> : <BrandLockup compact />}
      </View>
      {action ? (
        <Pressable
          accessibilityRole="button"
          className="min-h-10 min-w-10 items-center justify-center rounded-pill active:bg-surface-muted"
          onPress={onAction}
        >
          <Text className="text-heading text-text-primary">{action}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

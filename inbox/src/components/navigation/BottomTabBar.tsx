import { Pressable, Text, View } from 'react-native'
import { usePathname, useRouter } from 'expo-router'

type Tab = {
  label: string
  icon: string
  route: '/home' | '/inbox' | '/security' | '/profile'
}

const tabs: Tab[] = [
  { label: 'Home', icon: '⌂', route: '/home' },
  { label: 'Inbox', icon: '▤', route: '/inbox' },
  { label: 'Security', icon: '◈', route: '/security' },
  { label: 'Profile', icon: '○', route: '/profile' },
]

export function BottomTabBar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <View className="border-t border-border bg-background px-4 pb-2 pt-2">
      <View className="flex-row justify-between">
        {tabs.map((tab) => {
          const active = pathname === tab.route || (tab.route === '/home' && pathname === '/')
          return (
            <Pressable
              key={tab.route}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              className="min-h-12 min-w-16 items-center justify-center rounded-control active:bg-surface-muted"
              onPress={() => router.replace(tab.route)}
            >
              <Text className={`text-heading ${active ? 'text-primary-strong' : 'text-text-muted'}`}>{tab.icon}</Text>
              <Text className={`mt-1 text-caption ${active ? 'text-text-primary' : 'text-text-muted'}`}>
                {tab.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

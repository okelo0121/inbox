import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader, Sparkline } from '../components/app'
import { BottomTabBar } from '../components/navigation'
import { Card } from '../components/ui'

const needsAttention = [
  { icon: '✦', title: 'Agent wants to spend', detail: '$47.20 at Amazon · Just now', action: 'Review' },
  { icon: '$', title: 'You received', detail: '125 USDC · 18 min ago', action: 'View' },
  { icon: '▦', title: 'App permission changed', detail: 'Jupiter Swap · 1 hour ago', action: 'View' },
]

const activity = [
  { icon: '$', title: 'Payment received', detail: '+125 USDC from Maya', amount: '+125 USDC', positive: true },
  { icon: '↗', title: 'Swap completed', detail: '25 USDC → 0.24 SOL via Jupiter', amount: '-25 USDC', positive: false },
  { icon: 'S', title: 'New app permission', detail: 'Phantom requested access', amount: 'Today', positive: false },
]

export default function Home() {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <AppHeader action="♧" />
      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-5" showsVerticalScrollIndicator={false}>
        <View className="mt-4">
          <Text className="text-caption text-text-muted">Good morning, Okelo</Text>
          <Text className="mt-1 text-title text-text-primary">Your day at a glance</Text>
        </View>
        <Card className="mt-6 border-primary bg-surface-elevated p-5">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-label text-text-secondary">Total balance</Text>
              <Text className="mt-2 text-display text-text-primary">$1,284.42</Text>
              <Text className="mt-1 text-caption text-success">+$42.18 today</Text>
            </View>
            <Sparkline />
          </View>
          <View className="mt-5 flex-row justify-between border-t border-border pt-4">
            <Text className="text-caption text-text-muted">SOL 2.18</Text>
            <Text className="text-caption text-text-muted">USDC 842.20</Text>
            <Text className="text-caption text-text-muted">NFTs 04</Text>
          </View>
        </Card>
        <View className="mt-4 flex-row justify-between">
          {[
            ['↗', 'Send'],
            ['↓', 'Receive'],
            ['↔', 'Swap'],
            ['•••', 'More'],
          ].map(([icon, label]) => (
            <Pressable key={label} className="w-16 items-center" onPress={() => undefined}>
              <View className="h-11 w-11 items-center justify-center rounded-control border border-border bg-surface">
                <Text className="text-heading text-primary-strong">{icon}</Text>
              </View>
              <Text className="mt-2 text-caption text-text-secondary">{label}</Text>
            </Pressable>
          ))}
        </View>
        <View className="mt-8 flex-row items-center justify-between">
          <Text className="text-heading text-text-primary">What needs you</Text>
          <Pressable className="min-h-10 justify-center" onPress={() => router.replace('/inbox')}>
            <Text className="text-label text-primary-strong">See all</Text>
          </Pressable>
        </View>
        <View className="mt-2 gap-2">
          {needsAttention.map((item, index) => (
            <Pressable key={item.title} onPress={() => index === 0 && router.push('/event/agent-request')}>
              <Card className="flex-row items-center p-3 active:bg-surface-muted">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-control bg-primary-soft">
                  <Text className="text-heading text-primary-strong">{item.icon}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-label text-text-primary">{item.title}</Text>
                  <Text className="mt-1 text-caption text-text-muted">{item.detail}</Text>
                </View>
                <Text className="text-caption text-primary-strong">{item.action}</Text>
              </Card>
            </Pressable>
          ))}
        </View>
        <View className="mt-8 flex-row items-center justify-between">
          <Text className="text-heading text-text-primary">Today</Text>
          <Text className="text-label text-text-muted">3 items</Text>
        </View>
        <Card className="mt-2 p-2">
          {activity.map((item, index) => (
            <Pressable
              key={item.title}
              className={`flex-row items-center px-2 py-3 ${index ? 'border-t border-border' : ''}`}
              onPress={() => router.replace('/inbox')}
            >
              <View className="mr-3 h-9 w-9 items-center justify-center rounded-control bg-surface-muted">
                <Text className="text-label text-primary-strong">{item.icon}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-label text-text-primary">{item.title}</Text>
                <Text className="mt-1 text-caption text-text-muted">{item.detail}</Text>
              </View>
              <Text className={`text-caption ${item.positive ? 'text-success' : 'text-text-secondary'}`}>
                {item.amount}
              </Text>
            </Pressable>
          ))}
        </Card>
      </ScrollView>
      <BottomTabBar />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

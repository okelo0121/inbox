import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader } from '../components/app'
import { BottomTabBar } from '../components/navigation'
import { Card } from '../components/ui'

const filters = ['All', 'Money', 'Security', 'Agents', 'Apps'] as const
type Filter = (typeof filters)[number]

const events = [
  {
    icon: '✦',
    title: 'Agent request',
    detail: 'Shopping agent wants permission to spend $47.20',
    time: '2m ago',
    group: 'Today',
    filter: 'Agents',
    unread: true,
    route: '/event/agent-request',
  },
  {
    icon: '$',
    title: 'Payment received',
    detail: '+125 USDC from Maya',
    time: '18m ago',
    group: 'Today',
    filter: 'Money',
    unread: true,
  },
  {
    icon: '↗',
    title: 'Swap completed',
    detail: '25 USDC → 0.24 SOL via Jupiter',
    time: '1h ago',
    group: 'Today',
    filter: 'Money',
    unread: false,
  },
  {
    icon: 'S',
    title: 'New app permission',
    detail: 'Phantom requested access',
    time: '3h ago',
    group: 'Today',
    filter: 'Apps',
    unread: false,
  },
  {
    icon: '◈',
    title: 'DAO vote',
    detail: 'Proposal #042 expires in 3 hours',
    time: 'Yesterday',
    group: 'Yesterday',
    filter: 'Security',
    unread: false,
  },
]

export default function Inbox() {
  const router = useRouter()
  const [selected, setSelected] = useState<Filter>('All')
  const visible = events.filter((event) => selected === 'All' || event.filter === selected)

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <AppHeader title="Inbox" action="⌕" />
      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-5" showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mx-1"
          contentContainerClassName="gap-2 px-1"
        >
          {filters.map((filter) => (
            <Pressable
              key={filter}
              className={`rounded-pill border px-4 py-2.5 ${selected === filter ? 'border-primary bg-primary' : 'border-border bg-surface'}`}
              onPress={() => setSelected(filter)}
            >
              <Text className={`text-label ${selected === filter ? 'text-text-primary' : 'text-text-secondary'}`}>
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        {visible.length === 0 ? (
          <Card className="mt-8 items-center px-6 py-10">
            <Text className="text-display text-primary-strong">○</Text>
            <Text className="mt-4 text-heading text-text-primary">Nothing here yet</Text>
            <Text className="mt-2 text-center text-body text-text-secondary">
              New {selected.toLowerCase()} activity will appear in this view.
            </Text>
          </Card>
        ) : (
          <View className="mt-7">
            {['Today', 'Yesterday'].map((group) => {
              const groupEvents = visible.filter((event) => event.group === group)
              if (!groupEvents.length) return null
              return (
                <View key={group} className="mb-7">
                  <Text className="mb-3 text-caption uppercase tracking-widest text-text-muted">{group}</Text>
                  <Card className="p-2">
                    {groupEvents.map((event, index) => (
                      <Pressable
                        key={event.title}
                        className={`flex-row items-center px-2 py-3 ${index ? 'border-t border-border' : ''}`}
                        onPress={() => event.route && router.push(event.route as never)}
                      >
                        <View className="mr-3 h-10 w-10 items-center justify-center rounded-control bg-primary-soft">
                          <Text className="text-heading text-primary-strong">{event.icon}</Text>
                        </View>
                        <View className="flex-1">
                          <View className="flex-row items-center">
                            {event.unread ? <View className="mr-2 h-2 w-2 rounded-pill bg-primary" /> : null}
                            <Text className="text-label text-text-primary">{event.title}</Text>
                          </View>
                          <Text className="mt-1 text-caption text-text-muted">{event.detail}</Text>
                        </View>
                        <Text className="text-caption text-text-muted">{event.time}</Text>
                      </Pressable>
                    ))}
                  </Card>
                </View>
              )
            })}
          </View>
        )}
      </ScrollView>
      <BottomTabBar />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

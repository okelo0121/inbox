import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader } from '../components/app'
import { BottomTabBar } from '../components/navigation'
import { Card } from '../components/ui'

export default function Security() {
  const [protectedMode, setProtectedMode] = useState(true)
  const [agentEnabled, setAgentEnabled] = useState(true)

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <AppHeader title="Security" action="⋯" />
      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-5" showsVerticalScrollIndicator={false}>
        <Card className={`mt-4 p-5 ${protectedMode ? 'border-success' : 'border-danger'}`}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View
                className={`mr-3 h-11 w-11 items-center justify-center rounded-control ${protectedMode ? 'bg-primary-soft' : 'bg-surface-muted'}`}
              >
                <Text className={`text-heading ${protectedMode ? 'text-success' : 'text-danger'}`}>
                  {protectedMode ? '✓' : '!'}
                </Text>
              </View>
              <View>
                <Text className="text-heading text-text-primary">
                  {protectedMode ? 'Protected' : 'Needs attention'}
                </Text>
                <Text className="mt-1 text-caption text-text-muted">No security alerts</Text>
              </View>
            </View>
            <Pressable
              className="min-h-10 min-w-10 items-center justify-center rounded-pill bg-surface-muted"
              onPress={() => setProtectedMode((value) => !value)}
            >
              <Text className="text-heading text-text-primary">↻</Text>
            </Pressable>
          </View>
        </Card>
        <Text className="mt-7 text-heading text-text-primary">Agent permissions</Text>
        <Card className="mt-3 p-2">
          <View className="flex-row items-center px-2 py-3">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-control bg-primary-soft">
              <Text className="text-heading text-primary-strong">a</Text>
            </View>
            <View className="flex-1">
              <Text className="text-label text-text-primary">Shopping Agent</Text>
              <Text className="mt-1 text-caption text-text-muted">$100 max transaction</Text>
            </View>
            <Pressable
              className={`rounded-pill px-3 py-2 ${agentEnabled ? 'bg-primary-soft' : 'bg-surface-muted'}`}
              onPress={() => setAgentEnabled((value) => !value)}
            >
              <Text className={`text-caption ${agentEnabled ? 'text-success' : 'text-text-muted'}`}>
                {agentEnabled ? 'Active' : 'Paused'}
              </Text>
            </Pressable>
          </View>
          <View className="flex-row items-center border-t border-border px-2 py-3">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-control bg-surface-muted">
              <Text className="text-heading text-primary-strong">↔</Text>
            </View>
            <View className="flex-1">
              <Text className="text-label text-text-primary">Trading Agent</Text>
              <Text className="mt-1 text-caption text-text-muted">Swap permissions</Text>
            </View>
            <Text className="text-caption text-success">Active</Text>
          </View>
        </Card>
        <Text className="mt-7 text-heading text-text-primary">Recent activity</Text>
        <Card className="mt-3 p-2">
          {[
            ['✓', 'Agent request approved', '2h ago'],
            ['!', 'Spend limit reached', '5h ago'],
          ].map(([icon, title, time], index) => (
            <View key={title} className={`flex-row items-center px-2 py-3 ${index ? 'border-t border-border' : ''}`}>
              <View className="mr-3 h-9 w-9 items-center justify-center rounded-control bg-surface-muted">
                <Text className="text-label text-primary-strong">{icon}</Text>
              </View>
              <Text className="flex-1 text-label text-text-primary">{title}</Text>
              <Text className="text-caption text-text-muted">{time}</Text>
            </View>
          ))}
        </Card>
        <Card className="mt-4 border-success bg-surface-muted p-4">
          <Text className="text-label text-success">Your wallet is protected</Text>
          <Text className="mt-1 text-caption text-text-secondary">No unusual activity detected.</Text>
        </Card>
      </ScrollView>
      <BottomTabBar />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

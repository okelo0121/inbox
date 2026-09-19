import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader } from '../../components/app'
import { BottomTabBar } from '../../components/navigation'
import { Card } from '../../components/ui'

type Decision = 'pending' | 'approved' | 'rejected'

export default function AgentRequest() {
  const [decision, setDecision] = useState<Decision>('pending')

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <AppHeader title="Agent request" back />
      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-6" showsVerticalScrollIndicator={false}>
        <Text className="text-caption text-text-muted">2m ago</Text>
        <Card className="mt-4 p-5">
          <View className="flex-row items-center">
            <View className="mr-3 h-12 w-12 items-center justify-center rounded-control border border-border bg-surface-muted">
              <Text className="text-title text-text-primary">a</Text>
            </View>
            <View>
              <Text className="text-heading text-text-primary">Shopping Agent</Text>
              <Text className="mt-1 text-caption text-text-muted">Wants permission to spend</Text>
            </View>
          </View>
          <Text className="mt-6 text-display text-text-primary">$47.20</Text>
          <Text className="mt-1 text-body text-text-secondary">Amazon · Electronics</Text>
        </Card>
        <Text className="mt-7 text-heading text-text-primary">Why this request?</Text>
        <Card className="mt-3 p-4">
          <Text className="text-body text-text-primary">
            Your shopping agent found an item matching your saved shopping preference.
          </Text>
        </Card>
        <Text className="mt-7 text-heading text-text-primary">Permission details</Text>
        <Card className="mt-3 p-4">
          {[
            ['Maximum spend', '$100'],
            ['This purchase', '$47.20'],
            ['Recipient', 'Verified · amazon.com'],
          ].map(([label, value], index) => (
            <View key={label} className={`flex-row justify-between py-3 ${index ? 'border-t border-border' : ''}`}>
              <Text className="text-body text-text-secondary">{label}</Text>
              <Text className="text-label text-text-primary">{value}</Text>
            </View>
          ))}
        </Card>
        {decision === 'pending' ? (
          <View className="mt-8 flex-row gap-3">
            <Pressable
              className="flex-1 items-center justify-center rounded-control bg-surface-muted py-4 active:bg-surface-elevated"
              onPress={() => setDecision('rejected')}
            >
              <Text className="text-label text-text-secondary">Reject</Text>
            </Pressable>
            <Pressable
              className="flex-1 items-center justify-center rounded-control bg-primary py-4 active:bg-primary-strong"
              onPress={() => setDecision('approved')}
            >
              <Text className="text-label text-text-primary">Approve</Text>
            </Pressable>
          </View>
        ) : (
          <Card className={`mt-8 ${decision === 'approved' ? 'border-success' : 'border-danger'} p-4`}>
            <Text className={`text-label ${decision === 'approved' ? 'text-success' : 'text-danger'}`}>
              {decision === 'approved' ? 'Approved in simulation' : 'Rejected in simulation'}
            </Text>
            <Text className="mt-2 text-caption text-text-secondary">
              No transaction was submitted. This is a UI preview.
            </Text>
          </Card>
        )}
      </ScrollView>
      <BottomTabBar />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

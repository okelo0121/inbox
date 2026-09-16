import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { BrandLockup } from '../components/onboarding'

export default function Home() {
  return (
    <View className="flex-1 bg-background px-6 pt-16">
      <View className="items-start">
        <BrandLockup />
      </View>
      <View className="mt-12 rounded-card border border-border bg-surface p-5">
        <Text className="text-heading text-text-primary">Your inbox is ready.</Text>
        <Text className="mt-2 text-body text-text-secondary">
          Your payments, security, agents and opportunities will live here.
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  )
}

import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader } from '../components/app'
import { BottomTabBar } from '../components/navigation'
import { Card } from '../components/ui'

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <AppHeader title="Profile" action="⋯" />
      <View className="flex-1 px-5">
        <Card className="mt-4 items-center p-6">
          <View className="h-16 w-16 items-center justify-center rounded-pill bg-primary-soft">
            <Text className="text-title text-primary-strong">O</Text>
          </View>
          <Text className="mt-4 text-heading text-text-primary">Okelo</Text>
          <Text className="mt-1 text-caption text-text-muted">Devnet preview</Text>
        </Card>
        <Card className="mt-4 p-4">
          <Text className="text-label text-text-primary">Wallet</Text>
          <Text className="mt-2 text-caption text-text-muted">Not connected</Text>
          <Text className="mt-4 text-label text-primary-strong">Connect during integration</Text>
        </Card>
        <Card className="mt-4 p-4">
          <Text className="text-label text-text-primary">App settings</Text>
          <Text className="mt-3 text-body text-text-secondary">Notifications</Text>
          <Text className="mt-3 text-body text-text-secondary">Network: Devnet</Text>
        </Card>
      </View>
      <BottomTabBar />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

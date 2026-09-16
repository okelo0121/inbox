import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { useRef, useState, type ReactNode } from 'react'
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native'
import { AiCard, BrandLockup, OnboardingDots, OrbitGraphic, SeekerMock } from '../components/onboarding'
import { Button } from '../components/ui'

const { width: screenWidth } = Dimensions.get('window')

type PageProps = {
  children: ReactNode
  title?: string
  description?: string
}

function Page({ children, title, description }: PageProps) {
  return (
    <View style={{ width: screenWidth }} className="flex-1 items-center px-6 pt-16">
      {title ? <Text className="w-full text-title text-text-primary">{title}</Text> : null}
      {description ? <Text className="mt-3 w-full text-body text-text-secondary">{description}</Text> : null}
      <View className="w-full flex-1 items-center justify-center">{children}</View>
    </View>
  )
}

export default function Onboarding() {
  const router = useRouter()
  const scrollRef = useRef<ScrollView>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPage = (index: number) => {
    scrollRef.current?.scrollTo({ x: screenWidth * index, animated: true })
    setActiveIndex(index)
  }

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / screenWidth))
  }

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      >
        <Page>
          <BrandLockup />
          <Text className="mt-8 text-center text-body text-text-secondary">Your onchain life, in one place.</Text>
          <View className="mt-12 w-full">
            <Button className="rounded-card py-4" onPress={() => goToPage(1)}>
              Get Started
            </Button>
            <Pressable className="mt-5 min-h-10 items-center justify-center" onPress={() => router.push('/home')}>
              <Text className="text-caption text-text-muted">I already have an account</Text>
            </Pressable>
          </View>
        </Page>

        <Page
          title="Everything in one place"
          description="Payments, security, agents, opportunities and more — right in your inbox."
        >
          <OrbitGraphic />
          <Button className="mt-10 w-full rounded-card py-4" onPress={() => goToPage(2)}>
            Next
          </Button>
        </Page>

        <Page
          title="Your AI assistant"
          description="Get clear explanations, smart insights and the right actions — automatically."
        >
          <AiCard />
          <Button className="mt-10 w-full rounded-card py-4" onPress={() => goToPage(3)}>
            Next
          </Button>
        </Page>

        <Page title="Built for Seeker" description="Secure, simple and designed for the Seeker ecosystem.">
          <SeekerMock />
          <View className="mt-8 w-full">
            <Button className="rounded-card py-4" onPress={() => router.replace('/home')}>
              Get Started
            </Button>
            <Pressable className="mt-5 min-h-10 items-center justify-center" onPress={() => router.replace('/home')}>
              <Text className="text-caption text-text-muted">I already have an account</Text>
            </Pressable>
          </View>
        </Page>
      </ScrollView>

      <View className="absolute bottom-8 left-0 right-0 items-center">
        <OnboardingDots activeIndex={activeIndex} />
      </View>
      <StatusBar style="light" />
    </View>
  )
}

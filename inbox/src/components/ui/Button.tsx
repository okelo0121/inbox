import type { ReactNode } from 'react'
import { Pressable, Text, type PressableProps } from 'react-native'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export type ButtonProps = Omit<PressableProps, 'children'> & {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary active:bg-primary-strong',
  secondary: 'bg-surface-elevated border border-border active:bg-surface-muted',
  ghost: 'bg-transparent active:bg-surface-muted',
}

export function Button({ children, variant = 'primary', className = '', disabled, ...props }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled ?? false }}
      className={`min-h-10 items-center justify-center rounded-control px-5 py-3 ${variantClasses[variant]} ${disabled ? 'opacity-45' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      <Text className={variant === 'primary' ? 'text-label text-text-primary' : 'text-label text-text-secondary'}>
        {children}
      </Text>
    </Pressable>
  )
}

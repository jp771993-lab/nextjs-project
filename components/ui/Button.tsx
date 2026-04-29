import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded px-4 py-2 font-medium transition-colors',
          variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
          variant === 'secondary' && 'bg-gray-500 text-white hover:bg-gray-600',
          variant === 'outline' &&
            'border border-gray-300 bg-transparent hover:bg-gray-50',
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

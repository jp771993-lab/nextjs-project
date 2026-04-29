'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useLogin } from '@/features/auth/hooks'
import { ROUTES } from '@/lib/constants'

const EyeIcon = ({ show }: { show: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {show ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
)

export default function LoginPage() {
  const router = useRouter()
  const loginMutation = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    try {
      await loginMutation.mutateAsync({ email, password })
      router.push(ROUTES.DASHBOARD)
    } catch (error) {
      setErrors({
        password: 'Invalid email or password',
      })
    }
  }

  return (
    <div className="flex min-h-screen items-stretch bg-white">
      {/* Left Column: Fixed Width Form */}
      <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-[40%] lg:min-w-[480px] lg:px-16 mx-auto lg:mx-0">
        <div className="mx-auto w-full max-w-[380px] space-y-8 mt-12 bg-white">
          <div>
            <h1 className="text-[32px] font-semibold tracking-tight text-gray-900 mb-2">
              Hi, Welcome back
            </h1>
            <p className="text-gray-500 text-sm">
              Login in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Johndeo@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                className={`h-11 border-gray-200 transition-shadow focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: undefined })
                  }}
                  className={`h-11 pr-10 border-gray-200 transition-shadow focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon show={showPassword} />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span className="text-sm font-medium text-gray-700">Remember me</span>
              </label>

              <Link
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-indigo-600 text-base font-medium hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all rounded-lg mt-4"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Logging in...' : 'Sign in'}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don&apos;t have an account?{' '}
            <Link
              href={ROUTES.REGISTER}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column: Dynamic Background & Glassmorphism Dashboard Cards */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 overflow-hidden items-center justify-center p-12">
        {/* Animated Background blobs */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[80px] mix-blend-multiply delay-1000 animate-pulse"></div>

        {/* Dashboard Preview Composition */}
        <div className="relative w-full max-w-[550px] z-10 selection:bg-transparent cursor-default">
          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl shadow-indigo-900/10 border border-white/50 animate-[translateY_1s_ease-out]">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Assets</p>
                <h3 className="text-4xl font-bold text-gray-900">$1839.00</h3>
              </div>
              <div className="bg-emerald-100/80 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 border border-emerald-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                10% Profit
              </div>
            </div>

            {/* Line Chart UI placeholder */}
            <div className="h-32 flex items-end justify-between gap-2 mb-8 relative">
              <svg className="absolute w-full h-full left-0 top-0 overflow-visible" preserveAspectRatio="none">
                <path d="M0,80 Q50,60 100,50 T200,40 T300,70 T400,20 T500,40" fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_4px_4px_rgba(79,70,229,0.3)]"/>
              </svg>
              {/* Plot dot */}
              <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-indigo-600 left-[80%] top-[20px] shadow-lg shadow-indigo-600/40"></div>
            </div>

            {/* Entity Item */}
            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-white/40 shadow-sm hover:translate-x-1 transition-transform">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bajaj Finserv</h4>
                <p className="text-sm text-gray-500">Stock Investment</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-semibold text-gray-900">+$240.00</p>
                <p className="text-sm text-emerald-600">+12.5%</p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -right-12 -top-12 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-indigo-500/10 border border-white/60 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">System Secure</p>
                <p className="text-xs text-gray-500">Real-time protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

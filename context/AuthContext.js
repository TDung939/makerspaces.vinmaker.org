import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  // Register user
  const register = async (user) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/')
    } else {
      setError(data.message)
      setError(null)
    }
  }

  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/')
    } else {
      console.log((data.message));
      setError(data.message)
      setError(null)
    }
  }

  // Logout user
  const logout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_ORIGIN}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

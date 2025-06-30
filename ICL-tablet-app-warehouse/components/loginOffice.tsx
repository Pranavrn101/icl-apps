// LoginOffice.tsx
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// Fixed toast import to avoid path alias error
import { toast } from "./ui/use-toast"

export default function LoginOffice({ onLogin }: { onLogin: (token: string) => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role: "office" })
    })

    const data = await res.json()
    if (res.ok) {
      localStorage.setItem("token", data.token)
      onLogin(data.token)
    } else {
      toast({ title: "Login Failed", description: data.message || "Invalid credentials", variant: "destructive" })
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Office Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button onClick={handleLogin} className="w-full bg-[#142d6a] text-white">Login</Button>
        </CardContent>
      </Card>
    </div>
  )
}

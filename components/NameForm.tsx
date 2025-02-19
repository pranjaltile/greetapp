"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { greet } from "@/app/actions"

export default function NameForm() {
  const [name, setName] = useState("")
  const [greeting, setGreeting] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await greet(name)
    setGreeting(result)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
      {greeting && <p className="text-lg font-semibold text-center">{greeting}</p>}
    </form>
  )
}


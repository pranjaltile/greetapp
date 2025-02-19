"use server"

export async function greet(name: string): Promise<string> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return `Hello ${name}!`
}


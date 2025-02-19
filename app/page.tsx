import { Suspense } from "react"
import NameForm from "@/components/NameForm"
import Explanation from "@/components/Explanation"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Next.js Server Actions Demo</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <Suspense fallback={<div>Loading...</div>}>
              <NameForm />
            </Suspense>
          </CardContent>
        </Card>
        <Explanation />
      </div>
    </main>
  )
}


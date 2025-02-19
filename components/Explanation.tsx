import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Explanation() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How Server Actions Work</AccordionTrigger>
        <AccordionContent>
          Server Actions process the input on the server-side. When the form is submitted, the 'greet' function is
          called with the input name. It returns a greeting message which is then displayed on the client.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shadcn UI Components Used</AccordionTrigger>
        <AccordionContent>
          This demo uses several Shadcn UI components: Card, Input, Button, and Accordion. These components provide a
          consistent and attractive design across the application.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Key Next.js 15.1 Features</AccordionTrigger>
        <AccordionContent>
          This application leverages Server Actions, a key feature in Next.js 15.1. It also uses the App Router for
          simplified routing and Server Components for improved performance.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


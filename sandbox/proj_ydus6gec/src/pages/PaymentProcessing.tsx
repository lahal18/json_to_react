
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function PaymentProcessing() {
  return (
    <div>
      <Hero title="Secure Checkout" subtitle="Complete your purchase with confidence" className="text-center py-20" />
      <Section padding={8} className="bg-white">
        <Grid cols={1} className="max-w-2xl mx-auto">
          <Heading children="Payment Information" level={2} className="text-xl font-bold mb-4" />
          <FlexColumn align="center" justify="center" gap={4}>
            <TextBlock children="Credit Card" size="sm" color="gray-600" />
            <InputField label="Card Number" placeholder="1234 5678 9012 3456" type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <TextBlock children="Expiration Date" size="sm" color="gray-600" />
            <FlexRow justify="space-between" gap={2}>
              <InputField label="" placeholder="MM/YY" type="text" className="w-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <InputField label="" placeholder="CVC" type="text" className="w-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </FlexRow>
            <TextBlock children="Billing Address" size="sm" color="gray-600" />
            <InputField label="Street Address" placeholder="123 Main St" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <InputField label="City" placeholder="San Francisco" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <FlexRow justify="space-between" gap={2}>
              <InputField label="" placeholder="ZIP" type="text" className="w-20 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <InputField label="" placeholder="State" type="text" className="w-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </FlexRow>
          </FlexColumn>
        </Grid>
      </Section>
      <Section padding={6} className="bg-indigo-600 text-white text-center">
        <CTASection title="Complete Your Purchase" description="Enter your payment details to finalize order" primaryButton={{"label": "Pay Now", "variant": "solid", "size": "lg", "className": "bg-white text-indigo-600 font-bold py-3 px-8 rounded-md shadow-md hover:bg-indigo-500 transition-colors"}} secondaryButton={{"label": "Cancel", "variant": "outline", "size": "lg", "className": "border border-white text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors"}} background="bg-indigo-600" textColor="text-white" align="center" />
      </Section>
    </div>
  )
}

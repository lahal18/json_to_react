
import React from "react"
import { Badge, CTASection, Card, Container, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero title="Checkout" subtitle="Complete Your Purchase" />
      <Section padding={4}>
        <Grid cols={1}>
          <Container maxWidth={720} padding={4}>
            <Heading children="Payment Information" level={2} color="text-gray-900" />
            <FlexColumn align="start" justify="center" gap={2}>
              <TextBlock children="Order Summary" size="sm" color="text-gray-600" />
              <TextBlock children="Subtotal: $199.99" size="md" color="text-gray-900" />
              <TextBlock children="Shipping: $5.99" size="md" color="text-gray-900" />
              <TextBlock children="Total: $205.98" size="xl" color="text-indigo-600 font-bold" />
            </FlexColumn>
            <FlexColumn align="start" justify="center" gap={2}>
              <TextBlock children="Payment Method" size="sm" color="text-gray-600" />
              <SelectDropdown label="Payment Method" options={[{"label": "Credit Card", "value": "credit_card"}, {"label": "PayPal", "value": "paypal"}]} value="credit_card" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <TextBlock children="Card Details" size="sm" color="text-gray-600" />
              <FlexRow wrap={true} gap={2}>
                <InputField label="Card Number" placeholder="1234 5678 9012 3456" type="text" disabled={false} />
                <InputField label="Expiry" placeholder="MM/YY" type="text" disabled={false} />
                <InputField label="CVC" placeholder="123" type="text" disabled={false} />
              </FlexRow>
            </FlexColumn>
            <FlexColumn align="start" justify="center" gap={2}>
              <TextBlock children="Billing Address" size="sm" color="text-gray-600" />
              <InputField label="Street Address" placeholder="123 Main Street" type="text" disabled={false} />
              <InputField label="City" placeholder="Seattle" type="text" disabled={false} />
              <FlexRow gap={2}>
                <InputField label="State" placeholder="WA" type="text" disabled={false} />
                <InputField label="ZIP" placeholder="98101" type="text" disabled={false} />
              </FlexRow>
              <InputField label="Country" placeholder="USA" type="text" disabled={false} />
            </FlexColumn>
            <CTASection title="Review Order" description="Check details before completing your purchase" primaryButton={{"type": "SubmitButton", "props": {"children": "Place Order", "variant": "primary", "size": "lg", "fullWidth": true, "disabled": false}}} secondaryButton={{"type": "SubmitButton", "props": {"children": "Cancel", "variant": "secondary", "size": "lg", "fullWidth": true, "disabled": false}}} background="white" textColor="gray-800" align="center" />
          </Container>
        </Grid>
      </Section>
    </div>
  )
}

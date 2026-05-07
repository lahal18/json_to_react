
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Form, Grid, Heading, Hero, Image, InputField, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero title="Checkout" subtitle="Complete Your Purchase" />
      <Section padding={4}>
        <Grid cols={1}>
          <TextBlock children="Shipping Information" size="lg" align="left" />
          <TextBlock children="Billing Information" size="lg" align="left" />
        </Grid>
      </Section>
      <Section padding={4}>
        <Grid cols={1}>
          <Form method="POST" className="space-y-4">
            <InputField label="Shipping Address" placeholder="123 Main St, City, State, ZIP" name="shippingAddress" required={true} />
            <InputField label="City" placeholder="New York" name="city" required={true} />
            <InputField label="State" placeholder="NY" name="state" required={true} />
            <InputField label="ZIP Code" placeholder="10001" name="zipCode" required={true} />
            <SubmitButton variant="primary" size="lg" disabled={false} children="Continue to Billing" />
          </Form>
        </Grid>
      </Section>
      <Section padding={4}>
        <Grid cols={1}>
          <TextBlock children="Payment Information" size="lg" align="left" />
        </Grid>
      </Section>
      <FlexColumn align="center" justify="center" gap={2}>
        <Form method="POST" className="w-full max-w-md">
          <InputField label="Card Number" placeholder="1234 5678 9012 3456" name="cardNumber" required={true} />
          <InputField label="Expiration Date" placeholder="MM/YY" name="expirationDate" required={true} />
          <InputField label="CVV" placeholder="123" name="cvv" required={true} />
          <InputField label="ZIP Code" placeholder="10001" name="zipCode" required={true} />
        </Form>
        <SubmitButton variant="primary" size="lg" disabled={false} children="Place Order" />
      </FlexColumn>
    </div>
  )
}

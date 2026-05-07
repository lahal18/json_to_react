
import React from "react"
import { Badge, Card, Container, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, RadioButton, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero title="Checkout" subtitle="Complete Your Purchase" />
      <Section padding={4}>
        <Container maxWidth={3} padding={2}>
          <Heading children="Payment Information" level={2} className="text-gray-800 font-bold mb-2" />
          <FlexColumn className="space-y-2">
            <InputField label="Card Number" placeholder="1234 5678 9012 3456" type="text" id="card-number" name="cardNumber" required={true} />
            <InputField label="Expiry Date" placeholder="MM/YY" type="text" id="expiry-date" name="expiryDate" required={true} />
            <InputField label="CVV" placeholder="123" type="text" id="cvv" name="cvv" required={true} />
            <InputField label="Name on Card" placeholder="John Doe" type="text" id="card-name" name="cardName" required={true} />
          </FlexColumn>
          <Heading children="Shipping Information" level={2} className="text-gray-800 font-bold mb-2" />
          <FlexColumn className="space-y-2">
            <InputField label="Address Line 1" placeholder="123 Luxury Lane" type="text" id="address-line1" name="addressLine1" required={true} />
            <InputField label="Address Line 2" placeholder="Apt 5B" type="text" id="address-line2" name="addressLine2" />
            <FlexRow align="items-end" justify="space-between" gap={2}>
              <InputField label="City" placeholder="San Francisco" type="text" id="city" name="city" required={true} />
              <InputField label="ZIP Code" placeholder="94107" type="text" id="zip-code" name="zipCode" required={true} />
              <SelectDropdown label="Country" options={[{"label": "United States", "value": "US"}, {"label": "Canada", "value": "CA"}, {"label": "United Kingdom", "value": "GB"}]} id="country" name="country" required={true} />
            </FlexRow>
          </FlexColumn>
          <Heading children="Payment Method" level={2} className="text-gray-800 font-bold mb-2" />
          <FlexColumn className="space-y-2">
            <RadioButton label="Credit Card" value="credit" name="paymentMethod" checked={true} />
            <RadioButton label="Apple Pay" value="apple-pay" name="paymentMethod" />
            <RadioButton label="Google Pay" value="google-pay" name="paymentMethod" />
          </FlexColumn>
          <Section className="mt-4">
            <SubmitButton children="Place Order" variant="solid" size="lg" fullWidth={true} disabled={false} type="submit" />
          </Section>
        </Container>
      </Section>
    </div>
  )
}


import React from "react"
import { Badge, CTASection, Card, Container, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero title="Checkout" subtitle="Complete Your Purchase" />
      <Section padding={4}>
        <Grid cols={1}>
          <Container className="max-w-2xl mx-auto px-4 py-8">
            <Heading children="Payment Information" level={2} align="left" />
            <FlexColumn align="flex-start" justify="flex-start" gap={2}>
              <TextBlock children="Billing Details" size="sm" color="gray-700" />
              <InputField label="Full Name" placeholder="John Doe" id="fullName" name="fullName" required={true} />
              <InputField label="Email Address" placeholder="john@example.com" id="email" name="email" type="email" required={true} />
              <InputField label="Phone Number" placeholder="+1234567890" id="phone" name="phone" />
              <InputField label="Address Line 1" placeholder="123 Main Street" id="address1" name="address1" required={true} />
              <InputField label="Address Line 2" placeholder="Apartment 4B" id="address2" />
              <InputField label="City" placeholder="City" id="city" name="city" required={true} />
              <FlexRow wrap={true} gap={2}>
                <InputField label="Zip Code" placeholder="12345" id="zip" name="zip" required={true} />
                <InputField label="Country" placeholder="Select Country" id="country" name="country" />
              </FlexRow>
              <InputField label="Company" placeholder="Men's Store Inc." id="company" />
              <InputField label="VAT Number" placeholder="VAT123456789" id="vat" name="vat" />
            </FlexColumn>
          </Container>
          <Container className="max-w-2xl mx-auto px-4 py-8">
            <Heading children="Shipping Information" level={2} align="left" />
            <FlexColumn align="flex-start" justify="flex-start" gap={2}>
              <TextBlock children="Shipping Address" size="sm" color="gray-700" />
              <InputField label="Same as Billing" placeholder="Use same address" id="sameAsBilling" name="sameAsBilling" />
              <InputField label="Street" placeholder="123 Main Street" id="street" name="street" required={true} />
              <InputField label="City" placeholder="City" id="shippingCity" name="city" required={true} />
              <FlexRow wrap={true} gap={2}>
                <InputField label="Zip Code" placeholder="12345" id="shippingZip" name="zip" required={true} />
                <InputField label="Country" placeholder="Select Country" id="shippingCountry" name="country" />
              </FlexRow>
            </FlexColumn>
          </Container>
          <Container className="max-w-2xl mx-auto px-4 py-8">
            <Heading children="Payment Method" level={2} align="left" />
            <FlexColumn align="flex-start" justify="flex-start" gap={2}>
              <TextBlock children="Payment Details" size="sm" color="gray-700" />
              <SelectDropdown label="Payment Method" options={[{"label": "Credit Card", "value": "credit_card"}, {"label": "Debit Card", "value": "debit_card"}, {"label": "PayPal", "value": "paypal"}, {"label": "Apple Pay", "value": "apple_pay"}]} id="paymentMethod" name="paymentMethod" required={true} />
              <InputField label="Card Number" placeholder="1234 5678 9012 3456" id="cardNumber" name="cardNumber" type="text" />
              <FlexRow gap={2}>
                <InputField label="Expiry Date" placeholder="MM/YY" id="expiry" name="expiry" maxLength={5} />
                <InputField label="CVV" placeholder="123" id="cvv" name="cvv" maxLength={4} />
              </FlexRow>
            </FlexColumn>
          </Container>
          <Container className="max-w-2xl mx-auto px-4 py-8">
            <Heading children="Order Summary" level={2} align="left" />
            <FlexColumn align="flex-start" justify="flex-start" gap={2}>
              <TextBlock children="Items" size="sm" color="gray-700" />
              <Grid cols={2}>
                <TextBlock children="Product" />
                <TextBlock children="Price" />
                <TextBlock children="1 x Premium T-Shirt" />
                <TextBlock children="$49.99" />
                <TextBlock children="1 x Leather Wallet" />
                <TextBlock children="$39.99" />
              </Grid>
              <TextBlock children="Subtotal: $89.98" />
              <TextBlock children="Shipping: $5.99" />
              <TextBlock children="Total: $95.97" />
            </FlexColumn>
          </Container>
          <Container className="max-w-2xl mx-auto px-4 py-8">
            <Heading children="Review & Place Order" level={2} align="left" />
            <FlexColumn align="flex-start" justify="flex-start" gap={2}>
              <TextBlock children="Payment Information" size="sm" color="gray-700" />
              <TextBlock children="Card Details will be processed securely." />
              <SubmitButton children="Place Order" variant="primary" size="lg" fullWidth={true} disabled={false} />
            </FlexColumn>
          </Container>
        </Grid>
      </Section>
    </div>
  )
}

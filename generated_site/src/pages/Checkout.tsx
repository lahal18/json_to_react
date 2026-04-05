
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero title="Checkout" subtitle="Complete Your Purchase" />
      <Section padding={4}>
        <FlexColumn align="center" justify="center" gap={2}>
          <TextBlock children="Shipping Information" size="md" color="indigo.600" />
          <FlexRow align="baseline" justify="space-between">
            <TextBlock children="Address" />
            <TextBlock children="Shipping Method" />
          </FlexRow>
          <FlexRow align="baseline" justify="space-between">
            <TextBlock children="Payment" />
            <TextBlock children="Payment Method" />
          </FlexRow>
          <FlexRow align="baseline" justify="space-between">
            <TextBlock children="Review" />
            <TextBlock children="Order Summary" />
          </FlexRow>
          <FlexColumn align="stretch" justify="flex-end" gap={2}>
            <SubmitButton loading={false} variant="solid" size="lg" fullWidth={true} disabled={false} children="Place Order" onClick="handleSubmit" type="submit" />
            <FlexRow align="center" justify="center" gap={1}>
              <TextBlock children="Already have an account? " />
              <SubmitButton loading={false} variant="outline" size="lg" fullWidth={false} disabled={false} children="Login" onClick="handleLogin" type="button" />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </Section>
    </div>
  )
}


import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Cart() {
  return (
    <div>
      <Section padding={4}>
        <Heading children="Shopping Cart" level={1} align="center" />
        <FlexColumn align="center" justify="center">
          <TextBlock children="Your cart is empty." align="center" size="lg" />
          <CTASection title="Continue Shopping" description="Browse more products" primaryButton={{"label": "View Products", "href": "/products"}} secondaryButton={{"label": "Checkout", "href": "/checkout"}} background="indigo-600" textColor="white" align="center" />
        </FlexColumn>
      </Section>
    </div>
  )
}

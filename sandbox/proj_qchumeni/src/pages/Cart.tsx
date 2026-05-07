
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Cart() {
  return (
    <div>
      <Hero title="Your Cart" subtitle="Secure checkout for luxury footwear" />
      <Section padding={4}>
        <Grid cols={1}>
          <Heading children="Cart Items" level={2} className="text-indigo-700 font-semibold mb-4" />
          <FlexColumn align="stretch" justify="center" gap={4}>
            <TextBlock children="Item" className="text-gray-600 font-medium" />
            <TextBlock children="Quantity" className="text-gray-600 font-medium" />
            <TextBlock children="Price" className="text-gray-600 font-medium" />
            <TextBlock children="Total" className="text-gray-600 font-medium" />
          </FlexColumn>
        </Grid>
        <Section padding={2}>
          <FlexRow justify="flex-end" className="w-full">
            <TextBlock children="Subtotal: $299.00" className="text-xl font-bold text-indigo-700" />
            <FlexColumn align="flex-end" className="w-full">
              <SubmitButton children="Checkout" variant="solid" size="lg" className="w-full bg-indigo-600 text-white hover:bg-indigo-700" />
            </FlexColumn>
          </FlexRow>
        </Section>
      </Section>
    </div>
  )
}

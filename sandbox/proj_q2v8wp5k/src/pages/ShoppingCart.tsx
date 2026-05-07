
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function ShoppingCart() {
  return (
    <div>
      <Hero title="Shopping Cart" subtitle="Your selected items" />
      <Section padding={4}>
        <Grid cols={1}>
          <Card className="bg-white shadow-md rounded-lg p-4 mb-4" shadow="md" rounded="lg">
            <TextBlock children="Items in Your Cart" size="lg" color="text-gray-800" />
            <FlexColumn align="baseline" justify="space-y-2">
              <FlexRow align="center" justify="space-x-3">
                <Image src="/placeholder-image.jpg" alt="Product Image" width={64} height={64} rounded="md" />
                <TextBlock children="Product Name" size="md" color="text-gray-700" />
                <TextBlock children="3" size="md" color="text-gray-500" />
                <TextBlock children="$199.99" size="lg" color="text-indigo-600" />
              </FlexRow>
              <FlexRow align="baseline" justify="space-x-3">
                <TextBlock children="Subtotal:" size="md" color="text-gray-700" />
                <TextBlock children="$599.97" size="lg" color="text-indigo-600" />
              </FlexRow>
            </FlexColumn>
            <FlexColumn className="mt-4">
              <SubmitButton children="Continue Shopping" variant="secondary" size="lg" className="w-full text-indigo-600 border border-indigo-600 rounded-md py-2" />
              <SubmitButton children="Proceed to Checkout" variant="primary" size="lg" className="w-full text-white bg-indigo-600 rounded-md py-2 hover:bg-indigo-700" />
            </FlexColumn>
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

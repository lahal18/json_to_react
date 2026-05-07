
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function ShoppingCart() {
  return (
    <div>
      <Hero title="Your Cart" subtitle="Review and checkout your items" />
      <Section padding={6}>
        <FlexColumn align="center" justify="center" gap={4}>
          <TextBlock children="Items in your cart:" size="md" color="gray-600" />
          <Grid cols={2} gap={4}>
            <Card padding={4} shadow="md" rounded="lg" border="gray-200">
              <FlexRow align="center" justify="start" gap={3}>
                <Image src="/images/product1.jpg" alt="Product 1" width={80} height={80} rounded="md" />
                <FlexColumn align="center" justify="center">
                  <TextBlock children="Premium T-Shirt" size="lg" color="gray-800" />
                  <TextBlock children="$49.99" size="md" color="indigo-600" />
                </FlexColumn>
                <TextBlock children="2" size="sm" color="gray-500" />
                <SubmitButton disabled={false} variant="outline" size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700" />
              </FlexRow>
            </Card>
            <Card padding={4} shadow="md" rounded="lg" border="gray-200">
              <FlexRow align="center" justify="start" gap={3}>
                <Image src="/images/product2.jpg" alt="Product 2" width={80} height={80} rounded="md" />
                <FlexColumn align="center" justify="center">
                  <TextBlock children="Sneakers" size="lg" color="gray-800" />
                  <TextBlock children="$129.99" size="md" color="indigo-600" />
                </FlexColumn>
                <TextBlock children="1" size="sm" color="gray-500" />
                <SubmitButton disabled={false} variant="outline" size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700" />
              </FlexRow>
            </Card>
          </Grid>
          <FlexRow justify="flex-end" gap={2}>
            <TextBlock children="Subtotal:" size="lg" color="gray-800" />
            <TextBlock children="$279.97" size="xl" color="indigo-700" align="right" />
          </FlexRow>
          <FlexRow justify="flex-end" gap={2}>
            <SubmitButton disabled={false} variant="solid" size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700" />
            <TextBlock children="Continue Shopping" size="sm" color="indigo-600 underline" />
          </FlexRow>
        </FlexColumn>
      </Section>
    </div>
  )
}


import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Cart() {
  return (
    <div>
      <Hero title="Shopping Cart" subtitle="Manage your items" className="text-center py-12" />
      <Section padding={8} className="bg-white">
        <FlexColumn align="center" justify="center" gap={4}>
          <TextBlock children="Your Shopping Cart" size="xl" align="center" color="indigo.600" />
          <TextBlock children="Review and checkout your items" size="lg" align="center" color="gray.600" />
        </FlexColumn>
        <Section padding={6} className="bg-gray-50">
          <Grid cols={1} className="w-full">
            <FlexRow align="start" justify="space-between" gap={4} className="items-start">
              <TextBlock children="Item" size="md" color="gray.800" align="left" />
              <TextBlock children="Product" size="md" color="gray.800" align="left" />
              <TextBlock children="Price" size="md" color="gray.800" align="left" />
              <TextBlock children="Total" size="md" color="gray.800" align="left" />
              <TextBlock children="Remove" size="md" color="gray.800" align="left" />
            </FlexRow>
            <Grid cols={1} className="mt-4">
              <FlexColumn align="stretch" justify="center" gap={4} className="space-y-4">
                <FlexRow align="center" justify="flex-start" gap={3} className="items-center">
                  <Image src="/placeholder-product.jpg" alt="Product Image" className="w-16 h-16 rounded-lg" objectFit="contain" />
                  <FlexColumn className="flex-1">
                    <TextBlock children="Product Name" size="lg" color="gray.900" align="left" />
                    <TextBlock children="$199.99" size="md" color="indigo.600" align="left" />
                  </FlexColumn>
                  <TextBlock children="1" size="md" color="gray.500" align="center" />
                  <TextBlock children="$199.99" size="md" color="indigo.600" align="right" />
                </FlexRow>
                <TextBlock children="Remove" size="sm" color="indigo.600" align="right" className="cursor-pointer hover:text-indigo-500" />
              </FlexColumn>
              <FlexRow align="center" justify="space-between" gap={2} className="items-center">
                <TextBlock children="Subtotal:" size="lg" color="gray.800" align="left" />
                <TextBlock children="$199.99" size="lg" color="indigo.600" align="right" />
              </FlexRow>
            </Grid>
          </Grid>
        </Section>
      </Section>
      <Section padding={8} className="bg-white">
        <FlexRow align="center" justify="flex-end" gap={2} className="w-full">
          <TextBlock children="Continue Shopping" size="lg" color="indigo.600" className="hover:text-indigo-500 cursor-pointer" />
          <SubmitButton children="Checkout" variant="solid" size="lg" fullWidth={true} className="bg-indigo-600 text-white hover:bg-indigo-700" disabled={false} />
        </FlexRow>
      </Section>
    </div>
  )
}

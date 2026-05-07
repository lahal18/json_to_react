
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Welcome to Home" subtitle="Discover more" className="bg-indigo-600 text-white shadow-md" background="hero-bg" />
      <Section padding={4} className="bg-white">
        <Grid cols={3} gap={4}>
          <Card className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={4} rounded="lg" shadow="md">
            <Image src="/images/product1.jpg" alt="Product 1" width={200} height={200} rounded="md" objectFit="contain" />
            <Heading children="Premium Backpack" level={4} className="text-lg font-semibold text-gray-800" />
            <TextBlock children="$129.99" className="text-xl text-indigo-600 font-bold" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="New" variant="new" size="sm" rounded="md" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="bg-indigo-600 text-white hover:bg-indigo-700" />
            </FlexRow>
          </Card>
          <Card className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={4} rounded="lg" shadow="md">
            <Image src="/images/product2.jpg" alt="Product 2" width={200} height={200} rounded="md" objectFit="contain" />
            <Heading children="Smart Watch" level={4} className="text-lg font-semibold text-gray-800" />
            <TextBlock children="$199.99" className="text-xl text-indigo-600 font-bold" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="On Sale" variant="sale" size="sm" rounded="md" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="bg-indigo-600 text-white hover:bg-indigo-700" />
            </FlexRow>
          </Card>
          <Card className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={4} rounded="lg" shadow="md">
            <Image src="/images/product3.jpg" alt="Product 3" width={200} height={200} rounded="md" objectFit="contain" />
            <Heading children="Leather Wallet" level={4} className="text-lg font-semibold text-gray-800" />
            <TextBlock children="$49.99" className="text-xl text-indigo-600 font-bold" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="Popular" variant="popular" size="sm" rounded="md" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="bg-indigo-600 text-white hover:bg-indigo-700" />
            </FlexRow>
          </Card>
        </Grid>
      </Section>
      <Section padding={6} className="bg-indigo-50">
        <Heading children="Why Choose Us" level={3} className="text-2xl font-bold text-indigo-800" />
        <FlexColumn align="center" justify="center" gap={4}>
          <StatsCard title="Free Shipping" value="On Orders Over $50" icon="shipping" description="Fast and reliable delivery" className="bg-white p-4 rounded-lg shadow-sm" />
          <StatsCard title="Secure Checkout" value="100% Encrypted" icon="lock" description="Safe payment processing" className="bg-white p-4 rounded-lg shadow-sm" />
          <StatsCard title="Easy Returns" value="30 Days" icon="undo" description="Hassle-free returns" className="bg-white p-4 rounded-lg shadow-sm" />
        </FlexColumn>
      </Section>
      <Section padding={8} className="bg-gray-100">
        <Heading children="Featured Categories" level={3} className="text-2xl font-bold text-gray-800" />
        <FlexRow align="center" justify="center" wrap="true" gap={2}>
          <Badge children="Men's Clothing" variant="default" size="sm" rounded="md" />
          <Badge children="Electronics" variant="default" size="sm" rounded="md" />
          <Badge children="Footwear" variant="default" size="sm" rounded="md" />
          <Badge children="Accessories" variant="default" size="sm" rounded="md" />
        </FlexRow>
      </Section>
    </div>
  )
}

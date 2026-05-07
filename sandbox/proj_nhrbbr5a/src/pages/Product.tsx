
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Product() {
  return (
    <div>
      <Hero title="New Arrivals" subtitle="Explore Our Collection" background="bg-indigo-50" textAlign="center" className="text-white" />
      <Section padding={8}>
        <Heading children="Featured Products" level={2} align="left" color="text-indigo-800" />
        <Grid cols={3} gap={6}>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" padding={4} rounded="lg">
            <Image src="/images/product1.jpg" alt="Product 1" width={200} height={200} rounded="md" objectFit="contain" className="mx-auto" />
            <Heading children="Premium Backpack" level={4} color="text-indigo-700" />
            <TextBlock children="$129.99" size="lg" color="text-indigo-600" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="New" variant="secondary" size="sm" rounded="md" />
              <TextBlock children="Free Shipping" size="sm" color="text-green-600" />
            </FlexRow>
            <FlexColumn align="center" justify="center">
              <SubmitButton children="Add to Cart" variant="primary" size="md" className="w-full" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" padding={4} rounded="lg">
            <Image src="/images/product2.jpg" alt="Product 2" width={200} height={200} rounded="md" objectFit="contain" className="mx-auto" />
            <Heading children="Leather Wallet" level={4} color="text-indigo-700" />
            <TextBlock children="$49.99" size="lg" color="text-indigo-600" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="On Sale" variant="primary" size="sm" rounded="md" />
              <TextBlock children="30% Off" size="sm" color="text-red-600" />
            </FlexRow>
            <FlexColumn align="center" justify="center">
              <SubmitButton children="Add to Cart" variant="primary" size="md" className="w-full" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" padding={4} rounded="lg">
            <Image src="/images/product3.jpg" alt="Product 3" width={200} height={200} rounded="md" objectFit="contain" className="mx-auto" />
            <Heading children="Smart Watch" level={4} color="text-indigo-700" />
            <TextBlock children="$199.99" size="lg" color="text-indigo-600" />
            <FlexRow align="center" justify="center" gap={2}>
              <Badge children="Popular" variant="secondary" size="sm" rounded="md" />
              <TextBlock children="Free Returns" size="sm" color="text-green-600" />
            </FlexRow>
            <FlexColumn align="center" justify="center">
              <SubmitButton children="Add to Cart" variant="primary" size="md" className="w-full" />
            </FlexColumn>
          </Card>
        </Grid>
      </Section>
      <Section padding={8} backgroundColor="bg-gray-50">
        <Heading children="Why Choose Us" level={2} align="center" color="text-indigo-800" />
        <FlexColumn align="center" justify="center" gap={4}>
          <StatsCard title="Free Shipping" value="Over 1000 Orders" icon="shipping" description="Fast and reliable delivery" className="text-indigo-600" />
          <StatsCard title="Secure Payment" value="100% Secure" icon="lock" description="Encrypted transactions" className="text-indigo-600" />
          <StatsCard title="Easy Returns" value="30 Days" icon="undo" description="Hassle-free returns" className="text-indigo-600" />
        </FlexColumn>
      </Section>
      <CTASection title="Ready to Upgrade Your Style?" description="Join thousands of men who've transformed their wardrobe with our premium collection." primaryButton={{"type": "SubmitButton", "props": {"children": "Shop Now", "variant": "primary", "size": "lg", "className": "bg-indigo-600 hover:bg-indigo-700 text-white"}}} secondaryButton={{"type": "SubmitButton", "props": {"children": "View All Products", "variant": "secondary", "size": "lg", "className": "ml-4 text-indigo-600 hover:text-indigo-700"}}} className="py-16 bg-indigo-50" textColor="text-indigo-800" align="center" />
    </div>
  )
}

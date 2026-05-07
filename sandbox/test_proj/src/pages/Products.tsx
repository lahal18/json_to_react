
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Products() {
  return (
    <div>
      <Hero title="Products" subtitle="Explore Our Collection" className="text-center py-12" />
      <Section padding={6}>
        <Grid cols={3} gap={4}>
          <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow" rounded="lg" shadow="md">
            <Image src="/images/product1.jpg" alt="Product 1" className="w-full h-48 object-cover" rounded="lg" />
            <TextBlock children="Premium T-Shirt" size="lg" color="indigo-800" align="center" />
            <TextBlock children="$29.99" size="xl" color="indigo-600" align="center" />
            <FlexRow justify="center" gap={2}>
              <Badge children="New" variant="outline" size="sm" color="indigo" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="w-full text-white" />
            </FlexRow>
          </Card>
          <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow" rounded="lg" shadow="md">
            <Image src="/images/product2.jpg" alt="Product 2" className="w-full h-48 object-cover" rounded="lg" />
            <TextBlock children="Leather Wallet" size="lg" color="indigo-800" align="center" />
            <TextBlock children="$49.99" size="xl" color="indigo-600" align="center" />
            <FlexRow justify="center" gap={2}>
              <Badge children="On Sale" variant="outline" size="sm" color="indigo" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="w-full text-white" />
            </FlexRow>
          </Card>
          <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow" rounded="lg" shadow="md">
            <Image src="/images/product3.jpg" alt="Product 3" className="w-full h-48 object-cover" rounded="lg" />
            <TextBlock children="Smart Watch" size="lg" color="indigo-800" align="center" />
            <TextBlock children="$199.99" size="xl" color="indigo-600" align="center" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Popular" variant="outline" size="sm" color="indigo" />
              <SubmitButton children="Add to Cart" variant="primary" size="md" fullWidth={true} className="w-full text-white" />
            </FlexRow>
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

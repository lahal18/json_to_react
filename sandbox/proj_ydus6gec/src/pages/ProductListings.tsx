
import React from "react"
import { Badge, Card, FlexColumn, Grid, Heading, Hero, Image, Section, StatsCard, TextBlock } from "../components"

export default function ProductListings() {
  return (
    <div>
      <Hero title="New Arrivals" subtitle="Shop the latest trends" className="text-center py-12" />
      <Section padding={4}>
        <Grid cols={3} gap={4}>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={3} rounded="lg">
            <Image src="/images/product1.jpg" alt="Product 1" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Product Name" level={4} className="text-lg font-semibold text-gray-800" />
              <TextBlock children="$199.99" className="text-indigo-600 font-medium" />
              <Badge children="New" variant="secondary" size="sm" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={3} rounded="lg">
            <Image src="/images/product2.jpg" alt="Product 2" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Product Name" level={4} className="text-lg font-semibold text-gray-800" />
              <TextBlock children="$249.99" className="text-indigo-600 font-medium" />
              <Badge children="Sale" variant="primary" size="sm" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={3} rounded="lg">
            <Image src="/images/product3.jpg" alt="Product 3" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Product Name" level={4} className="text-lg font-semibold text-gray-800" />
              <TextBlock children="$149.99" className="text-indigo-600 font-medium" />
              <Badge children="In Stock" variant="secondary" size="sm" />
            </FlexColumn>
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

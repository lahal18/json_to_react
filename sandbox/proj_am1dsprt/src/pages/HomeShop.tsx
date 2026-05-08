
import React from "react"
import { Card, FlexColumn, Grid, Heading, Hero, Image, Section, TextBlock } from "../components"

export default function HomeShop() {
  return (
    <div>
      <Hero title="Welcome to HomeShop" subtitle="Discover more" background="bg-indigo-900" textAlign="text-center" size="lg" />
      <Section padding={8} backgroundColor="bg-gray-50">
        <Grid cols={3} gap={6}>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="border-gray-100">
            <Image src="/images/product1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-lg" width="full" height="48" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Premium Headphones" level={3} color="text-indigo-700" />
              <TextBlock children="$149.99" size="xl" color="text-indigo-600" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="border-gray-100">
            <Image src="/images/product2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-lg" width="full" height="48" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Smart Watch" level={3} color="text-indigo-700" />
              <TextBlock children="$199.99" size="xl" color="text-indigo-600" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="border-gray-100">
            <Image src="/images/product3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-t-lg" width="full" height="48" />
            <FlexColumn align="center" justify="center" gap={2}>
              <Heading children="Wireless Charger" level={3} color="text-indigo-700" />
              <TextBlock children="$29.99" size="xl" color="text-indigo-600" />
            </FlexColumn>
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

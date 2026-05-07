
import React from "react"
import { Card, FlexColumn, Grid, Heading, Hero, Image, Section, StatsCard, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Welcome to Home" subtitle="Discover more" background="bg-indigo-600" textAlign="center" size="xl" />
      <Section padding={8} backgroundColor="bg-white">
        <Heading children="Featured Products" level={2} align="center" color="text-indigo-800" />
        <Grid cols={3} gap={4}>
          <Card rounded="md" shadow="hover:shadow-lg" border="border-gray-200" hover="scale-105">
            <Image src="/images/product1.jpg" alt="Product 1" width={200} height={200} rounded="lg" />
            <TextBlock children="Premium Hoodie" size="lg" color="text-indigo-700" align="center" />
            <TextBlock children="$49.99" size="md" color="text-indigo-600" align="center" />
          </Card>
          <Card rounded="md" shadow="hover:shadow-lg" border="border-gray-200" hover="scale-105">
            <Image src="/images/product2.jpg" alt="Product 2" width={200} height={200} rounded="lg" />
            <TextBlock children="Urban Backpack" size="lg" color="text-indigo-700" align="center" />
            <TextBlock children="$79.99" size="md" color="text-indigo-600" align="center" />
          </Card>
          <Card rounded="md" shadow="hover:shadow-lg" border="border-gray-200" hover="scale-105">
            <Image src="/images/product3.jpg" alt="Product 3" width={200} height={200} rounded="lg" />
            <TextBlock children="Sneakers" size="lg" color="text-indigo-700" align="center" />
            <TextBlock children="$129.99" size="md" color="text-indigo-600" align="center" />
          </Card>
          <Section padding={8} backgroundColor="bg-gray-50">
            <Heading children="Why Shop With Us?" level={2} align="center" color="text-indigo-800" />
            <FlexColumn align="center" justify="center" gap={4}>
              <StatsCard title="Free Shipping" value="On All Orders" icon="truck" change="+10%" description="Fast and reliable delivery" className="bg-indigo-50 p-4 rounded-lg" />
              <StatsCard title="Secure Checkout" value="100% Secure" icon="lock" change="+5%" description="Safe payment processing" className="bg-indigo-50 p-4 rounded-lg" />
              <StatsCard title="Easy Returns" value="30 Days" icon="rotate-cw" change="Free" description="Hassle-free returns" className="bg-indigo-50 p-4 rounded-lg" />
            </FlexColumn>
          </Section>
          <Section padding={8} backgroundColor="bg-white">
            <Heading children="New Arrivals" level={2} align="center" color="text-indigo-800" />
            <Grid cols={4} gap={4}>
              <Card rounded="md" shadow="hover:shadow-lg" border="border-gray-200" hover="scale-105">
                <Image src="/images/new-arrival-1.jpg" alt="New Arrival 1" width={150} height={150} rounded="lg" />
                <TextBlock children="Limited Edition Tee" size="lg" color="text-indigo-700" align="center" />
                <TextBlock children="$29.99" size="md" color="text-indigo-600" align="center" />
              </Card>
            </Grid>
          </Section>
        </Grid>
      </Section>
    </div>
  )
}

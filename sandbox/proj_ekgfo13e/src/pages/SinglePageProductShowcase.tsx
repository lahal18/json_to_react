
import React from "react"
import { Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function SinglePageProductShowcase() {
  return (
    <div>
      <Hero title="Introducing Our Latest Product" subtitle="Experience modern design and sleek functionality" className="text-center py-20" background="indigo-50" />
      <Section padding={8}>
        <Grid cols={3} gap={6}>
          <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="xl" border="border-indigo-100">
            <Image src="/product-1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-xl" objectFit="cover" />
            <TextBlock children="Premium Wireless Headphones" size={1} color="indigo-800" align="center" />
            <TextBlock children="$149.99" size={2} color="indigo-600" align="center" />
            <SubmitButton children="Add to Cart" variant="primary" size="md" className="mt-3 w-full" />
          </Card>
          <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="xl" border="border-indigo-100">
            <Image src="/product-2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-xl" objectFit="cover" />
            <TextBlock children="Smart Fitness Watch" size={1} color="indigo-800" align="center" />
            <TextBlock children="$199.99" size={2} color="indigo-600" align="center" />
            <SubmitButton children="Buy Now" variant="secondary" size="md" className="mt-3 w-full" />
          </Card>
          <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="xl" border="border-indigo-100">
            <Image src="/product-3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-t-xl" objectFit="cover" />
            <TextBlock children="Ergonomic Office Chair" size={1} color="indigo-800" align="center" />
            <TextBlock children="$299.99" size={2} color="indigo-600" align="center" />
            <SubmitButton children="Learn More" variant="outline" size="md" className="mt-3 w-full" />
          </Card>
        </Grid>
      </Section>
      <Section padding={12} backgroundColor="indigo-50">
        <Heading children="Why Choose Us?" level={2} align="center" color="indigo-800" />
        <FlexColumn align="center" justify="center" gap={4}>
          <StatsCard title="Premium Quality" value="10,000+" icon="Check" change="+15%" description="Customer satisfaction" className="text-indigo-600" />
          <StatsCard title="Fast Shipping" value="2-3 Days" icon="ArrowUp" change="" description="Free delivery" className="text-indigo-600" />
          <StatsCard title="Secure Payment" value="100% Safe" icon="Lock" change="" description="Encrypted transactions" className="text-indigo-600" />
        </FlexColumn>
      </Section>
      <Section padding={8}>
        <TextBlock children="Ready to elevate your lifestyle? Our products are designed with meticulous attention to detail and built to last." size={1} color="indigo-700" align="center" />
        <FlexRow align="center" justify="center" wrap={true}>
          <SubmitButton children="Shop Now" variant="primary" size="lg" className="px-8 py-3" />
          <SubmitButton children="Watch Video" variant="outline" size="lg" className="px-8 py-3 ml-4" />
        </FlexRow>
      </Section>
      <Footer className="text-gray-600 py-6" />
    </div>
  )
}

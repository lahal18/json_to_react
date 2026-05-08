
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, TextBlock } from "../components"

export default function SingleShowcasePage() {
  return (
    <div>
      <Hero title="Discover Timepieces" subtitle="Elegant watches for discerning individuals" className="text-center py-24 bg-indigo-50" />
      <Section className="max-w-4xl mx-auto px-4">
        <Grid cols={1} gap={8}>
          <Card className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow" rounded="xl" shadow="xl">
            <Image src="/images/watch-hero.jpg" alt="Premium Watch" className="w-full h-96 object-cover rounded-t-xl" rounded="xl" />
            <Card className="p-6 flex flex-col items-center text-center">
              <Badge children="Premium" variant="solid" size="lg" rounded="full" className="bg-indigo-600 text-white mb-4" />
              <Heading children="Astronomical Watch" level={2} className="text-2xl font-bold text-indigo-800 mb-2" />
              <TextBlock children="Precision engineered with sapphire crystal and titanium case for ultimate durability and style." className="text-gray-600 text-lg mb-6" />
              <FlexRow justify="center" gap={4}>
                <Badge children="$1,299" variant="solid" size="md" rounded="md" className="bg-gray-100 text-gray-700 font-medium" />
                <Badge children="Explore Collection" variant="solid" size="md" rounded="md" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors" />
              </FlexRow>
            </Card>
          </Card>
        </Grid>
      </Section>
      <Section className="py-16 bg-gray-50">
        <Heading children="Why Choose Our Watches" level={3} className="text-3xl font-bold text-center text-indigo-800 mb-12" />
        <FlexColumn align="center" justify="center" gap={8}>
          <StatsCard title="Craftsmanship" value="100%" icon="Craft" change="+15%" description="Hand-assembled by master watchmakers" className="bg-white p-6 rounded-xl shadow-sm" />
          <StatsCard title="Materials" value="Premium" icon="Material" change="+20%" description="Sapphire crystal and aerospace-grade titanium" className="bg-white p-6 rounded-xl shadow-sm" />
          <StatsCard title="Warranty" value="5 Years" icon="Shield" change="Included" description="Comprehensive coverage for peace of mind" className="bg-white p-6 rounded-xl shadow-sm" />
        </FlexColumn>
      </Section>
      <Section className="py-20 border-t border-gray-200">
        <Heading children="Join 10,000+ Happy Collectors" level={3} className="text-3xl font-bold text-center text-indigo-800 mb-8" />
        <TextBlock children="Experience the perfect blend of tradition and innovation in watchmaking." className="text-center text-gray-600 text-lg max-w-3xl mx-auto" />
        <FlexRow justify="center" gap={4}>
          <Badge children="Free Shipping" variant="solid" size="md" rounded="md" className="bg-green-100 text-green-700 px-4 py-2" />
          <Badge children="Secure Checkout" variant="solid" size="md" rounded="md" className="bg-blue-100 text-blue-700 px-4 py-2" />
          <Badge children="Easy Returns" variant="solid" size="md" rounded="md" className="bg-purple-100 text-purple-700 px-4 py-2" />
        </FlexRow>
      </Section>
    </div>
  )
}

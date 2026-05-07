
import React from "react"
import { Card, FlexColumn, FlexRow, Grid, Heading, Hero, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Luxury Shoes Collection" subtitle="Step into sophistication" className="text-center text-indigo-800 py-24" />
      <Section className="bg-gray-50 py-16">
        <Heading children="Featured Categories" level={2} className="text-3xl font-bold text-indigo-700 mb-8" />
        <FlexRow justify="center" gap={4}>
          <Heading children="Sneakers" level={3} className="text-indigo-600 hover:text-indigo-900 font-medium" />
          <Heading children="Boots" level={3} className="text-indigo-600 hover:text-indigo-900 font-medium" />
          <Heading children="Sandals" level={3} className="text-indigo-600 hover:text-indigo-900 font-medium" />
        </FlexRow>
      </Section>
      <Section className="bg-white py-12">
        <Heading children="New Arrivals" level={2} className="text-3xl font-bold text-indigo-700 mb-8" />
        <Grid cols={3} gap={6} className="justify-center">
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
          <Card className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="gray-200" />
        </Grid>
      </Section>
      <Section className="bg-gray-50 py-16">
        <Heading children="Why Choose Luxury Shoes?" level={2} className="text-3xl font-bold text-indigo-700 mb-8 text-center" />
        <FlexColumn align="center" justify="center" gap={6}>
          <StatsCard title="Premium Materials" value="100%" icon="FeatherIcon" description="Full-grain leather and sustainable fabrics" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md" />
          <StatsCard title="Craftsmanship" value="200+ Hours" icon="FeatherIcon" description="Hand-stitched by master artisans" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md" />
          <StatsCard title="Perfect Fit" value="Free Returns" icon="FeatherIcon" description="30-day return policy for peace of mind" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md" />
        </FlexColumn>
      </Section>
      <Section className="bg-indigo-900 text-white py-12">
        <Heading children="Join the Luxury Experience" level={2} className="text-4xl font-bold text-center mb-4" />
        <TextBlock children="Elevate your style with curated collections designed for the discerning gentleman." className="text-center text-lg max-w-3xl mx-auto mb-8" />
        <FlexColumn align="center" justify="center" gap={4}>
          <SubmitButton children="Shop Now" variant="solid" size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100" fullWidth={true} />
          <SubmitButton children="Explore Collection" variant="outline" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-indigo-900" fullWidth={true} />
        </FlexColumn>
      </Section>
    </div>
  )
}

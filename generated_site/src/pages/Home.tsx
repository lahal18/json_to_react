
import React from "react"
import { Badge, Card, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Welcome to Home" subtitle="Discover more" className="text-center py-20 bg-indigo-600 text-white" background="hero-bg" textAlign="center" />
      <Section padding={4} className="bg-gray-50">
        <Grid cols={3} gap={4}>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="gray-100">
            <Image src="/images/featured1.jpg" alt="Featured Product 1" className="w-full h-48 object-cover rounded-t-lg" />
            <TextBlock children="Summer Collection" className="p-4 font-medium text-gray-700" />
            <TextBlock children="$199.99" className="p-4 font-bold text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="New" variant="new" size="sm" className="absolute top-2 right-2" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" className="w-full bg-indigo-600 text-white py-2 rounded" />
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="gray-100">
            <Image src="/images/featured2.jpg" alt="Featured Product 2" className="w-full h-48 object-cover rounded-t-lg" />
            <TextBlock children="Eco-Friendly" className="p-4 font-medium text-gray-700" />
            <TextBlock children="$89.99" className="p-4 font-bold text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Sale" variant="sale" size="sm" className="absolute top-2 right-2" />
              <SubmitButton children="Add to Cart" variant="secondary" size="sm" className="w-full bg-gray-200 text-gray-800 py-2 rounded" />
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="gray-100">
            <Image src="/images/featured3.jpg" alt="Featured Product 3" className="w-full h-48 object-cover rounded-t-lg" />
            <TextBlock children="Best Sellers" className="p-4 font-medium text-gray-700" />
            <TextBlock children="$149.99" className="p-4 font-bold text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Popular" variant="popular" size="sm" className="absolute top-2 right-2" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" className="w-full bg-indigo-600 text-white py-2 rounded" />
            </FlexRow>
          </Card>
        </Grid>
      </Section>
      <Section padding={6} className="bg-gray-50">
        <Heading children="Featured Categories" level={2} className="text-2xl font-bold text-gray-800 mb-6" />
        <FlexRow justify="center" gap={2} flexWrap="wrap">
          <Card className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow" rounded="lg">
            <Icon name="shopping-bag" className="text-indigo-600 text-2xl mb-2" />
            <TextBlock children="Shop" className="font-medium text-gray-700" />
          </Card>
          <Card className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow" rounded="lg">
            <Icon name="heart" className="text-red-500 text-2xl mb-2" />
            <TextBlock children="Wishlist" className="font-medium text-gray-700" />
          </Card>
          <Card className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow" rounded="lg">
            <Icon name="star" className="text-yellow-400 text-2xl mb-2" />
            <TextBlock children="Reviews" className="font-medium text-gray-700" />
          </Card>
          <Card className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow" rounded="lg">
            <Icon name="blog" className="text-green-400 text-2xl mb-2" />
            <TextBlock children="Blog" className="font-medium text-gray-700" />
          </Card>
        </FlexRow>
      </Section>
      <Section padding={8} className="bg-indigo-50">
        <Heading children="New Arrivals" level={2} className="text-2xl font-bold text-gray-800 mb-6" />
        <Grid cols={4} gap={4}>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="gray-100">
            <Image src="/images/new-arrival1.jpg" alt="New Arrival 1" className="w-full h-48 object-cover rounded-t-lg" />
            <TextBlock children="Summer Dress" className="p-4 font-medium text-gray-700" />
            <TextBlock children="$59.99" className="p-4 font-bold text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="New" variant="new" size="sm" className="absolute top-2 right-2" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" className="w-full bg-indigo-600 text-white py-2 rounded" />
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="gray-100">
            <Image src="/images/new-arrival2.jpg" alt="New Arrival 2" className="w-full h-48 object-cover rounded-t-lg" />
            <TextBlock children="Running Shoes" className="p-4 font-medium text-gray-700" />
            <TextBlock children="$89.99" className="p-4 font-bold text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Popular" variant="popular" size="sm" className="absolute top-2 right-2" />
              <SubmitButton children="Add to Cart" variant="secondary" size="sm" className="w-full bg-gray-200 text-gray-800 py-2 rounded" />
            </FlexRow>
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

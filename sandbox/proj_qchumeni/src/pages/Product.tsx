
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Product() {
  return (
    <div>
      <Hero title="Luxury Shoes Collection" subtitle="Explore Premium Men's Footwear" className="text-center py-12 bg-indigo-50" />
      <Section padding={8}>
        <Heading children="Featured Categories" level={2} className="text-2xl font-bold text-indigo-800 mb-6" />
        <FlexRow justify="center" gap={4}>
          <Badge children="Sneakers" variant="secondary" size="md" className="text-indigo-600 hover:text-indigo-900 font-medium" />
          <Badge children="Boots" variant="secondary" size="md" className="text-indigo-600 hover:text-indigo-900 font-medium" />
          <Badge children="Sandals" variant="secondary" size="md" className="text-indigo-600 hover:text-indigo-900 font-medium" />
        </FlexRow>
        <Section padding={6}>
          <Grid cols={3} gap={6}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/sneakers.jpg" alt="Premium Sneakers" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Air Max 270" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$189.99" size="lg" color="text-indigo-600" className="font-medium" />
                <Badge children="Best Seller" variant="secondary" size="md" className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
              </FlexColumn>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/boots.jpg" alt="Premium Boots" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Premium Boots" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$249.99" size="lg" color="text-indigo-600" className="font-medium" />
                <Badge children="Limited Stock" variant="secondary" size="md" className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
              </FlexColumn>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/sandals.jpg" alt="Elegant Sandals" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Elegant Sandals" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$149.99" size="lg" color="text-indigo-600" className="font-medium" />
                <Badge children="New Arrival" variant="secondary" size="md" className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
              </FlexColumn>
            </Card>
          </Grid>
        </Section>
        <Section padding={8}>
          <Heading children="Filter Options" level={2} className="text-2xl font-bold text-indigo-800 mb-6" />
          <FlexColumn align="start" justify="center" gap={4}>
            <SelectDropdown label="Sort By" options={[{"label": "Featured", "value": "featured"}, {"label": "Price: Low to High", "value": "price-asc"}, {"label": "Price: High to Low", "value": "price-desc"}, {"label": "Newest", "value": "newest"}]} className="w-full max-w-md" placeholder="Select sort option" />
            <SelectDropdown label="Price Range" options={[{"label": "All", "value": "all"}, {"label": "$50 - $100", "value": "50-100"}, {"label": "$100 - $200", "value": "100-200"}, {"label": "$200 +", "value": "200+"}]} className="w-full max-w-md" placeholder="Select price range" />
            <SelectDropdown label="Size" options={[{"label": "All Sizes", "value": "all"}, {"label": "6", "value": "6"}, {"label": "7", "value": "7"}, {"label": "8", "value": "8"}, {"label": "9", "value": "9"}, {"label": "10", "value": "10"}, {"label": "11", "value": "11"}, {"label": "12", "value": "12"}]} className="w-full max-w-md" placeholder="Select size" />
          </FlexColumn>
        </Section>
        <Section padding={8}>
          <Heading children="Featured Products" level={2} className="text-2xl font-bold text-indigo-800 mb-6" />
          <Grid cols={3} gap={6}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/luxury-sneakers.jpg" alt="Luxury Sneakers" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Handcrafted Leather Sneakers" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$349.99" size="lg" color="text-indigo-600" className="font-medium" />
                <FlexRow justify="center" gap={2}>
                  <Badge children="New" variant="secondary" size="md" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
                  <Badge children="Free Shipping" variant="secondary" size="md" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
                </FlexRow>
                <FlexColumn align="center" justify="center" gap={2}>
                  <SelectDropdown label="Size" options={[{"label": "7", "value": "7"}, {"label": "8", "value": "8"}, {"label": "9", "value": "9"}]} className="w-full max-w-xs" />
                  <SubmitButton children="Add to Cart" variant="solid" size="sm" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors rounded-md px-4 py-2" />
                </FlexColumn>
              </FlexColumn>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/designer-boots.jpg" alt="Designer Boots" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Handcrafted Leather Boots" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$499.99" size="lg" color="text-indigo-600" className="font-medium" />
                <FlexRow justify="center" gap={2}>
                  <Badge children="Premium" variant="secondary" size="md" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
                  <Badge children="Free Returns" variant="secondary" size="md" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
                </FlexRow>
                <FlexColumn align="center" justify="center" gap={2}>
                  <SelectDropdown label="Size" options={[{"label": "8", "value": "8"}, {"label": "9", "value": "9"}, {"label": "10", "value": "10"}]} className="w-full max-w-xs" />
                  <SubmitButton children="Add to Cart" variant="solid" size="sm" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors rounded-md px-4 py-2" />
                </FlexColumn>
              </FlexColumn>
            </Card>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
              <Image src="/images/limited-edition-sandals.jpg" alt="Limited Edition Sandals" className="rounded-t-lg w-full h-48 object-cover" rounded="lg" />
              <FlexColumn align="center" justify="center" gap={2}>
                <Heading children="Limited Edition Sandals" level={3} className="text-lg font-semibold text-gray-800" />
                <TextBlock children="$199.99" size="lg" color="text-indigo-600" className="font-medium" />
                <FlexRow justify="center" gap={2}>
                  <Badge children="Limited" variant="secondary" size="md" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1" />
                  <Badge children="Free Shipping" variant="secondary" size="md" className="" />
                </FlexRow>
              </FlexColumn>
            </Card>
          </Grid>
        </Section>
      </Section>
    </div>
  )
}

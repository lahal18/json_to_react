
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Products() {
  return (
    <div>
      <div data-component-path="src/components/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Premium Gear for Modern Men" subtitle="Explore Our Latest Collection" className="text-center text-indigo-800 py-20" />
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Top Categories" level={2} className="text-3xl font-bold text-indigo-700 mb-6" />
        </div>
        <div data-component-path="src/components/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={4} gap={6} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" padding={6} rounded="lg">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/f3f4f6/6b7280?text=Running+Shoes" alt="Running Shoes" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="All-Weather Running Shoes" className="text-gray-800 font-medium py-3" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$129.99" className="text-indigo-600 font-bold py-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="sm" children="Add to Cart" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" padding={6} rounded="lg">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/f3f4f6/6b7280?text=Smart+Watch" alt="Smart Watch" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Carbon Fiber Smart Watch" className="text-gray-800 font-medium py-3" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$299.99" className="text-indigo-600 font-bold py-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="sm" children="Add to Cart" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" padding={6} rounded="lg">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/f3f4f6/6b7280?text=Leather+Boots" alt="Leather Boots" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Handcrafted Leather Boots" className="text-gray-800 font-medium py-3" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$199.99" className="text-indigo-600 font-bold py-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="sm" children="Add to Cart" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" padding={6} rounded="lg">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/f3f4f6/6b7280?text=Performance+Jacket" alt="Performance Jacket" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Weatherproof Performance Jacket" className="text-gray-800 font-medium py-3" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-indigo-600 font-bold py-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="sm" children="Add to Cart" />
            </div>
            </Card>
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={12} className="bg-indigo-50">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Why Choose Us?" level={2} className="text-3xl font-bold text-indigo-700 text-center mb-8" />
        </div>
        <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn className="max-w-4xl mx-auto" align="center" justify="center" gap={4}>
          <div data-component-path="src/components/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Free Shipping" value="Over $75" icon="shipping" description="Fast, reliable delivery nationwide" className="bg-white p-6 rounded-xl shadow-sm" />
          </div>
          <div data-component-path="src/components/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Premium Quality" value="100% Original" icon="shield" description="Authentic products with manufacturer warranty" className="bg-white p-6 rounded-xl shadow-sm" />
          </div>
          <div data-component-path="src/components/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Easy Returns" value="30 Days" icon="-arrow-left" description="Hassle-free returns with prepaid label" className="bg-white p-6 rounded-xl shadow-sm" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Customer Reviews" level={2} className="text-3xl font-bold text-indigo-700 mb-6" />
        </div>
        <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Click Here" className="text-gray-600" />
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={16} className="bg-indigo-50">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Need Help?" level={2} className="text-3xl font-bold text-indigo-700 text-center mb-6" />
        </div>
        <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn className="max-w-2xl mx-auto text-center" gap={4}>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Have a question about sizing or shipping? Our support team is here to help." className="text-gray-600 mb-4" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="support@mybrand.com | (123) 456-7890" className="text-indigo-600 font-medium" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
    </div>
  )
}

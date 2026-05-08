
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <div data-component-path="src/components/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Welcome to MyBrand" subtitle="Premium products for the modern man" className="text-center text-indigo-800 bg-indigo-50 py-20" background="bg-indigo-50" />
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-white">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Shop the Latest Collection" level={1} className="text-3xl font-bold text-indigo-800" />
        </div>
        <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Explore curated selections of apparel, accessories, and gear designed for the active, style-conscious man." className="text-gray-600 py-4" />
        </div>
        <div data-component-path="src/components/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} className="gap-6">
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Leather+Jacket" alt="Leather Jacket" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Premium Leather Jacket" className="text-lg font-semibold text-gray-800" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-indigo-600 font-medium mt-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="md" children="Add to Cart" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Smart+Watch" alt="Smart Watch" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Advanced Smart Watch" className="text-lg font-semibold text-gray-800" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$199.99" className="text-indigo-600 font-medium mt-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="md" children="Add to Cart" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="lg" shadow="sm">
            <div data-component-path="src/components/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Performance+Sneakers" alt="Performance Sneakers" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Performance Sneakers" className="text-lg font-semibold text-gray-800" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$129.99" className="text-indigo-600 font-medium mt-2" />
            </div>
            <div data-component-path="src/components/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton variant="primary" size="md" children="Add to Cart" />
            </div>
            </Card>
          </div>
          </Grid>
        </div>
        <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
          <Section padding={12} className="bg-indigo-50">
          <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Why Choose MyBrand?" level={1} className="text-2xl font-bold text-indigo-800 text-center" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="We combine cutting-edge design with premium materials to create products that elevate your everyday style and performance." className="text-center text-gray-600 max-w-3xl mx-auto" />
          </div>
          <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn className="justify-center items-center gap-6">
            <div data-component-path="src/components/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Fast Shipping" variant="secondary" size="lg" />
            </div>
            <div data-component-path="src/components/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Premium Quality" variant="secondary" size="lg" />
            </div>
            <div data-component-path="src/components/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Easy Returns" variant="secondary" size="lg" />
            </div>
            </FlexColumn>
          </div>
          </Section>
        </div>
        <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
          <Section padding={8} className="bg-gray-50">
          <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Customer Reviews" level={1} className="text-2xl font-bold text-indigo-800 text-center" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Read what our customers are saying about MyBrand." className="text-center text-gray-600 max-w-3xl mx-auto" />
          </div>
          <div data-component-path="src/components/Testimonials.tsx" style={{ display: "contents" }}>
            <Testimonials testimonials="Read what our customers are saying about MyBrand." className="space-y-6" />
          </div>
          </Section>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={16} className="bg-indigo-50">
        <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Need Help?" level={1} className="text-2xl font-bold text-indigo-800 text-center" />
        </div>
        <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn className="justify-center items-center gap-4">
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Email Support" className="text-indigo-600 hover:text-indigo-800 cursor-pointer underline" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Live Chat" className="text-indigo-600 hover:text-indigo-800 cursor-pointer underline" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="FAQ" className="text-indigo-600 hover:text-indigo-800 cursor-pointer underline" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-600">
        <div data-component-path="src/components/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow className="justify-between items-center">
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="MyBrand" className="font-bold text-gray-800" />
          </div>
          <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn className="space-y-2">
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="© 2023 MyBrand. All rights reserved." className="text-sm" />
            </div>
            </FlexColumn>
          </div>
          </FlexRow>
        </div>
        </Footer>
      </div>
    </div>
  )
}

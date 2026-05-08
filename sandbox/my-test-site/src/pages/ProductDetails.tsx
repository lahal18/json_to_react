
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function ProductDetails() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Unleash Your Inner Beast" subtitle="Premium Fitness Gear Designed for Champions" className="text-center py-24" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6}>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x500/e2e8f0/6b7280?text=Protein+Shaker" alt="Protein Shaker" className="rounded-lg shadow-md" />
          </div>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x500/e2e8f0/6b7280?text=Smart+Scale" alt="Smart Scale" className="rounded-lg shadow-md" />
          </div>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x500/e2e8f0/6b7280?text=Recovery+Boots" alt="Recovery Boots" className="rounded-lg shadow-md" />
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={6}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Engineered for Maximum Performance" level={2} className="text-indigo-700 font-bold text-2xl mb-4" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Our scientifically formulated supplements and smart equipment are crafted to push your limits. Whether you're crushing personal records or building endurance, every product is tested for purity and potency. Join thousands of athletes who trust MyBrand to fuel their transformation." className="text-gray-800 text-lg leading-relaxed mb-6" />
        </div>
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="start" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
            <Badge children="4.9★" variant="solid" size="lg" className="bg-indigo-100 text-indigo-800 rounded-lg px-3 py-1.5" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Based on 2,300+ verified reviews" className="text-sm text-gray-600" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow align="center" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Price: $49.99" className="text-xl font-medium text-indigo-700" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Free Shipping Over $50" className="text-xl font-medium text-green-600" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="30-Day Money Back Guarantee" className="text-xl font-medium text-gray-700" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={6}>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow align="center" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Free Worldwide Shipping" className="text-xl font-medium text-indigo-700" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Secure Checkout Guaranteed" className="text-xl font-medium text-indigo-700" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="24/7 Customer Support" className="text-xl font-medium text-indigo-700" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="What Our Community Says" level={2} className="text-indigo-700 font-bold text-2xl mb-6" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Join thousands of athletes who trust MyBrand to fuel their transformation. Experience the difference of scientifically formulated supplements and smart equipment designed to push your limits. Our community rates us 4.9 stars for a reason—performance you can feel, results you can see." className="text-gray-800 text-lg leading-relaxed mb-6" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Based on 2,300+ verified reviews" className="text-sm text-gray-600" />
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={6}>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Based on 2,300+ verified reviews" className="text-sm text-gray-600" />
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="stretch" justify="center">
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton loading={false} variant="solid" size="lg" fullWidth={true} className="bg-indigo-600 hover:bg-indigo-700 text-white" children="Add to Cart - Transform Your Routine" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
    </div>
  )
}


import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function ShoppingCart() {
  return (
    <div>
      <Hero data-component-path="src/components/Hero.tsx" title="Your Athletic Gear Awaits" subtitle="Premium shoes for peak performance" background="https://placehold.co/1200x600/e2e8f0/475569?text=Athletic+Shoes+Collection" textAlign="center" size="lg" />
      <Section data-component-path="src/components/Section.tsx" padding={8} backgroundColor="white">
        <Heading data-component-path="src/components/Heading.tsx" children="Your Perfect Athletic Shoes" level={1} color="primary" align="center" />
        <Grid data-component-path="src/components/Grid.tsx" cols={3} gap={8}>
          <Card data-component-path="src/components/Card.tsx" className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={6} border="1px solid #e5e7eb">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/300x300/fff/7973ff?text=Running+Sneakers" alt="Running Sneakers" className="rounded-md" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="AirZoom Runner Pro" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$129.99" size="xl" color="primary" align="center" />
            <FlexRow data-component-path="src/components/FlexRow.tsx" justify="center" align="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="Best Seller" variant="secondary" size="md" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexRow>
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={6} border="1px solid #e5e7eb">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/300x300/fff/7973ff?text=Training+Shoes" alt="Training Shoes" className="rounded-md" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="GripMaster Trainer" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$119.99" size="xl" color="primary" align="center" />
            <FlexRow data-component-path="src/components/FlexRow.tsx" justify="center" align="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="Top Rated" variant="secondary" size="md" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexRow>
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow" padding={6} border="1px solid #e5e7eb">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/300x300/fff/7973ff?text=Basketball+Shoes" alt="Basketball Shoes" className="rounded-md" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="CourtDominator Pro" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$139.99" size="xl" color="primary" align="center" />
            <FlexRow data-component-path="src/components/FlexRow.tsx" justify="center" align="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="Limited Stock" variant="secondary" size="md" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexRow>
          </Card>
        </Grid>
        <Section data-component-path="src/components/Section.tsx" padding={8} backgroundColor="white">
          <Heading data-component-path="src/components/Heading.tsx" children="Free Shipping & Returns" level={2} color="primary" align="center" />
          <TextBlock data-component-path="src/components/TextBlock.tsx" children="Enjoy complimentary shipping on all orders over $75. Hassle-free returns within 30 days." size="md" color="secondary" align="center" />
        </Section>
        <FlexColumn data-component-path="src/components/FlexColumn.tsx" align="center" justify="center" gap={4}>
          <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Continue Shopping" variant="secondary" size="lg" fullWidth={true} />
          <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Proceed to Checkout" variant="primary" size="lg" fullWidth={true} />
        </FlexColumn>
      </Section>
    </div>
  )
}

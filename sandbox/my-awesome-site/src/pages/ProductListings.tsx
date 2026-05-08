
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function ProductListings() {
  return (
    <div>
      <Hero data-component-path="src/components/Hero.tsx" title="Premium Athletic Footwear" subtitle="Step Up Your Game" background="https://placehold.co/800x600/e2e8f0/475569?text=Premium+Athletic+Footwear" textAlign="center" size="xl" />
      <Section data-component-path="src/components/Section.tsx" padding={4} backgroundColor="white">
        <Heading data-component-path="src/components/Heading.tsx" children="Shop the Latest Athletic Shoes" level={1} align="center" color="primary" />
        <Grid data-component-path="src/components/Grid.tsx" cols={3} gap={4}>
          <Card data-component-path="src/components/Card.tsx" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="none">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/800x600/6b7280/6b7280?text=Running+Sneakers" alt="Running Sneakers" rounded="lg" width={300} height={300} objectFit="contain" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="AirMax Pro 2024" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$129.99" size="md" color="primary" align="center" />
            <FlexColumn data-component-path="src/components/FlexColumn.tsx" align="center" justify="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="New" variant="secondary" size="sm" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexColumn>
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="none">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/800x600/6b7280/6b7280?text=Training+Shoes" alt="Training Shoes" rounded="lg" width={300} height={300} objectFit="contain" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Velocity Trainer 5.0" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$119.99" size="md" color="primary" align="center" />
            <FlexColumn data-component-path="src/components/FlexColumn.tsx" align="center" justify="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="Best Seller" variant="primary" size="sm" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexColumn>
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" shadow="md" border="none">
            <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/800x600/6b7280/6b7280?text=Basketball+Shoes" alt="Basketball Shoes" rounded="lg" width={300} height={300} objectFit="contain" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="CourtMaster Elite" size="lg" color="primary" align="center" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="$139.99" size="md" color="primary" align="center" />
            <FlexColumn data-component-path="src/components/FlexColumn.tsx" align="center" justify="center" gap={2}>
              <Badge data-component-path="src/components/Badge.tsx" children="Limited Edition" variant="secondary" size="sm" />
              <SubmitButton data-component-path="src/components/SubmitButton.tsx" children="Add to Cart" variant="primary" size="md" fullWidth={true} />
            </FlexColumn>
          </Card>
        </Grid>
      </Section>
      <Section data-component-path="src/components/Section.tsx" padding={4} backgroundColor="gray-50">
        <Heading data-component-path="src/components/Heading.tsx" children="Why Choose Our Athletic Collection?" level={2} align="center" color="primary" />
        <FlexRow data-component-path="src/components/FlexRow.tsx" className="max-w-4xl mx-auto justify-center space-x-4" align="center" justify="center">
          <Card data-component-path="src/components/Card.tsx" className="bg-white p-4 rounded-lg shadow-sm text-center" rounded="lg" shadow="sm" border="none">
            <Icon data-component-path="src/components/Icon.tsx" name="shield" size="xl" color="primary" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Premium Materials" size="lg" color="primary" align="center" />
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-white p-4 rounded-lg shadow-sm text-center" rounded="lg" shadow="sm" border="none">
            <Icon data-component-path="src/components/Icon.tsx" name="trending-up" size="xl" color="primary" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Cutting Edge Design" size="lg" color="primary" align="center" />
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-white p-4 rounded-lg shadow-sm text-center" rounded="lg" shadow="sm" border="none">
            <Icon data-component-path="src/components/Icon.tsx" name="speed" size="xl" color="primary" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Performance Optimized" size="lg" color="primary" align="center" />
          </Card>
        </FlexRow>
      </Section>
      <CTASection data-component-path="src/components/CTASection.tsx" title="Ready to Elevate Your Performance?" description="Join thousands of athletes who trust MyBrand for their training needs." primaryButton="Shop Now" secondaryButton="View Collection" background="https://placehold.co/800x600/e2e8f0/475569?text=Shop+Now" backgroundOpacity={10} textColor="white" align="center" />
      <Section data-component-path="src/components/Section.tsx" padding={6} backgroundColor="gray-50">
        <TextBlock data-component-path="src/components/TextBlock.tsx" children="Free shipping on orders over $75 | 30-day return policy | Secure checkout guaranteed" size="lg" color="secondary" align="center" />
      </Section>
    </div>
  )
}

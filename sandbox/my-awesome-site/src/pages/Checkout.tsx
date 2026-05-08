
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <Hero data-component-path="src/components/Hero.tsx" title="Secure Checkout" subtitle="Complete your purchase with confidence" />
      <Section data-component-path="src/components/Section.tsx" padding={4}>
        <Grid data-component-path="src/components/Grid.tsx" cols={2}>
          <Card data-component-path="src/components/Card.tsx" className="bg-white shadow-md rounded-lg p-6">
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Order Summary" size="lg" color="indigo.600" />
            <FlexColumn data-component-path="src/components/FlexColumn.tsx" align="start" justify="center" gap={2}>
              <Image data-component-path="src/components/Image.tsx" src="https://placehold.co/300x300/e2e8f0/475569?text=Product+Image" alt="Product Image" width={300} height={300} rounded="xl" />
              <TextBlock data-component-path="src/components/TextBlock.tsx" children="Premium Athletic Shoes" size="md" color="indigo.700" />
              <TextBlock data-component-path="src/components/TextBlock.tsx" children="$129.99" size="xl" color="indigo.800" />
              <TextBlock data-component-path="src/components/TextBlock.tsx" children="Free Shipping & Returns" size="sm" color="indigo.500" />
            </FlexColumn>
          </Card>
          <Card data-component-path="src/components/Card.tsx" className="bg-white shadow-md rounded-lg p-6">
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Shipping Information" size="lg" color="indigo.600" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="We ship within 2 business days. Standard delivery takes 3-5 business days. Express shipping available at checkout." size="md" color="indigo.700" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Free standard shipping on orders over $75" size="sm" color="indigo.500" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Track your package with real-time updates" size="sm" color="indigo.500" />
          </Card>
        </Grid>
        <Section data-component-path="src/components/Section.tsx" padding={4}>
          <FlexRow data-component-path="src/components/FlexRow.tsx" justify="center" gap={4}>
            <SubmitButton data-component-path="src/components/SubmitButton.tsx" loadingText="Processing..." variant="primary" size="lg" fullWidth={true} disabled={false} children="Place Order" />
            <TextBlock data-component-path="src/components/TextBlock.tsx" children="Need help? Contact our support team" size="sm" color="indigo.600" align="center" />
          </FlexRow>
        </Section>
      </Section>
    </div>
  )
}

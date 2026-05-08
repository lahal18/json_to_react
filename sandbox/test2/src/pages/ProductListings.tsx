
import React from "react"
import { Badge, Card, FlexRow, Grid, Heading, Hero, Image, Section, SubmitButton, TextBlock } from "../components"

export default function ProductListings() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Premium Sports Wear Collection" subtitle="Elevate Your Game" className="text-center py-20 bg-indigo-50" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Shop Top-Rated Athletic Gear" level={1} align="center" color="indigo" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6}>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Running+Sneakers" alt="Running Sneakers" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="AirMax Pro Running Sneakers" size="lg" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$129.99" size="xl" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Best Seller" variant="primary" size="md" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="between" items="center">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children="Sizes 7-15" size="sm" color="indigo" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton children="Add to Cart" variant="primary" size="sm" className="ml-2" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Performance+Jersey" alt="Performance Jersey" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Pro Dri-FIT Training Jersey" size="lg" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$89.99" size="xl" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="New Arrival" variant="secondary" size="md" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="between" items="center">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children="Sizes S-XXL" size="sm" color="indigo" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton children="Add to Cart" variant="primary" size="sm" className="ml-2" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Training+Shorts" alt="Training Shorts" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="FlexWeave Training Shorts" size="lg" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$59.99" size="xl" color="indigo" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Limited Stock" variant="warning" size="md" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="between" items="center">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children={"Inseam 9\""} size="sm" color="indigo" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton children="Add to Cart" variant="primary" size="sm" className="ml-2" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={12} backgroundColor="indigo-50">
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Free shipping on orders over $75 | Secure checkout | 30-day returns" size="lg" align="center" color="indigo" />
        </div>
        </Section>
      </div>
    </div>
  )
}

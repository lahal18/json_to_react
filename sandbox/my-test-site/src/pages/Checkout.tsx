
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Secure Checkout" subtitle="Complete Your Fitness Transformation" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4}>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={2}>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white shadow-md rounded-lg overflow-hidden" padding={4}>
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Product+Image" alt="Premium Resistance Bands" className="w-full h-48 object-cover" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Elite Resistance Band Set" className="p-2 font-medium text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$49.99" className="p-2 font-bold text-indigo-600" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="center" gap={2}>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Best Seller" className="bg-indigo-100 text-indigo-800 rounded px-2 py-1 text-xs" variant="secondary" />
              </div>
              <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
                <FlexColumn align="center" justify="center">
                <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                  <TextBlock children="Free Shipping" className="text-sm text-gray-500" />
                </div>
                </FlexColumn>
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white shadow-md rounded-lg overflow-hidden" padding={4}>
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Product+Image" alt="Premium Yoga Mat" className="w-full h-48 object-cover" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Premium Yoga Mat" className="p-2 font-medium text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$39.99" className="p-2 font-bold text-indigo-600" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="center" wrap="wrap">
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="In Stock" className="bg-green-100 text-green-800 rounded px-2 py-1 text-xs" variant="secondary" />
              </div>
              <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
                <FlexColumn align="center" justify="center">
                <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                  <TextBlock children="Fast Dispatch" className="text-sm text-gray-500" />
                </div>
                </FlexColumn>
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
        <Section padding={4}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Secure Payment Processing" level={3} className="text-xl font-bold text-gray-900 mb-4" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Your payment information is encrypted using bank-grade SSL technology. We accept all major credit cards and PayPal for your convenience." className="text-gray-600 mb-6" />
        </div>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow align="center" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
            <Icon name="credit-card" className="text-indigo-500" size={24} />
          </div>
          <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
            <Icon name="lock" className="text-indigo-500" size={24} />
          </div>
          <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
            <Icon name="shield" className="text-indigo-500" size={24} />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Order Summary" level={3} className="text-xl font-bold text-gray-900 mb-4" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={2}>
          <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Item" level={4} className="font-medium text-gray-900" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Premium Resistance Bands" className="font-medium text-gray-800" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="1" className="ml-4 text-gray-500" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="$49.99" className="font-medium text-gray-900" />
          </div>
          <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Subtotal" level={4} className="font-medium text-gray-900 mt-4" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="$49.99" className="font-medium text-gray-900" />
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Marketing/CTASection.tsx" style={{ display: "contents" }}>
        <CTASection title="Complete Your Fitness Journey" description="Join thousands of fitness enthusiasts who have transformed their lives with our premium equipment." primaryButton="Place Order Now" secondaryButton="Continue Shopping" className="py-8" background="white" textColor="gray-900" align="center" />
      </div>
    </div>
  )
}

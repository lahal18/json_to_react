
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, SubmitButton, TextBlock } from "../components"

export default function ShoppingCart() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Your Sports Gear Awaits" subtitle="Premium equipment for champions" className="text-center py-20" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={8}>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="lg" border="border-gray-200">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x400/e2e8f0/6b7280?text=Basketball+Pro" alt="Basketball Pro" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Basketball Pro" className="text-lg font-semibold text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$129.99" className="text-2xl font-bold text-indigo-600 mt-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="center" gap={2}>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Best Seller" variant="secondary" size="sm" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="sm" children="Add to Cart" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="lg" border="border-gray-200">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x400/e2e8f0/6b7280?text=Running+Sneakers+Elite" alt="Running Sneakers Elite" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Running Sneakers Elite" className="text-lg font-semibold text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-2xl font-bold text-indigo-600 mt-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="center" gap={2}>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Top Rated" variant="secondary" size="sm" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="sm" children="Add to Cart" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" padding={6} rounded="lg" border="border-gray-200">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x400/e2e8f0/6b7280?text=Baseball+Gloves+Pro" alt="Baseball Gloves Pro" className="rounded-t-lg" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Baseball Gloves Pro" className="text-lg font-semibold text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$89.99" className="text-2xl font-bold text-indigo-600 mt-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="center" gap={2}>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Limited Stock" variant="secondary" size="sm" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="sm" children="Add to Cart" />
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
        <Section padding={8}>
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Cart Summary" level={3} className="text-xl font-bold text-gray-900 mb-6" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6}>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Item" className="text-sm font-medium text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Product" className="text-sm font-medium text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Price" className="text-sm font-medium text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Total" className="text-sm font-medium text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Remove" className="text-sm font-medium text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          </Grid>
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6}>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="flex-start" gap={2}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Running Sneakers Elite" className="text-gray-800 font-medium" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Premium performance sneakers for serious athletes" className="text-gray-500 text-sm" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="flex-start">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-gray-800 font-medium" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="x 1" className="text-gray-500" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="flex-start">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-gray-800 font-medium" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="flex-start">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$149.99" className="text-gray-800 font-medium" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="flex-start">
            <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
              <Badge children="Remove" variant="secondary" size="sm" />
            </div>
            </FlexColumn>
          </div>
          </Grid>
        </div>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow justify="flex-end" gap={4}>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Subtotal:" className="text-lg font-medium text-gray-900" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="$149.99" className="text-lg font-bold text-gray-900" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="" className="w-64" />
          </div>
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton variant="primary" size="lg" fullWidth={true} children="Proceed to Checkout" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} backgroundColor="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Free Shipping on Orders Over $50" className="text-xl font-bold text-gray-900 mb-2" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Fast, reliable shipping straight to your door. No hidden fees, just premium gear ready to elevate your game." className="text-gray-600 text-sm" />
        </div>
        </Section>
      </div>
    </div>
  )
}

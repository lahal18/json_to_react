
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Cart() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Your Cart" subtitle="Secure your gains with every purchase" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4}>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3}>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col h-full" rounded="lg" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Protein+Powder" alt="Protein Powder" className="rounded-t-lg" width={400} height={300} objectFit="cover" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Whey Isolate 5lbs" className="text-lg font-semibold text-gray-900 mb-1" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$39.99" className="text-2xl font-bold text-indigo-600 mb-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between" gap={2}>
              <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
                <InputField label="Qty" type="number" value={1} min={1} max={10} placeholder="1" className="w-16 text-center text-sm text-gray-500 bg-gray-50 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500" disabled={false} />
              </div>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Free Shipping" variant="secondary" size="sm" rounded="full" />
              </div>
              </FlexRow>
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children="Subtotal: $39.99" className="text-gray-600 font-medium" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="lg" fullWidth={true} disabled={false} children="Continue Shopping" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col h-full" rounded="lg" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/400x300/e2e8f0/6b7280?text=Pre-Workout+Supplement" alt="Pre-Workout Supplement" className="rounded-t-lg" width={400} height={300} objectFit="cover" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Pre-Workout 30 Servings" className="text-lg font-semibold text-gray-900 mb-1" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$29.99" className="text-2xl font-bold text-indigo-600 mb-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between" gap={2}>
              <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
                <InputField label="Qty" type="number" value={1} min={1} max={10} placeholder="1" className="w-16 text-center text-sm text-gray-500 bg-gray-50 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500" disabled={false} />
              </div>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="In Stock" variant="secondary" size="sm" rounded="full" />
              </div>
              </FlexRow>
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children="Subtotal: $29.99" className="text-gray-600 font-medium" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="lg" fullWidth={true} disabled={false} children="Add to Cart" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col h-full" rounded="lg" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Fitness Tracker" className="text-lg font-semibold text-gray-900 mb-1" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Track your reps, sets, and progress with our premium fitness tracker." className="text-sm text-gray-600 mb-4" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$19.99" className="text-2xl font-bold text-indigo-600 mb-2" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between">
              <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
                <InputField label="Qty" type="number" value={1} min={1} max={10} placeholder="1" className="w-16 text-center text-sm text-gray-500 bg-gray-50 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500" disabled={false} />
              </div>
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Best Seller" variant="secondary" size="sm" rounded="full" />
              </div>
              </FlexRow>
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow align="center" justify="space-between">
              <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
                <TextBlock children="Subtotal: $19.99" className="text-gray-600 font-medium" />
              </div>
              <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
                <SubmitButton variant="primary" size="lg" fullWidth={true} disabled={false} children="Add to Cart" />
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
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="center" justify="center" gap={2}>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Secure Checkout" className="text-2xl font-bold text-gray-900" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Your payment information is encrypted and processed securely. We accept all major credit cards and PayPal." className="text-gray-600 text-center max-w-md" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4}>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow align="center" justify="flex-end" gap={2}>
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton variant="primary" size="lg" fullWidth={false} disabled={false} children="Proceed to Checkout" />
          </div>
          <div data-component-path="src/components/Marketing/CTASection.tsx" style={{ display: "contents" }}>
            <CTASection title="Join Our Fitness Community" description="Get 20% off your first order when you subscribe to our newsletter." primaryButton="Subscribe & Save" secondaryButton="Continue Shopping" className="bg-indigo-50 rounded-xl p-6 text-center" background="bg-indigo-50" textColor="text-indigo-800" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
    </div>
  )
}


import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Checkout() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Secure Checkout" subtitle="Complete your purchase with confidence" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4}>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={2}>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-lg shadow-md p-6" padding={4} shadow="md" rounded="lg">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Order Summary" size="xl" color="indigo-800" align="left" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="View your complete order details, shipping information, and payment summary before finalizing your purchase." />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-lg shadow-md p-6" padding={4} shadow="md" rounded="lg">
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Payment Details" size="xl" color="indigo-800" align="left" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Enter your secure payment information. We accept all major credit cards and digital wallets for your convenience." />
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
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton loading={false} loadingText="Processing..." variant="primary" size="lg" fullWidth={true} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors" onClick="handleSubmit" disabled={false} />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Continue Shopping" size="lg" color="indigo-600" align="center" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={4} backgroundColor="indigo-50">
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow justify="space-between" align="center">
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Free Shipping on Orders Over $75" size="lg" color="indigo-700" align="left" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Secure Payment Processing" size="lg" color="indigo-700" align="right" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
    </div>
  )
}

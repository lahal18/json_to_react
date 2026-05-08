
import React from "react"
import { Badge, Card, Container, FeatureCard, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Contact() {
  return (
    <div>
      <div data-component-path="src/components/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Get In Touch" subtitle="We're Here To Help You Shop Smarter" className="text-center py-20 mx-auto max-w-3xl" />
      </div>
      <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Container.tsx" style={{ display: "contents" }}>
          <Container className="mx-auto max-w-4xl">
          <div data-component-path="src/components/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Need Assistance?" level={2} align="center" color="primary" className="text-3xl font-bold" />
          </div>
          <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Have a question about your order, shipping, or product details? Our dedicated support team is ready to assist you. We respond within 24 hours on business days." className="mt-4 text-lg text-gray-700 leading-relaxed" />
          </div>
          <div data-component-path="src/components/Grid.tsx" style={{ display: "contents" }}>
            <Grid cols={3} gap={8}>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Order Support" description="Track your package, check order status, or modify your purchase before it ships." icon="ShoppingCartIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Returns & Refunds" description="Easy returns within 30 days. We'll process your refund as soon as we receive the item." icon="ArrowRightUpOnSquareIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Product Experts" description="Chat with our knowledgeable staff who know our products inside and out." icon="ChatBubbleLeftBottomIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            </Grid>
          </div>
          <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={6}>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Email Us" className="text-lg font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="support@mybrand.com" className="text-lg font-medium text-gray-800 hover:text-indigo-600 cursor-pointer underline" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="center" justify="center" gap={6}>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Call Us" className="text-lg font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="+1 (800) 555-0199" className="text-lg font-medium text-gray-800 hover:text-indigo-600 cursor-pointer underline" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Section.tsx" style={{ display: "contents" }}>
            <Section backgroundColor="indigo-50" padding={6}>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Still Can't Find What You're Looking For?" className="text-center text-lg font-medium text-gray-600" />
            </div>
            <div data-component-path="src/components/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Browse our complete catalog or explore our most popular categories below." className="mt-2 text-center text-gray-500" />
            </div>
            </Section>
          </div>
          <div data-component-path="src/components/Grid.tsx" style={{ display: "contents" }}>
            <Grid cols={3} gap={4}>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Shop All Categories" description="Explore our best-selling categories including Electronics, Apparel, and Home Goods." icon="ShoppingBagIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Free Shipping" description="Enjoy free standard shipping on orders over $75. No minimum for eligible items." icon="GiftIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Secure Checkout" description="Bank-level encryption keeps your payment information safe and protected." icon="LockIcon" variant="default" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            </Grid>
          </div>
          </Container>
        </div>
        </Section>
      </div>
    </div>
  )
}

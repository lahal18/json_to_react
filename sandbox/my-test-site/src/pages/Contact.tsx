
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Contact() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Get In Touch With Us" subtitle="We're Here To Help You Crush Your Fitness Goals" className="text-center py-24" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8}>
        <div data-component-path="src/components/Layout/Container.tsx" style={{ display: "contents" }}>
          <Container maxWidth={3} padding={6}>
          <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
            <Heading children="Contact Our Support Team" level={2} className="text-indigo-700 font-bold text-3xl mb-4" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Have questions about your workout plan, order status, or product recommendations? Our certified fitness coaches and support staff are standing by to help you achieve peak performance. Join thousands of athletes who have transformed their lives with MyBrand." className="text-gray-700 mb-8 leading-relaxed" />
          </div>
          <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
            <Grid cols={3} gap={8}>
            <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="24/7 Live Chat Support" description="Get instant answers to your questions any time of day with our round-the-clock live chat support from certified fitness professionals." icon="MessageSquare" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Email Consultations" description="Schedule personalized workout consultations via email with our expert trainers who will tailor a plan specifically for your fitness journey." icon="Email" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
              <FeatureCard title="Community Forum Access" description="Connect with fellow fitness enthusiasts, share progress, and get motivation from our active community of over 50,000 athletes crushing their goals daily." icon="Users" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
            </div>
            </Grid>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="start" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Prefer to call us?" className="text-indigo-600 font-medium" />
            </div>
            <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
              <InputField label="Phone Number" placeholder="+1 (555) 123-4567" className="mt-1 block w-full" type="tel" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
            <FlexColumn align="start" justify="center" gap={4}>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Send us a message" className="text-indigo-600 font-medium" />
            </div>
            <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
              <InputField label="Your Message" placeholder="Tell us how we can help you achieve your fitness goals..." className="mt-1 block w-full" type="text" />
            </div>
            </FlexColumn>
          </div>
          <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
            <FlexRow className="mt-8">
            <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
              <SubmitButton loadingText="Sending..." variant="primary" size="lg" fullWidth={true} disabled={false} children="Send Message" />
            </div>
            </FlexRow>
          </div>
          </Container>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={12} backgroundColor="gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Still Have Questions?" level={2} className="text-center text-indigo-700 font-bold mb-6" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Join our community of over 100,000 fitness enthusiasts who have achieved their dream physiques with MyBrand. Our comprehensive FAQ section covers everything from shipping policies to workout techniques." className="text-center text-gray-600 mb-8 leading-relaxed" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6}>
          <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
            <FeatureCard title="Order Support" description="Track your shipment, update your order, or request returns with our dedicated order support team." icon="Box" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          </div>
          <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
            <FeatureCard title="Product Advice" description="Get expert advice on supplement stacking, workout nutrition, and recovery protocols from our certified nutritionists." icon="Leaf" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          </div>
          <div data-component-path="src/components/Marketing/FeatureCard.tsx" style={{ display: "contents" }}>
            <FeatureCard title="Community Challenges" description="Join weekly fitness challenges, share your progress, and win exclusive rewards in our supportive community." icon="Trophy" variant="default" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Navigation/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-500 py-8">
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="center" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="© 2024 MyBrand. All rights reserved." className="text-gray-600 text-center" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Privacy Policy | Terms of Service | Cookie Policy" className="text-gray-600 text-center text-sm" />
          </div>
          </FlexColumn>
        </div>
        </Footer>
      </div>
    </div>
  )
}

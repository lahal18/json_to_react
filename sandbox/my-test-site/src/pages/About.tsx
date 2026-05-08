
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function About() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Our Fitness Journey" subtitle="Empowering Champions Through Innovation" className="text-center py-24" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Why Choose MyBrand?" level={2} className="text-3xl font-bold text-indigo-800 mb-6" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6} className="grid-cols-1 md:grid-cols-3">
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow" rounded="xl" shadow="md">
            <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
              <Icon name="shield" size="xl" color="indigo-500" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
              <Heading children="Premium Quality" level={3} className="text-xl font-semibold text-indigo-700 mt-4" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Lab-tested supplements crafted for athletes who demand purity and performance. Every ingredient is sourced sustainably and formulated to deliver measurable results." size="md" color="text-gray-700" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow" rounded="xl" shadow="md">
            <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
              <Icon name="heart-pulse" size="xl" color="indigo-500" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
              <Heading children="Science-Backed Formulas" level={3} className="text-xl font-semibold text-indigo-700 mt-4" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Developed with sports nutritionists and certified trainers. Our products undergo rigorous clinical testing to ensure bioavailability and efficacy for serious fitness results." size="md" color="text-gray-700" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow" rounded="xl" shadow="md">
            <div data-component-path="src/components/ContentDisplay/Icon.tsx" style={{ display: "contents" }}>
              <Icon name="users" size="xl" color="indigo-500" />
            </div>
            <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
              <Heading children="Community-Driven" level={3} className="text-xl font-semibold text-indigo-700 mt-4" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Join 50,000+ athletes who've transformed their routines with MyBrand. Share your progress, get expert tips, and become part of a movement redefining fitness culture." size="md" color="text-gray-700" />
            </div>
            </Card>
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={12} className="bg-indigo-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Trusted by Champions" level={2} className="text-3xl font-bold text-center text-indigo-900 mb-8" />
        </div>
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="center" justify="center" gap={4}>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x300/f3f4f6/6b7280?text=Elite+Athlete+1" alt="Elite Athlete" className="rounded-xl shadow-md" width={200} height={200} objectFit="cover" />
          </div>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x300/f3f4f6/6b7280?text=Elite+Athlete+2" alt="Elite Athlete" className="rounded-xl shadow-md" width={200} height={200} objectFit="cover" />
          </div>
          <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
            <Image src="https://placehold.co/400x300/f3f4f6/6b7280?text=Elite+Athlete+3" alt="Elite Athlete" className="rounded-xl shadow-md" width={200} height={200} objectFit="cover" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Join the Movement" level={2} className="text-3xl font-bold text-center text-indigo-900 mb-6 text-gray-800" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Ready to elevate your fitness journey? Discover why elite athletes trust MyBrand to power their performance. Every product is engineered for those who refuse to settle for less than their absolute best." size="lg" color="text-gray-700 text-center max-w-3xl mx-auto" />
        </div>
        <div data-component-path="src/components/Marketing/CTASection.tsx" style={{ display: "contents" }}>
          <CTASection title="Transform Your Routine" description="Experience the MyBrand difference with scientifically formulated supplements that deliver real results." primaryButton="Shop Now" secondaryButton="Read Success Stories" background="white" textColor="text-indigo-900" align="center" />
        </div>
        </Section>
      </div>
    </div>
  )
}

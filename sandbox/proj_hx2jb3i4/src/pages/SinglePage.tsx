
import React from "react"
import { CTASection, Card, Grid, Heading, Hero, Image, Section, TextBlock } from "../components"

export default function SinglePage() {
  return (
    <div>
      <Hero title="Introducing SinglePage" subtitle="Modern and sleek design for adults" background="primaryColor" textAlign="center" size="lg" />
      <Section className="bg-white">
        <Grid cols={3}>
          <Image src="/product1.jpg" alt="Product 1" className="rounded-lg" width={200} height={200} objectFit="contain" />
          <Image src="/product2.jpg" alt="Product 2" className="rounded-lg" width={200} height={200} objectFit="contain" />
          <Image src="/product3.jpg" alt="Product 3" className="rounded-lg" width={200} height={200} objectFit="contain" />
        </Grid>
      </Section>
      <Section className="py-6">
        <Heading children="Customer Reviews" level={3} align="center" />
      </Section>
      <Section className="bg-gray-50">
        <Grid cols={2}>
          <Card className="bg-white rounded-lg shadow-md p-4" padding={4} shadow="md">
            <TextBlock children="This product changed my life! Highly recommend." size="md" align="left" />
            <TextBlock children="John Doe" size="sm" align="right" color="primaryColor" />
          </Card>
          <Card className="bg-white rounded-lg shadow-md p-4" padding={4} shadow="md">
            <TextBlock children="Best purchase I've made this year." size="md" align="left" />
            <TextBlock children="Jane Smith" size="sm" align="right" color="primaryColor" />
          </Card>
        </Grid>
      </Section>
      <CTASection title="Ready to upgrade your experience?" description="Join thousands of satisfied customers" primaryButton="Buy Now" secondaryButton="Learn More" background="primaryColor" textColor="white" align="center" />
    </div>
  )
}

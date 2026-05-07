
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Products() {
  return (
    <div>
      <Hero title="Modern Gear Collection" subtitle="Premium equipment for discerning professionals" className="text-center py-12" />
      <Section className="bg-gray-50 py-8">
        <Heading children="Featured Products" level={2} color="text-indigo-700" align="text-left" />
        <Grid cols={3} gap={4}>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/product1.jpg" alt="Professional Drill Set" width={300} height={300} rounded="md" objectFit="contain" />
            <Heading children="Pro Drill Set" level={4} color="text-gray-800" />
            <TextBlock children="$189.99" size={2} color="text-indigo-600" />
            <FlexRow align="center" justify="between" gap={2}>
              <Badge children="Best Seller" variant="secondary" size="sm" />
              <FlexColumn align="center" justify="center">
                <TextBlock children="4.8 ★" size={1} color="text-yellow-400" />
              </FlexColumn>
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/product2.jpg" alt="Smart Impact Driver" width={300} height={300} rounded="md" objectFit="contain" />
            <Heading children="Smart Impact Driver" level={4} color="text-gray-800" />
            <TextBlock children="$149.99" size={2} color="text-indigo-600" />
            <FlexRow align="center" justify="between" gap={2}>
              <Badge children="New" variant="secondary" size="sm" />
              <FlexColumn align="center" justify="center">
                <TextBlock children="4.6 ★" size={1} color="text-yellow-400" />
              </FlexColumn>
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/product3.jpg" alt="Multi-tool Kit" width={300} height={300} rounded="md" objectFit="contain" />
            <Heading children="Multi-tool Kit" level={4} color="text-gray-800" />
            <TextBlock children="$89.99" size={2} color="text-indigo-600" />
            <FlexRow align="center" justify="between" gap={2}>
              <Badge children="Top Rated" variant="secondary" size="sm" />
              <FlexColumn align="center" justify="center">
                <TextBlock children="4.9 ★" size={1} color="text-yellow-400" />
              </FlexColumn>
            </FlexRow>
          </Card>
        </Grid>
      </Section>
      <Section className="bg-indigo-50 py-12">
        <Heading children="Need Help?" level={2} color="text-white" align="text-center" />
        <FlexColumn align="center" justify="center" gap={3}>
          <TextBlock children="Have questions about our products? Our expert team is ready to assist you." size={1} color="text-gray-200" />
          <FlexRow align="center" justify="center" gap={2}>
            <SubmitButton children="Contact Support" variant="ghost" size="lg" className="text-indigo-600 hover:text-indigo-400" />
            <SubmitButton children="View FAQ" variant="outline" size="lg" className="text-white hover:bg-indigo-600" />
          </FlexRow>
        </FlexColumn>
      </Section>
    </div>
  )
}

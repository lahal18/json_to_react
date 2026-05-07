
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Welcome to Modern Gear" subtitle="Premium equipment for discerning professionals" className="text-center py-20" background="bg-indigo-50" />
      <Section className="py-12">
        <Heading children="Featured Collections" level={2} color="text-gray-800" />
        <Grid cols={3} gap={6}>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/premium-drill.jpg" alt="Premium Drill" width={300} height={200} rounded="md" />
            <TextBlock children="Pro Drill" size={2} color="text-gray-900" />
            <TextBlock children="$149.99" size={3} color="text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="New" variant="secondary" size="sm" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" fullWidth={true} />
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/impact-wrench.jpg" alt="Impact Wrench" width={300} height={200} rounded="md" />
            <TextBlock children="Impact Wrench" size={2} color="text-gray-900" />
            <TextBlock children="$199.99" size={3} color="text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Best Seller" variant="primary" size="sm" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" fullWidth={true} />
            </FlexRow>
          </Card>
          <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow" rounded="lg" border="border-gray-100">
            <Image src="/images/laser-level.jpg" alt="Laser Level" width={300} height={200} rounded="md" />
            <TextBlock children="Laser Level" size={2} color="text-gray-900" />
            <TextBlock children="$89.99" size={3} color="text-indigo-600" />
            <FlexRow justify="center" gap={2}>
              <Badge children="Clearance" variant="secondary" size="sm" />
              <SubmitButton children="Add to Cart" variant="primary" size="sm" fullWidth={true} />
            </FlexRow>
          </Card>
        </Grid>
      </Section>
      <Section className="bg-indigo-50 py-16">
        <Heading children="Why Choose Modern Gear" level={2} align="center" color="text-gray-800" />
        <FlexColumn align="center" justify="center" gap={8}>
          <StatsCard title="Premium Quality" value="100%" icon="Check" change="+15%" description="Rigorous quality control" />
          <StatsCard title="Fast Shipping" value="2 Days" icon="ArrowRight" change="+20%" description="Free shipping over $75" />
          <StatsCard title="Secure Payment" value="100% Secure" icon="Lock" change="+30%" description="Multiple payment options" />
        </FlexColumn>
      </Section>
      <Section className="py-12">
        <Heading children="Customer Reviews" level={2} align="center" color="text-gray-800" />
        <Testimonials testimonials={[{"author": "James R.", "rating": 5, "text": "The impact wrench exceeded my expectations - powerful and reliable. Perfect for my workshop.", "image": "/images/james.jpg"}, {"author": "Michael T.", "rating": 4, "text": "Laser level saved me hours on my renovation. Highly accurate and easy to use.", "image": "/images/michael.jpg"}]} className="space-y-6" columns={1} autoplay={true} autoplaySpeed={5000} />
      </Section>
      <CTASection title="Ready to Upgrade Your Workshop?" description="Join thousands of professionals who trust Modern Gear for their projects" primaryButton={{"type": "SubmitButton", "props": {"children": "Browse Products", "variant": "primary", "size": "lg", "fullWidth": true}}} secondaryButton={{"type": "SubmitButton", "props": {"children": "Watch Video Testimonials", "variant": "secondary", "size": "lg", "fullWidth": true}}} className="bg-indigo-600 text-white text-center py-16" background="bg-indigo-600" textColor="text-white" align="center" />
    </div>
  )
}

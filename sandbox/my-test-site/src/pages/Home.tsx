
import React from "react"
import { Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Fuel Your Fitness Journey" subtitle="Premium Supplements for Peak Performance" background="https://placehold.co/1200x600/f3f4f6/6b7280?text=Fitness+Enthusiast+Hero+Image" className="text-center py-20" textAlign="center" size="xl" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Featured Collections" level={2} className="text-indigo-800 font-bold text-3xl md:text-4xl mb-6" align="center" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} className="gap-6">
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="xl" shadow="sm">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/8a88ff/000000?text=Pre-Workout" alt="Pre-Workout Supplement" className="rounded-t-xl" objectFit="cover" width={300} height={300} />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Pre-Workout Ignition" className="p-4 font-medium text-gray-900" size="lg" color="indigo-800" as="h3" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$34.99" className="p-3 text-xl font-bold text-indigo-700" size="xl" color="indigo-700" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="xl" shadow="sm">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/ff6b6b/000000?text=Protein+Powder" alt="Whey Protein Isolate" className="rounded-t-xl" objectFit="cover" width={300} height={300} />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Whey Isolate 2.0" className="p-4 font-medium text-gray-900" size="lg" color="indigo-800" as="h3" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$49.99" className="p-3 text-xl font-bold text-indigo-700" size="xl" color="indigo-700" />
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" rounded="xl" shadow="sm">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://placehold.co/300x300/4ecdc4/000000?text=Recovery+Blend" alt="Post-Workout Recovery" className="rounded-t-xl" objectFit="cover" width={300} height={300} />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Recovery Blend" className="p-4 font-medium text-gray-900" size="lg" color="indigo-800" as="h3" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$29.99" className="p-3 text-xl font-bold text-indigo-700" size="xl" color="indigo-700" />
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
          <Heading children="Join 10,000+ Fitness Athletes" level={2} className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4" align="center" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="Transform your training with science-backed supplements designed for serious athletes. Free shipping on orders over $75." className="text-center text-gray-600 mb-8 max-w-2xl mx-auto" size="lg" color="indigo-600" align="center" />
        </div>
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="center" justify="center" gap={4}>
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton variant="primary" size="lg" fullWidth={true} disabled={false} loading={false} children="Shop Now" onClick="handleShopClick" type="submit" autoFocus={true} form="mainForm" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Free E-Book: 7-Day Muscle Builder Plan" className="text-sm text-indigo-700 hover:text-indigo-900" size="sm" color="indigo-700" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Why Choose MyBrand?" level={2} className="text-2xl font-bold text-indigo-800 mb-6 text-center" />
        </div>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow justify="center" wrap="wrap" gap={6}>
          <div data-component-path="src/components/DataDisplay/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Clinically Dosed" value="100% Transparent Ingredients" icon="flask" change="+200% more active compounds" description="No proprietary blends" className="bg-white p-6 rounded-xl shadow-sm text-center" />
          </div>
          <div data-component-path="src/components/DataDisplay/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Fast Results" value="30-Day Money Back" icon="shield-check" change="Guaranteed" description="Free returns within 30 days" className="bg-white p-6 rounded-xl shadow-sm text-center" />
          </div>
          <div data-component-path="src/components/DataDisplay/StatsCard.tsx" style={{ display: "contents" }}>
            <StatsCard title="Lab Tested" value="Informed Sport Certified" icon="microscope" change="Batch Verified" description="Every batch tested" className="bg-white p-6 rounded-xl shadow-sm text-center" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={12} className="bg-indigo-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Real Results, Real Athletes" level={2} className="text-2xl font-bold text-indigo-800 mb-8 text-center" />
        </div>
        <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
          <TextBlock children="These testimonials showcase authentic experiences from athletes who have transformed their performance with our scientifically formulated supplements." className="text-center text-gray-600 mb-8 max-w-2xl mx-auto" size="lg" color="indigo-600" align="center" />
        </div>
        <div data-component-path="src/components/Marketing/Testimonials.tsx" style={{ display: "contents" }}>
          <Testimonials testimonials="Click Here" className="text-center" variant="carousel" columns={1} autoplay={true} autoplaySpeed={5000} />
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn align="center" justify="center">
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Free shipping on all orders over $75" className="text-center text-gray-600 mb-2" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Secure Checkout" className="text-center text-gray-600 mb-2" />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="30-Day Returns" className="text-center text-gray-600" />
          </div>
          </FlexColumn>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Navigation/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-600 py-6" />
      </div>
    </div>
  )
}

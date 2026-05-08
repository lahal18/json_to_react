
import React from "react"
import { CTASection, Card, Grid, Hero, Image, Section, TextBlock } from "../components"

export default function Home() {
  return (
    <div>
      <Hero title="Experience Luxury Redefined" subtitle="Explore our premium collection of exquisite products" background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" textAlign="center" className="text-white" />
      <Section padding={8}>
        <Grid cols={3} gap={6}>
          <Card className="bg-white shadow-xl rounded-xl border border-gray-100" rounded="xl" shadow="xl" border="1px">
            <Image src="https://example.com/luxury-watch.jpg" alt="Premium Watch" className="rounded-t-lg" width={300} height={400} objectFit="contain" />
            <TextBlock children="Premium Watch" size={2} color="primaryColor" align="center" />
            <TextBlock children="Swiss Craftsmanship • 2 Year Warranty" size={1} color="gray-600" align="center" />
            <CTASection title="Explore Collection" description="Discover the pinnacle of luxury design" primaryButton="View Products" background="gray-50" align="center" />
          </Card>
        </Grid>
      </Section>
    </div>
  )
}

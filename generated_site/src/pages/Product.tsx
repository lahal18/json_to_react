
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, TextBlock } from "../components"

export default function Product() {
  return (
    <div>
      <Hero title="Premium Products" subtitle="Explore Our Collection" className="text-center py-24 bg-indigo-600 text-white" />
      <Section className="container mx-auto px-4 py-12">
        <Heading children="Featured Categories" level={2} className="text-2xl font-bold text-indigo-700 mb-6" />
        <FlexRow className="justify-center gap-4">
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow">
            <Image src="/images/categories/electronics.jpg" alt="Electronics" className="w-full h-48 object-cover rounded-md mb-2" />
            <TextBlock children="Electronics" className="text-lg font-medium text-gray-700" />
          </Card>
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow">
            <Image src="/images/categories/fashion.jpg" alt="Fashion" className="w-full h-48 object-cover rounded-md mb-2" />
            <TextBlock children="Fashion" className="text-lg font-medium text-gray-700" />
          </Card>
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow">
            <Image src="/images/categories/home.jpg" alt="Home & Kitchen" className="w-full h-48 object-cover rounded-md mb-2" />
            <TextBlock children="Home & Kitchen" className="text-lg font-medium text-gray-700" />
          </Card>
        </FlexRow>
        <Heading children="Latest Arrivals" level={2} className="text-2xl font-bold text-indigo-700 mb-6" />
        <Grid cols={3} gap={6} className="grid">
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full hover:shadow-xl transition-shadow">
            <Image src="/images/products/phone.jpg" alt="Smartphone" className="w-full h-48 object-cover rounded-md mb-3" />
            <TextBlock children="Smartphone Pro" className="text-lg font-semibold text-gray-700 mb-1" />
            <TextBlock children="$699.99" className="text-xl font-bold text-indigo-600 mb-2" />
            <FlexColumn className="mt-auto flex-1 flex flex-col items-center gap-2">
              <Badge children="New" className="bg-indigo-100 text-indigo-800 text-xs rounded px-2 py-1" />
              <TextBlock children="Free Shipping" className="text-sm text-gray-500" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full hover:shadow-xl transition-shadow">
            <Image src="/images/products/laptop.jpg" alt="Laptop" className="w-full h-48 object-cover rounded-md mb-3" />
            <TextBlock children="UltraBook 14"" className="text-lg font-semibold text-gray-700 mb-1" />
            <TextBlock children="$1,199.99" className="text-xl font-bold text-indigo-600 mb-2" />
            <FlexColumn className="mt-auto flex-1 flex flex-col items-center gap-2">
              <Badge children="In Stock" className="bg-green-100 text-green-800 text-xs rounded px-2 py-1" />
              <TextBlock children="Fast Delivery" className="text-sm text-gray-500" />
            </FlexColumn>
          </Card>
          <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full hover:shadow-xl transition-shadow">
            <Image src="/images/products/headphones.jpg" alt="Wireless Headphones" className="w-full h-48 object-cover rounded-md mb-3" />
            <TextBlock children="Premium Headphones" className="text-lg font-semibold text-gray-700 mb-1" />
            <TextBlock children="$199.99" className="text-xl font-bold text-indigo-600 mb-2" />
            <FlexColumn className="mt-auto flex-1 flex flex-col items-center gap-2">
              <Badge children="Best Seller" className="bg-purple-100 text-purple-800 text-xs rounded px-2 py-1" />
              <TextBlock children="4.8 ★ (1,243)" className="text-sm text-gray-500" />
            </FlexColumn>
          </Card>
        </Grid>
        <Heading children="Customer Reviews" level={2} className="text-2xl font-bold text-indigo-700 mb-6" />
        <Container className="mx-auto max-w-5xl">
          <FeatureGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Excellent Quality" description="The products exceed my expectations in quality and durability." icon="star" variant="solid" className="bg-white p-4 rounded-lg shadow-md text-center" />
            <FeatureCard title="Fast Shipping" description="Orders arrive faster than promised with real-time tracking." icon="truck" variant="outline" className="bg-white p-4 rounded-lg shadow-md text-center" />
            <FeatureCard title="Easy Returns" description="Hassle-free returns within 30 days if you're not completely satisfied." icon="undo" variant="solid" className="bg-white p-4 rounded-lg shadow-md text-center" />
          </FeatureGrid>
        </Container>
        <CTASection title="Ready to Upgrade Your Lifestyle?" description="Join thousands of satisfied customers who've transformed their daily routines." primaryButton={{"label": "Shop Now", "href": "/shop", "variant": "solid", "size": "lg", "className": "bg-indigo-600 hover:bg-indigo-700 text-white"}} secondaryButton={{"label": "Watch Our Collection", "href": "/blog", "variant": "outline", "size": "lg", "className": "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"}} className="bg-indigo-50 py-16 text-center" textColor="text-indigo-800" />
        <Section className="bg-gray-50 py-16">
          <Heading children="Read Our Latest Blog Posts" level={2} className="text-2xl font-bold text-indigo-700 mb-8" />
          <FlexRow className="justify-between items-start gap-6">
            <Card className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
              <Image src="/images/blog/seo-tips.jpg" alt="SEO Tips" className="h-48 rounded-md mb-3" />
              <TextBlock children="Mastering SEO for E-Commerce" className="text-lg font-semibold text-gray-700 mb-1" />
              <TextBlock children="April 15, 2025 • 5 min read" className="text-sm text-gray-500 mb-2" />
              <TextBlock children="Discover proven strategies to improve your online store's visibility and attract more organic traffic." className="text-gray-600 flex-1" />
              <FlexColumn className="mt-auto flex flex-col items-center gap-2">
                <Badge children="New" className="bg-indigo-100 text-indigo-800 text-xs rounded px-2 py-1" />
                <SubmitButton label="Read More" href="/blog/seo-tips" variant="outline" size="sm" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50" />
              </FlexColumn>
            </Card>
          </FlexRow>
        </Section>
      </Section>
    </div>
  )
}

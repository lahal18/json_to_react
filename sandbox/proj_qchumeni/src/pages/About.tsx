
import React from "react"
import { Badge, Card, Container, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, InputField, RadioButton, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock } from "../components"

export default function About() {
  return (
    <div>
      <Hero title="About Us" subtitle="Luxury Shoes for Discerning Men" className="text-center py-20" />
      <Section className="bg-gray-50 py-16">
        <Heading children="Our Story" level={2} className="text-3xl font-bold text-gray-800 mb-4" />
        <TextBlock children="Founded in 2010, LuxuryShoes has been crafting premium footwear for men who appreciate timeless design and unparalleled craftsmanship. Each pair is handcrafted using the finest materials sourced from Italy and Switzerland." className="text-gray-600 leading-relaxed mb-6" />
        <TextBlock children="Our mission is to create shoes that combine comfort with sophistication, offering a curated collection that reflects the essence of luxury. We believe that every step should be taken with confidence and style." className="text-gray-600 leading-relaxed mb-8" />
        <FlexColumn className="space-y-4">
          <Heading children="Our Craftsmanship" level={3} className="text-xl font-semibold text-gray-800" />
          <FlexRow align="flex-start" gap={4}>
            <Icon name="check" color="indigo-500" size="lg" />
            <TextBlock children="Premium Materials" className="text-gray-700" />
          </FlexRow>
          <FlexRow align="flex-start" gap={4}>
            <Icon name="check" color="indigo-500" size="lg" />
            <TextBlock children="Handmade Excellence" className="text-gray-700" />
          </FlexRow>
          <FlexRow align="flex-start" gap={4}>
            <Icon name="check" color="indigo-500" size="lg" />
            <TextBlock children="Timeless Design" className="text-gray-700" />
          </FlexRow>
        </FlexColumn>
        <Heading children="Our Commitment to You" level={2} className="text-3xl font-bold text-gray-800 mt-12 mb-6" />
        <TextBlock children="We offer worldwide shipping, secure payment processing, and a 30-day comfort guarantee. Every pair comes with premium packaging and dedicated customer support." className="text-gray-600 leading-relaxed mb-6" />
        <FlexColumn className="space-y-3">
          <Heading children="Free Worldwide Shipping" level={3} className="text-lg font-medium text-indigo-600" />
          <TextBlock children="Enjoy complimentary shipping on all orders over $150. Express delivery options available at checkout." className="text-gray-600 text-sm" />
        </FlexColumn>
      </Section>
      <Section className="bg-white py-12">
        <Heading children="Join Our Journey" level={2} className="text-3xl font-bold text-gray-800 text-center mb-4" />
        <TextBlock children="Experience the luxury of footwear crafted for the modern gentleman. Subscribe to our newsletter for exclusive access to new collections and early releases." className="text-gray-600 text-center leading-relaxed mb-6" />
        <FlexColumn className="items-center justify-center space-y-4">
          <InputField label="Email Address" placeholder="you@example.com" className="w-full max-w-md" type="email" />
          <SubmitButton children="Subscribe" variant="solid" size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700" />
        </FlexColumn>
      </Section>
    </div>
  )
}


import React from "react"
import { CTASection, Card, FeatureCard, FlexColumn, Grid, Heading, Hero, Icon, Section, TextBlock } from "../components"

export default function SinglePageForProductPromotion() {
  return (
    <div>
      <Hero title="Introducing ProductPro" subtitle="The ultimate solution for modern business operations" className="text-center mx-auto px-4 py-24" />
      <Section className="bg-white">
        <Grid cols={1} className="max-w-3xl mx-auto px-4">
          <Heading children="Streamline Your Business Operations" level={1} className="text-3xl font-bold text-gray-800 mb-4" />
          <TextBlock children="ProductPro is a comprehensive platform designed to help businesses automate workflows, manage projects, and gain actionable insights. Trusted by industry leaders worldwide." size="lg" className="text-gray-600 mb-8 text-lg" />
          <Card className="shadow-lg rounded-xl overflow-hidden border border-gray-100">
            <FlexColumn align="center" justify="center" gap={2}>
              <Icon name="check-circle" size="4xl" color="primary" className="text-indigo-600" />
              <TextBlock children="All-in-One Platform" size="md" className="text-indigo-700 font-medium" />
            </FlexColumn>
            <FlexColumn align="center" justify="center" gap={2}>
              <Icon name="check-circle" size="4xl" color="primary" className="text-indigo-600" />
              <TextBlock children="Real-Time Analytics" size="md" className="text-indigo-700 font-medium" />
            </FlexColumn>
            <FlexColumn align="center" justify="center" gap={2}>
              <Icon name="check-circle" size="4xl" color="primary" className="text-indigo-600" />
              <TextBlock children="Secure & Scalable" size="md" className="text-indigo-700 font-medium" />
            </FlexColumn>
          </Card>
          <CTASection title="Ready to Transform Your Business?" description="Join thousands of businesses that have revolutionized their operations with ProductPro." primaryButton={{"buttonText": "Get Started", "onClick": "handleStart", "variant": "solid", "size": "lg", "className": "bg-indigo-600 hover:bg-indigo-700 text-white"}} secondaryButton={{"buttonText": "Schedule Demo", "onClick": "handleSchedule", "variant": "outline", "size": "lg", "className": "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"}} className="mt-12 text-center" />
        </Grid>
      </Section>
      <Section className="bg-gray-50 py-16">
        <Heading children="Why Choose ProductPro" level={2} className="text-2xl font-bold text-center text-gray-800 mb-12" />
        <Grid cols={3} className="gap-8 mx-auto px-4">
          <FeatureCard title="Automation" description="Automate repetitive tasks and workflows" icon="settings" variant="solid" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          <FeatureCard title="Analytics" description="Real-time insights for data-driven decisions" icon="chart-bar" variant="solid" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          <FeatureCard title="Security" description="Enterprise-grade security and compliance" icon="shield" variant="solid" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" />
        </Grid>
      </Section>
      <Section className="bg-white py-20 border-t">
        <Heading children="Trusted by Industry Leaders" level={2} className="text-2xl font-bold text-center text-gray-800 mb-8" />
        <TextBlock children="ProductPro has empowered over 5,000 businesses worldwide to streamline operations and achieve measurable growth." size="lg" className="text-center text-gray-600 max-w-3xl mx-auto" />
      </Section>
    </div>
  )
}

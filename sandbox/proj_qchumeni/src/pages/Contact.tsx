
import React from "react"
import { Badge, Card, Container, FlexColumn, FlexRow, Form, Grid, Heading, Hero, Icon, Image, InputField, RadioButton, Section, SelectDropdown, StatsCard, SubmitButton, TextBlock, Textarea } from "../components"

export default function Contact() {
  return (
    <div>
      <Hero title="Contact Us" subtitle="Get in touch with LuxuryShoes" />
      <Section padding={4}>
        <Grid cols={1}>
          <TextBlock children="Have a question about our luxury shoe collection? We're here to help." className="text-gray-700 mb-4" />
          <TextBlock children="Email: support@luxuryshoes.com" className="text-gray-600 mb-2" />
          <TextBlock children="Phone: +1 (555) 123-4567" className="text-gray-600 mb-2" />
          <TextBlock children="Address: 123 Luxury Lane, Fashion District, CA 90210" className="text-gray-600 mb-6" />
          <Heading children="Send Us a Message" level={3} className="text-indigo-700 font-semibold mb-4" />
          <FlexColumn className="bg-white p-4 rounded-lg shadow-sm" align="stretch" justify="center">
            <Form className="space-y-4">
              <InputField label="Your Name" name="name" required={true} placeholder="John Doe" id="name" />
              <InputField label="Your Email" name="email" type="email" required={true} placeholder="john@example.com" id="email" />
              <Textarea label="Message" name="message" required={true} placeholder="I'd like to know more about your new collection..." rows={4} id="message" />
              <SubmitButton children="Send Message" variant="solid" size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700" disabled={false} />
            </Form>
          </FlexColumn>
        </Grid>
      </Section>
    </div>
  )
}

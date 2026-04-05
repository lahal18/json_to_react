
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Form, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, Table, TextBlock } from "../components"

export default function ProductReviews() {
  return (
    <div>
      <Hero title="Product Reviews" subtitle="Share your experience" />
      <Section padding={4}>
        <Grid cols={1}>
          <Heading children="Write a Review" level={2} align="left" />
          <TextBlock children="Help other shoppers make informed decisions by sharing your feedback on purchased products." />
          <Grid cols={2}>
            <Form onSubmit="handleReviewSubmit" className="space-y-4" />
            <Heading children="Recent Reviews" level={3} align="left" />
            <TextBlock children="No reviews yet. Be the first to share your thoughts." />
            <Section className="mt-4">
              <TextBlock children="Filter by rating:" align="left" />
              <FlexRow align="flex-start" gap={2}>
                <Badge children="1" variant="outline" size="sm" />
                <Badge children="2" variant="outline" size="sm" />
                <Badge children="3" variant="outline" size="sm" />
                <Badge children="4" variant="outline" size="sm" />
                <Badge children="5" variant="solid" size="sm" rounded={true} />
              </FlexRow>
            </Section>
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

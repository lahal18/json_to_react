
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Form, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, Table, TextBlock } from "../components"

export default function Blog() {
  return (
    <div>
      <Hero title="Blog" subtitle="Insights and Stories" />
      <Section padding={4}>
        <Grid cols={3}>
          <Heading level={2} children="Latest Articles" />
          <TextBlock children="Explore our latest posts on trends, tips, and industry news." />
          <Heading level={2} children="Featured Post" />
          <TextBlock children="The Future of E-Commerce: Innovations Shaping 2025" />
          <Heading level={2} children="Category Spotlight" />
          <TextBlock children="How to Choose the Perfect Product Category for Your Needs" />
          <Heading level={2} children="Expert Advice" />
          <TextBlock children="5 Proven Strategies to Maximize Your Shopping Experience" />
          <Heading level={2} children="Community Stories" />
          <TextBlock children="Real Customer Experiences: From First Purchase to Loyal Fan" />
        </Grid>
      </Section>
    </div>
  )
}

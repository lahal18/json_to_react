
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, Table, TextBlock } from "../components"

export default function Wishlist() {
  return (
    <div>
      <Hero title="My Wishlist" subtitle="Your saved items" />
      <Section padding={4}>
        <Container maxWidth={3}>
          <Grid cols={3} />
        </Container>
      </Section>
    </div>
  )
}

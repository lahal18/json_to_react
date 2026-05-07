
import React from "react"
import { Badge, CTASection, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, Section, StatsCard, SubmitButton, TextBlock } from "../components"

export default function Cart() {
  return (
    <div>
      <Section padding={4}>
        <Heading children="Your Cart" level={1} align="left" />
        <FlexColumn align="center" justify="center">
          <TextBlock children="No items in your cart." align="center" size="lg" />
        </FlexColumn>
      </Section>
    </div>
  )
}

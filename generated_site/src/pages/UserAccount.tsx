
import React from "react"
import { Badge, CTASection, Card, Container, FeatureCard, FeatureGrid, FlexColumn, FlexRow, Grid, Heading, Hero, Icon, Image, Section, SubmitButton, Table, TextBlock } from "../components"

export default function UserAccount() {
  return (
    <div>
      <Hero title="My Account" subtitle="Manage your purchases, preferences, and profile" />
      <Section padding={4}>
        <FlexColumn align="center" justify="center">
          <Heading children="Welcome Back!" level={1} color="primary" align="center" />
          <TextBlock children="Explore your order history, manage your wishlist, update your profile, and more." size="md" color="text-gray-600" align="center" />
        </FlexColumn>
        <Grid cols={2}>
          <Container maxWidth={3} padding={4}>
            <Section className="bg-white rounded-lg shadow-md p-6">
              <Heading children="Order History" level={2} color="primary" />
              <Table columns={[{"header": "Order ID", "accessor": "id"}, {"header": "Date", "accessor": "date"}, {"header": "Status", "accessor": "status"}, {"header": "Total", "accessor": "total"}]} data={[]} striped={true} hoverable={true} bordered={true} />
            </Section>
            <Section className="bg-white rounded-lg shadow-md p-6">
              <Heading children="Wishlist" level={2} color="primary" />
              <FlexColumn align="start" justify="center" gap={3}>
                <Badge children="🛒" variant="default" size="lg" rounded="full" />
                <Heading children="Your Wishlist is empty" level={3} color="text-gray-500" />
                <TextBlock children="Add products to your wishlist to keep track of items you love." size="sm" color="text-gray-400" align="center" />
              </FlexColumn>
            </Section>
          </Container>
        </Grid>
      </Section>
    </div>
  )
}

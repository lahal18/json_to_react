
import React from "react"
import { Badge, Card, FlexColumn, FlexRow, Grid, Heading, Hero, Image, InputField, Section, SelectDropdown, StatsCard, SubmitButton, Testimonials, TextBlock } from "../components"

export default function Products() {
  return (
    <div>
      <div data-component-path="src/components/Hero/Hero.tsx" style={{ display: "contents" }}>
        <Hero title="Peak Performance Gear" subtitle="Elevate Your Fitness Journey" className="text-center py-20" />
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-gray-50">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Top-Rated Fitness Equipment" level={2} className="text-3xl font-bold text-indigo-800 mb-6" />
        </div>
        <div data-component-path="src/components/Layout/Grid.tsx" style={{ display: "contents" }}>
          <Grid cols={3} gap={6} className="grid">
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" rounded="xl" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://picsum.photos/seed/AdjustableDumbbells/800/600" alt="Adjustable Dumbbells" className="rounded-t-xl" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Adjustable Dumbbells" className="p-4 font-medium text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$79.99" className="p-3 text-indigo-600 font-semibold" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="4.8 Stars" className="p-2 text-yellow-400" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="center" gap={2} align="center" wrap="nowrap">
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Best Seller" variant="secondary" size="lg" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" rounded="xl" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://picsum.photos/seed/SmartScale/800/600" alt="Smart Scale" className="rounded-t-xl" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Smart Scale" className="p-4 font-medium text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$49.99" className="p-3 text-indigo-600 font-semibold" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="4.9 Stars" className="p-2 text-yellow-400" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="center" gap={2} align="center" wrap="nowrap">
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Top Rated" variant="primary" size="lg" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          <div data-component-path="src/components/Layout/Card.tsx" style={{ display: "contents" }}>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" rounded="xl" shadow="md" border="none">
            <div data-component-path="src/components/ContentDisplay/Image.tsx" style={{ display: "contents" }}>
              <Image src="https://picsum.photos/seed/ResistanceBands/800/600" alt="Resistance Bands" className="rounded-t-xl" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="Resistance Bands" className="p-4 font-medium text-gray-900" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="$19.99" className="p-3 text-indigo-600 font-semibold" />
            </div>
            <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
              <TextBlock children="4.7 Stars" className="p-2 text-yellow-400" />
            </div>
            <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
              <FlexRow justify="center" gap={2} align="center" wrap="nowrap">
              <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
                <Badge children="Value Pick" variant="secondary" size="lg" />
              </div>
              </FlexRow>
            </div>
            </Card>
          </div>
          </Grid>
        </div>
        </Section>
      </div>
      <div data-component-path="src/components/Layout/Section.tsx" style={{ display: "contents" }}>
        <Section padding={8} className="bg-white">
        <div data-component-path="src/components/ContentDisplay/Heading.tsx" style={{ display: "contents" }}>
          <Heading children="Filter & Sort" level={2} className="text-2xl font-bold text-gray-800 mb-4" />
        </div>
        <div data-component-path="src/components/Layout/FlexColumn.tsx" style={{ display: "contents" }}>
          <FlexColumn className="space-y-4 mb-6" align="stretch">
          <div data-component-path="src/components/Forms/SelectDropdown.tsx" style={{ display: "contents" }}>
            <SelectDropdown label="Sort By" options="Sort By" className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900" id="sort-by" disabled={false} />
          </div>
          <div data-component-path="src/components/Forms/SelectDropdown.tsx" style={{ display: "contents" }}>
            <SelectDropdown label="Category" options="Category" className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900" id="category-filter" disabled={false} />
          </div>
          <div data-component-path="src/components/ContentDisplay/TextBlock.tsx" style={{ display: "contents" }}>
            <TextBlock children="Min Rating" className="text-sm font-medium text-gray-600" />
          </div>
          <div data-component-path="src/components/Forms/InputField.tsx" style={{ display: "contents" }}>
            <InputField label="" placeholder="4.0+" type="number" min={1} max={5} step={0.5} className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900" id="min-rating" disabled={false} />
          </div>
          </FlexColumn>
        </div>
        <div data-component-path="src/components/Layout/FlexRow.tsx" style={{ display: "contents" }}>
          <FlexRow className="justify-end" gap={2}>
          <div data-component-path="src/components/Forms/SubmitButton.tsx" style={{ display: "contents" }}>
            <SubmitButton children="Apply Filters" variant="primary" size="lg" fullWidth={false} disabled={false} />
          </div>
          <div data-component-path="src/components/ContentDisplay/Badge.tsx" style={{ display: "contents" }}>
            <Badge children="Reset" variant="secondary" size="lg" />
          </div>
          </FlexRow>
        </div>
        </Section>
      </div>
    </div>
  )
}

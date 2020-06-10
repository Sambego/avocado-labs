import React from 'react'
import EventOverview from '../../components/EventContent/EventOverview'
import EventTopics from '../../components/EventContent/EventTopics'
import EventSpeakers from '../../components/EventContent/EventSpeakers'
import EventSchedule from '../../components/EventContent/EventSchedule'
import EventMap from '../../components/EventContent/EventMap'

function eventPageOverviewSection(module, eventTheme, key) {
  const { title, overviewSubsections } = module
  return (
    <EventOverview
      key={key}
      eventTheme={eventTheme}
      title={title}
      overviewSubsections={overviewSubsections}
    />
  )
}

function eventPageTopicsSection(module, eventTheme, key) {
  const { title, description, topicsSubsections } = module
  return (
    <EventTopics
      key={key}
      eventTheme={eventTheme}
      title={title}
      description={description}
      topicsSubsections={topicsSubsections}
    />
  )
}

function eventPageSpeakersSection(module, eventTheme, key) {
  const { title, speakers } = module
  return (
    <EventSpeakers
      key={key}
      eventTheme={eventTheme}
      title={title}
      speakers={speakers}
      theme={eventTheme}
    />
  )
}

function eventPageScheduleSection(module, eventTheme, key) {
  const { schedule, title } = module
  return (
    <EventSchedule
      key={key}
      eventTheme={eventTheme}
      schedule={schedule}
      title={title}
    />
  )
}

function eventPageMapSection(module, eventTheme, key) {
  const { locationId } = module
  return <EventMap key={key} id={locationId} />
}

const eventPageModules = {
  eventPageTopicsSection,
  eventPageOverviewSection,
  eventPageSpeakersSection,
  eventPageScheduleSection,
  eventPageMapSection,
}

export default eventPageModules

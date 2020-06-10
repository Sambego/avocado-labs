import React from 'react';
import PropTypes from 'prop-types';
import {
  TimelineItem,
  Dot,
} from './styled';

const ScheduleItem = ({ hour, description }) => (
  <TimelineItem>
    <Dot />
    <time>{hour}</time>
    <p>{description}</p>
  </TimelineItem>
);

ScheduleItem.propTypes = {
  hour: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ScheduleItem;

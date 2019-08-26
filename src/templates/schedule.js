import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ScheduleRow from '../components/ScheduleRow';

export default function SchedulePage({ data }) {
  const [daySelectIndex, setDaySelectIndex] = useState(0);

  const days = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Schedule" />
      <PageTitle>Schedule</PageTitle>
      <ScheduleMenu>
        {days.map((edge, index) => {
          const { dayOfWeek } = edge.node.frontmatter;
          return (
            <MenuButton
              key={dayOfWeek}
              onClick={() => setDaySelectIndex(index)}
              className={daySelectIndex === index ? 'active' : ''}
            >
              {dayOfWeek}
            </MenuButton>
          );
        })}
      </ScheduleMenu>
      <ScheduleContainer>
        {days[daySelectIndex].node.frontmatter.events.map(event => {
          const {
            startTime,
            endTime,
            title,
            description,
            location,
            googleMapUrl,
            image,
            alt,
          } = event;
          return (
            <ScheduleRow
              startTime={startTime}
              endTime={endTime}
              title={title}
              description={description}
              location={location}
              googleMapUrl={googleMapUrl}
              imgSrc={image}
              imgAlt={alt}
              key={title}
            />
          );
        })}
      </ScheduleContainer>
    </Layout>
  );
}

SchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
};

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 10px;
  font-size: 2em;
  @media screen and (min-width: 700px) {
    font-size: 3em;
  }
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin-top: 84px;
  }
`;

const ScheduleMenu = styled.menu`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  @supports (display: grid) {
    display: grid;
    justify-content: stretch;
    grid-template-columns: repeat(3, auto);
    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(6, auto);
    }
  }
`;

const MenuButton = styled.menu`
  padding: 5px;
  margin: 2px;
  background: #0c969b;
  background: var(--color-secondary);
  color: #f0f0f0;
  color: var(--color-bg);
  font-weight: 700;
  text-align: center;
  border: none;
  transition: box-shadow 0.2s, color 0.3s, transform 0.1s ease-out;
  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.6);
    transform: translate3d(0, -2px, 0);
    color: white;
  }
  &.active {
    background: #ef5350;
    background: var(--color-primary);
  }
`;

const ScheduleContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const query = graphql`
  query scheduleQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "day-schedule" } } }
      sort: { fields: frontmatter___dayIndex }
    ) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            dayIndex
            dayOfWeek
            events {
              startTime
              endTime
              title
              description
              location
              googleMapUrl
              image
              alt
            }
          }
        }
      }
    }
  }
`;

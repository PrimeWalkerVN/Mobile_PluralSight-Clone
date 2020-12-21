import { Layout } from '@ui-kitten/components';
import React from 'react';
import ListCourses from '../../Courses/ListCourses';

const ResultAll = (props) => {
  const { navigation } = props;
  const courses = [
    {
      title: 'Courses',
      data: [
        {
          id: 1,
          title: 'Angular',
          author: 'Chi Thanh',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '3 h',
        },
        {
          id: 2,
          title: 'React native',
          author: 'Chi Thanh',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '3 h',
        },
        {
          id: 3,
          title: 'Android',
          author: 'Chi Thanh',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '3 h',
        },
      ],
    },
    {
      title: 'Paths',
      data: [
        {
          id: 1,
          title: 'Angular',
          coursesNumber: 10,
        },
        {
          id: 2,
          title: 'React native',
          coursesNumber: 10,
        },
        {
          id: 3,
          title: 'Android',
          coursesNumber: 10,
        },
      ],
    },
    {
      title: 'Authors',
      data: [
        {
          id: 1,
          name: 'Chi Thanh',
          coursesNumber: 10,
        },
        {
          id: 2,
          name: 'Chi Thanh',
          coursesNumber: 10,
        },
        {
          id: 3,
          name: 'Chi Thanh',
          coursesNumber: 10,
        },
      ],
    },
  ];
  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ListCourses data={courses} navigation={navigation} />
    </Layout>
  );
};

export default ResultAll;

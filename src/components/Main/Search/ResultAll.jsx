import { Layout } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import ListCourses from '../../Courses/ListCourses';

const ResultAll = (props) => {
  const { navigation, data } = props;
  const [section, setSection] = useState([]);

  useEffect(() => {
    if (data) {
      const { courses } = data;
      const authors = data.instructors;

      const array = [];
      if (courses) array.push({ title: 'Courses', ...courses });
      else array.push({ title: 'Courses', data: [] });

      if (authors) array.push({ title: 'Authors', ...authors });
      else array.push({ title: 'Authors', data: [] });
      setSection(array);
    }
  }, [data]);

  return (
    <Layout level="2" style={{ flex: 1 }}>
      {section.length > 0 && <ListCourses data={section} navigation={navigation} />}
    </Layout>
  );
};

export default ResultAll;

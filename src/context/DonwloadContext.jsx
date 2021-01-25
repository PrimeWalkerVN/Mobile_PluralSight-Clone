import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const DownLoadContext = React.createContext();
const DownloadProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const checkExist = (item) => {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id === item.id) return true;
    }
    return false;
  };
  const addCourse = async (item) => {
    if (!checkExist(item)) {
      setCourses((old) => {
        AsyncStorage.setItem('download_courses', JSON.stringify([...old, item]));
        return [...old, item];
      });
    }
  };
  const removeCourse = (item) => {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id === item.id) {
        const newArray = [...courses];
        newArray.splice(i, 1);
        setCourses(newArray);
        AsyncStorage.setItem('download_courses', JSON.stringify(newArray));
        return;
      }
    }
  };
  const saveCourses = async () => {
    await AsyncStorage.setItem('download_courses', JSON.stringify(courses));
  };
  const removeAll = () => {
    setCourses([]);
    AsyncStorage.removeItem('download_courses');
  };

  const store = {
    courses: {
      get: courses,
      set: setCourses,
      addCourse,
      removeCourse,
      saveCourses,
      removeAll,
      checkExist,
    },
  };

  return <DownLoadContext.Provider value={store}>{children}</DownLoadContext.Provider>;
};

export { DownloadProvider, DownLoadContext };

import { Autocomplete, AutocompleteItem, Button, Icon } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import coursesApi from '../../../api/coursesApi';
import { SnackBarContext } from '../../../context/SnackBarContext';

const SearchBar = (props) => {
  const { searchHandler } = props;
  const snContext = useContext(SnackBarContext);
  const [value, setValue] = useState(null);
  const [history, setHistory] = useState([]);
  const [data, setData] = useState([]);

  const onSelect = (index) => {
    setValue(history[index].content);
  };
  const filter = (item, query) => item.content.toLowerCase().includes(query.toLowerCase());
  const onChangeText = (query) => {
    setValue(query);
    setData(history.filter((item) => filter(item, query)));
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name="search-outline" />
    </TouchableWithoutFeedback>
  );
  const RefreshIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name="refresh-outline" />
    </TouchableWithoutFeedback>
  );
  const CloseIcon = (props) => {
    const { closeHandler, item } = props;
    return (
      <TouchableWithoutFeedback onPress={() => closeHandler(item)}>
        <Icon style={styles.icon} name="close" />
      </TouchableWithoutFeedback>
    );
  };

  const getSearchHistory = async () => {
    snContext.loading.set(true);
    try {
      const res = await coursesApi.getSearchHistory();
      setHistory(res.payload.data);
      setData(res.payload.data);
    } catch (err) {
      snContext.snackbar.set(true);
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    } finally {
      snContext.loading.set(false);
    }
  };
  const deleteSearchHistory = (item) => {
    const params = {
      id: item.id,
    };
    const newHistory = history.filter((history) => history.id !== item.id);
    setHistory(newHistory);
    setData(newHistory);
    try {
      coursesApi.deleteSearchHistory(params);
    } catch (err) {
      snContext.snackbar.setData(`${err.response.status} - ${err.response.data.message}`);
    }
  };
  useEffect(() => {
    getSearchHistory();
  }, []);

  const renderOption = (item, index) => (
    <AutocompleteItem
      accessoryRight={() => <CloseIcon closeHandler={deleteSearchHistory} item={item} />}
      accessoryLeft={RefreshIcon}
      key={index}
      title={item.content}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.searchBar}>
          <Autocomplete
            style={{ padding: 10 }}
            placeholder="Search here"
            value={value}
            onSelect={onSelect}
            onChangeText={onChangeText}
          >
            {data.map(renderOption)}
          </Autocomplete>
        </View>
        <Button
          onPress={() => searchHandler(value)}
          appearance="ghost"
          style={styles.searchButton}
          accessoryLeft={renderIcon}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 0.95,
    paddingVertical: 10,
  },
  searchButton: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    marginHorizontal: 8,
    tintColor: '#8F9BB3',
    width: 24,
  },
});
export default SearchBar;

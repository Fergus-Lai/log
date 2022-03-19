/**
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';

const Add = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState<ValueType | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState<string | undefined>('');
  return (
    <View>
      <View style={styles.row}>
        <Text testID="categoryText">Category:</Text>
        <DropDownPicker
          open={categoryOpen}
          setOpen={setCategoryOpen}
          value={category}
          setValue={setCategory}
          items={categories}
          setItems={setCategories}
          testID="categoryPicker"
        />
      </View>
      <View style={styles.row}>
        <Text testID="nameText">Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          testID="nameField"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    flex: 2,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Add;

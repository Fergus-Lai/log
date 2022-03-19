/**
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';

const Add = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState<ValueType | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
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
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Add;

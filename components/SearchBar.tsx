import React, { useState, useEffect } from 'react';
import { Alert, ImageProps } from 'react-native';
import { Input, Button, Layout, IconElement } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'; // Import from a specific icon set (e.g., Feather, MaterialIcons, etc.)

export function SearchBar() {
  const [userName, setUserName] = useState('');

  const searchRefIcon = React.useRef();

  //   const dispatch = useDispatch();

  const handleSearch = () => {
    if (!userName.trim()) {
      Alert.alert('Error', 'Please enter a valid username.');
      return;
    }
    // We will dispatch here
  };

  //   const renderIcon = (props: any) => {
  //     if (props) {
  //       return <Icon {...props} name='search' />;
  //     }
  //     return null; // Default case if props are undefined
  //   };

  //   const renderZoomIcon = (props: any): IconElement => (
  //     <Icon
  //       {...props}
  //       ref={searchRefIcon}
  //       animation='null'
  //       name='maximize-outline'
  //     />
  //   );

  return (
    <Layout
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <Input
        placeholder='Enter username'
        value={userName}
        onChangeText={setUserName}
        style={{ flex: 1, marginRight: 8 }}
        accessoryLeft={() => <Icon name='search' size={20} color='#000' />} // Using the search icon

        // accessoryLeft={renderIcon}
      />

      <Button onPress={handleSearch}>Search</Button>
    </Layout>
  );
}

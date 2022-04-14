/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { IconButton, IconContainer, SearchContainer, SearchText } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
export default function SearchBar() {
    return (
        <SearchContainer>
            <GooglePlacesAutocomplete placeholder="Search"
                styles={{
                    textInput: {
                        borderRadius: 20,
                        backgroundColor: colors.offwhite,
                        fontWeight: '700',
                        marginTop: 5,
                        //   marginBottom: 20,
                    },
                    textInputContainer: {
                        backgroundColor: colors.offwhite,
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 8,
                        // marginBottom: 10,

                    },
                }}
                renderLeftButton={() => (
                    <IconContainer>
                        <Icon name="location-sharp" size={24} color={colors.black} />
                    </IconContainer>
                )}
                renderRightButton={() => (
                    <IconButton>
                        <Icon name="time" size={15} color={colors.black} />
                        <SearchText>Search</SearchText>
                    </IconButton>
                )}
            />
        </SearchContainer>
    );
}

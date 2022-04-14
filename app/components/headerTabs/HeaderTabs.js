/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, HeaderContainer, HeaderText } from './styles';
import { colors } from '../../theme/colors';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');
    return (
        <HeaderContainer>
            <HeaderButton
                text="Delivery"
                textColor={colors.white}
                btnColor={colors.black}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                textColor={colors.black}
                btnColor={colors.white}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

        </HeaderContainer>
    );
}

const HeaderButton = (props) => (
    <Button style={{ backgroundColor: props.activeTab ===  props.text ? colors.black : colors.white}}
        onPress={() => props.setActiveTab(props.text)}>

        <HeaderText style={{ color: props.activeTab ===  props.text ? colors.white : colors.black }}>
            {props.text}
        </HeaderText>
    </Button>
);

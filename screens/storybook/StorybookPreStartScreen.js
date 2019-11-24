import React from 'react';
import { Container, Button, Text } from 'native-base';

export default class StorybookPreStartScreen extends React.Component {
  render() {
    return (
      <Container style={{justifyContent:'center', alignItems:'center'}}>
        <Button style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Auth')}>
          <Text>Start App</Text>
        </Button>
        <Button style={{marginTop: 20}} light onPress={() => this.props.navigation.navigate('StorybookHome')}>
          <Text>Storybook Components</Text>
        </Button>
      </Container>
    )
  }
}

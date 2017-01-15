import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class Welcome extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle title="Welcome Class!" subtitle="React Boiler Plate!" />
            <CardText>
              I hope this serves as a good starting point for everyone! This example should serve as a good example of how to layout your React applications. It also incorporates npm packages for a grid system and a front-end componenet library built for React.
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}

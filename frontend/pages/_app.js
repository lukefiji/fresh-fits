import App, { Container } from 'next/app';
import Page from '../components/Page';

// This component is wrapped around every page to keep persistent state
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;

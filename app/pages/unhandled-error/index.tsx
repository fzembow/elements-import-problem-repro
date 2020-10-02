/// <style path="./index.css"/>
import * as React from 'react';

export interface IUnhandledErrorPageProps {
  [key: string]: any;
}

export interface IUnhandledErrorPageState {
  [key: string]: any;
}

export default class UnhandledErrorPage extends React.Component<IUnhandledErrorPageProps, IUnhandledErrorPageState> {
  render() {
    return (
      <div className="unhandled-error-page">
        <h1>Unhandled Error</h1>
        <p>
          An unhandled error happened. Mind reporting it? Go back <a href="/">Home</a>.
        </p>
      </div>
    );
  }
}

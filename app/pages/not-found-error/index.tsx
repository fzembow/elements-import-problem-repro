/// <style path="./index.css"/>
import * as React from 'react';

export interface INotFoundErrorPageProps {
  [key: string]: any;
}

export interface INotFoundErrorPageState {
  [key: string]: any;
}

export default class NotFoundErrorPage extends React.Component<INotFoundErrorPageProps, INotFoundErrorPageState> {
  render() {
    return (
      <div className="not-found-error-page">
        <h1>Not Found</h1>
      </div>
    );
  }
}

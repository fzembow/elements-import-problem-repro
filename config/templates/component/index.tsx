/// <style path="./index.css"/>
import * as React from 'react';

export interface I{{capitalCaseName}}Props {
  [key: string]: any;
}

export interface I{{capitalCaseName}}State {
  [key: string]: any;
}

export class {{capitalCaseName}} extends React.Component<I{{capitalCaseName}}Props, I{{capitalCaseName}}State> {
  render() {
    return (
      <div className="{{dashCaseName}}">
        {this.state.children}
      </div>
    );
  }
}

/// <style path="./index.css"/>
import * as React from 'react';

export interface I{{capitalCaseName}}PageProps {
  [key: string]: any;
}

export interface I{{capitalCaseName}}PageState {
  [key: string]: any;
}

export default class {{capitalCaseName}}Page extends React.Component<I{{capitalCaseName}}PageProps, I{{capitalCaseName}}PageState> {
  render() {
    return (
      <div className="{{dashCaseName}}-page">
        <h1>{{capitalCaseName}}</h1>
      </div>
    );
  }
}

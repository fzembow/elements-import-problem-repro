/// <style path="./index.css"/>
import * as React from "react";
import { Container } from "./Box";

export interface IHomePageProps {
  [key: string]: any;
}

export interface IHomePageState {
  [key: string]: any;
}

export default class HomePage extends React.Component<
  IHomePageProps,
  IHomePageState
> {
  render() {
    return (
      <div className="home-page">
        <h1>Formsort</h1>
        <Container />
      </div>
    );
  }
}

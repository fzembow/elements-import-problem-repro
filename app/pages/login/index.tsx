/// <style path="./index.css"/>
import * as React from 'react';

export interface ILoginPageProps {
  [key: string]: any;
}

export interface ILoginPageState {
  [key: string]: any;
}

export default class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
      </div>
    );
  }
}

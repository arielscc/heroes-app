import React, { Component } from 'react';

export default class appMain extends Component {
  cStyles = {
    container: 'flex justify-center items-center h-screen bg-blue-100',
    card:
      'text-center rounded-lg border p-8 shadow-lg bg-gradient-to-r from-green-400 to-blue-500',
    title: 'font-bold text-6xl text-gray-200',
    subTitle: 'text-2xl text-gray-200',
  };

  render() {
    return (
      <div className={this.cStyles.container}>
        <div className={this.cStyles.card}>
          <h1 className={this.cStyles.title}>Create React App</h1>
          <h2 className={this.cStyles.subTitle}>with tailwindcss v2.0.</h2>
        </div>
      </div>
    );
  }
}

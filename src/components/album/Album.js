import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Albums extends Component {
  
  render() {
    const { id, name } = this.props;

    return (
      <li className="album-item">
        <Link to={`/albums/${id}`}>{name}</Link>
      </li>
    );
  }
}
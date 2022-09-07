import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/accordion" className="item">
        Accordion
      </Link>
      <Link to="/list" className="item">
        List
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown
      </Link>
      <Link to="/translate" className="item">
        Translate
      </Link>
    </div>
  )
}

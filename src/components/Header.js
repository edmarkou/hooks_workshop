import React from 'react';
import Link from './Link';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link href="/" className="item" label="Accordion"/>
    <Link href="/search" className="item" label="Search"/>
    <Link href="/dropdown" className="item" label="Dropdown"/>
    <Link href="/translate" className="item" label="Translate"/>
  </div>
);

export default Header;
import React from 'react';

export type NavbarProps = {
  title: string;
};

const Navbar: React.FC<NavbarProps> = ({ title }) => <div>{title}</div>;

export default Navbar;

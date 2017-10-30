import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Menu } from 'semantic-ui-react'

const MenuItem = ({ name, selected, count }) => {
  return (
    <Menu.Item name={name} active={selected}>
      <Label>{count || '?'}</Label>
      {name}
    </Menu.Item>
  );
};


export default MenuItem;

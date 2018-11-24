import React from 'react';

import Category from './Category/Category';

import classes from './Categories.module.scss';

const categories = ({ data }) => {
  const categoryElements = data.map(el => (
    <Category
      key={el.id}
      id={el.id}
      name={el.name}
      iconUrl={el.iconUrl}
      links={el.links}
    />
  ))

  return (
    <ul className={classes.categories}>
      {categoryElements}
    </ul>
  );
};

export default categories;
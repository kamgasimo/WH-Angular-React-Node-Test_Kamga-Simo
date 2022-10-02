/**
 * In the following React template, display an unordered list (UL) with list items (LI) within it. 
 * The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. 
 * The span elements should be separated by a single space.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface Record {
  name: string;
  age: number;
}

interface DataListProps {
  data: Record[];
}

interface DataListItemProps {
  record: Record;
}

const DataListItem: React.FC<DataListItemProps> = ({ record }) => {
  return (
    <li>
      <span>{record.name}</span> <span>{record.age}</span>
    </li>
  )
};

const DataList:React.FC<DataListProps> = (props) => {
  return (
    <ul>
      {props.data.map((record: Record) =>
        <DataListItem key={record.name} record={record} />
      )}
    </ul>
  );
};

const data: Record[] = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('test-01')
);
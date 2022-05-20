import React from 'react';
import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import ItemList from './ItemList';

export const content = ({items, setItems, handleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
      <ItemList
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      ): (
        <p style = {{margineTop: '2rem' }}>Your list is empty </p>
      )}
    </main>
  )
}
export default content

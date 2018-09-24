import Downshift from 'downshift';
import React from 'react';
import { connect } from 'react-redux';
import { getNames } from '../../selectors';
import style from './style.less';

const Autocomplete = ({ addCurrency, names }) => (
  <Downshift
    onChange={selection => addCurrency(selection)}
    itemToString={item => (item ? item : '')}
  >
    {
      (
        {
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        },
      ) => {
        const value = inputValue.toUpperCase();
        return (
          <div className={style['input-wrapper']}>
            <input {...getInputProps()} className={style.input} />
            <ul {...getMenuProps()} className={style.list}>
              {isOpen
                ? names
                  .filter(item => !value || item.includes(value))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                      className={style.item}
                    >
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        );
      }
    }
  </Downshift>
);

export default connect(
  state => ({ names: getNames(state) }),
)(Autocomplete);

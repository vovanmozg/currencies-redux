import React from 'react';
import { Add, Currencies } from '../../currencies';
import style from './style.less';

const App = () => (
  <div className={style.container}>
    <Add />
    <Currencies />
  </div>
);

export default App;

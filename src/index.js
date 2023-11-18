import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HookControlledButtonState,EmojeeCounter} from './counter'

ReactDOM.render(
  <React.Fragment>
  <HookControlledButtonState/>
  <EmojeeCounter pic='love'/>
 <EmojeeCounter pic='sad'/>
 <EmojeeCounter pic='angry'/>
 <EmojeeCounter pic='haha'/>
  </React.Fragment>
  ,
  document.getElementById('root')
  );
 // If you want your app to work offline and load faster, you can change
 // Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();
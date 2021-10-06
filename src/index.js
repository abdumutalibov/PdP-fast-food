import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Root from './root';

ReactDom.render(
<React.StrictMode>
<Root/>
</React.StrictMode>,
document.getElementById('root')
);
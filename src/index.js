import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const DATA = [
  {
    title: 'Изучить области видимости',
    createdAt: '2018/11/19',
    description: 'Для изучения областей видимости в JS необходимо выполнить следующие действия: изучить базовые конструкции языка, попрактиковаться в создании вложенных блоков.',
    status: true,
  },
  {
    title: 'Изучить замыкания',
    createdAt: '2018/11/19',
    description: 'Для изучения замыканий в JS необходимо изучить такие понятия как контекст и области видимости.',
    status: false,
  },
  {
    title: 'Изучить наследование в JS',
    createdAt: '2018/09/19',
    description: 'Наследование в JS отличается от стандартноо наследования в объектно ориентированных языках прораммирования. В JS наследование реализуется с помощью использования прототипов.',
    status: true,
  },
  {
    title: 'Изучить приведение типов',
    createdAt: '2018/10/19',
    description: 'Изначально необходимо изучить типы, которые имеются в языке JS, а после этого переходить к приведению этих самых типов.',
    status: true,
  },
  {
    title: 'Сделать перерыв на обед',
    createdAt: '2018/11/20',
    description: 'Каждый день в 14:00 желаельно делать перерыв на обед, это поможет отвлечься от изучения метериала. После сделанной паузы восприятие улучшится. ',
    status: true,
  }
];

ReactDOM.render(<App dataTasks={DATA} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

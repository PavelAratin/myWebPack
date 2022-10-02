import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { mult,sum } from './modules/calc';

import pathImg from './img/icons8-webpack-64.png';


const img = new Image();
img.src = pathImg;

console.log(mult(3,4))
console.log(sum(3,4))

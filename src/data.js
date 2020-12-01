import { v4 as uuid } from 'uuid';
import taikai from './assets/audio/taikai.mp3';
import heartbeat from './assets/audio/heartbeat.mp3';
import genkai from './assets/audio/genkai.mp3';

import irukaCover from './assets/covers/iruka.jpg';
import heartCover from './assets/covers/heart.jpg';
import genkaiCover from './assets/covers/genkai.jpg';

export default [
  {
    name: 'Genkai',
    artist: 'Gravy Beats',
    cover: genkaiCover,
    id: uuid(),
    active: true,
    color: '#ff200f',
    src: genkai,
  },
  {
    name: 'Taikai',
    artist: 'Iruka',
    cover: irukaCover,
    id: uuid(),
    active: false,
    color: '#2f4c7f',
    src: taikai,
  },
  {
    name: 'Heartbeat',
    artist: 'Dominic Strike',
    cover: heartCover,
    id: uuid(),
    active: false,
    color: '#E62930',
    src: heartbeat,
  },
];

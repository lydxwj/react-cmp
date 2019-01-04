import React from 'react';
import RCmp from './app';
import Button from './button';
import Photo from './photo';
import './app.styl';

RCmp.Button = Button;
RCmp.Photo = Photo;
export default RCmp;
export {
  Button,
  Photo,
  RCmp,
};

import {
    createInterval
  } from '../utils/constants';
  
  export default (position, state) => {
    const now = (new Date()).getTime();
    const id = (new Date()).getTime();
    const newPlusOneObject = {
      position: {
        x: position.x,
        y: position.y,
      },
      createdAt: (new Date()).getTime(),
      id,
    };
    return newPlusOneObject
  }
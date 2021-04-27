import { Router, Request, Response } from 'express';

const home = Router();

home.get('/user', (request: Request, response: Response) => {
  response.send({
    firstName: 'Fernando',
    lastName: 'Alamillo',
    img: 'https://pbs.twimg.com/profile_images/686505121568681986/3xNm0QrI.png',
    food: 'Spanish Omelette',
  });
});

export default home;

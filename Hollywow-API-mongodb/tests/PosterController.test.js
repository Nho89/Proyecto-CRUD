import request from 'supertest';
import {server, app} from '../app.js'; 
import connection_db from '../database/connection_db.js'; 
import Poster from  '../models/PosterModel.js';

const api = request(app);
describe('testing', () => {
afterAll(async ()=>{
        try {
            await Poster.destroy({where: { name:"test"}});
            await Poster.destroy({where: {name: "update test"}});
        } catch (error) {
            console.error('Error destroying poster:', error);
        }
        await connection_db.close();
        server.close();
    });
      test('should create a new poster', async()=>{
      const  response = await api.post('/api').send(
        {
          "name": 'test',
          "director": "test",
          "year": 1989,
          "imageUrl":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3GL6hYh3mNwP7vhaSmj5VUU3rrYfahXDKaGr_QJ0frMEAIa_e"
        });
      expect(response.status).toBe(201);
      expect(typeof response.body).toBe('object');
    });

      

   test('should get posters', async() => {
      const response = await api.get('/api');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    }); 

    test('should deleted poster', async() =>{
      const response = await  api.delete("/api/:id");
        expect(response.status).toBe(400);
    })

    test('Should update poster', async()=>{
      
      const newPoster = await Poster.create({
        name: 'test',
        director: "test",
        year: 1989,
        imageUrl:"www.google.es"
      }
);
      const response = await api.put(`/api/${newPoster.id}`).send({
        name: 'update test',
        director: "update test",
        year: 1990,
        imageUrl:"www.google.es"
      }
          
        )
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object');
    }) 
  });

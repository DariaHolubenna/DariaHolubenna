const express = require('express');
const router = express.Router();
const articleController = require('controllers/article')

const Ajv = require('ajv');
const testSchema = require('schemas/routes/test');

router.get('/form', (req, res) => {
  res.render(index.ejs);
});

router.get('/', (req, res, next) => {
  res.json({
    status: 'ok', payload: 'Hello. I`m API server'
  });
});


router.get('/test1', async (req, res, next) => {
  const { body } = res;

  // Валидируем!
  // const ajv = new Ajv();
  // const validate = ajv.compile(testSchema);
  // const valid = validate(body);

  // if (!valid) {
  //   const { errors } = validate;

  //   const result = {
  //     status: 'invalid data',
  //     payload: { errors },
  //   };
  //   res.json(result);
  //   return;
  // }

  // Дергаем контроллер. Все! больше тут ничего нет
  const { getList } = articleController; // получить все статьи
  const result = await getList();

  // Отдаем ответ
  res.json({ status: 'ok', payload: { result } });
});


router.get('/test2', async (req, res, next) => {
  const { body } = res;

  // Валидируем!
  // const ajv = new Ajv();
  // const validate = ajv.compile(testSchema);
  // const valid = validate(body);

  // if (!valid) {
  //   const { errors } = validate;

  //   const result = {
  //     status: 'invalid data',
  //     payload: { errors },
  //   };
  //   res.json(result);
  //   return;
  // }

  // Дергаем контроллер. Все! больше тут ничего нет
  const { create } = articleController; // создать статью
  const id = await create('My Title', 'Lorem ipsum');

  console.log(id);
  // Отдаем ответ
  res.json({ status: 'ok', payload: { id } });
});




module.exports = router;

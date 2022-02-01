'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions',
      [
        {
          text: 'Это легкое воздушное пирожное получило название от французского слова «поцелуй»',
          answer: 'Безе',
          price: 200,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Итальянское название этого блюда можно перевести на русский язык словом «тесто». А как его называем мы?',
          answer: 'Макароны',
          price: 400,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Татары, узбеки и казахи называют его «катык», грузины - «мацони», таджики - «чургот», египтяне - «лебен», а как его называют в Турции, Греции, Румынии и во всей Европе?',
          answer: 'Йогурт',
          price: 600,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'По мнению французов, он может украсить любое блюдо',
          answer: 'Гарнир',
          price: 800,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Вспомните один музыкальный термин и попробуйте сказать по-французски буквально «кушанье из разных сортов мяса и зелени',
          answer: 'Попурри',
          price: 1000,
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Куда впадает река Волга?',
          answer: 'Каспийское море',
          price: 200,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Ангара - это единсвтенная река, которая вытекает из этого озера. О каком озере идёт речь?',
          answer: 'Байкал',
          price: 400,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Назовите самый большой остров на Земле',
          answer: 'Гренландия',
          price: 600,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Какая область России ещё назывется "страной берёзового ситца",',
          answer: 'Рязанская',
          price: 800,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Какой штат США называют "Золотой"',
          answer: 'Калифорния',
          price: 1000,
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};

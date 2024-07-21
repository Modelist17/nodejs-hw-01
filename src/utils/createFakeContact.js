// src/utils/createFakeContact.js

import { faker } from "@faker-js/faker";


const createFakeContact = () => {
  return {
    id: faker.string.uuid(), // Генерує унікальний ідентифікатор
    name: faker.person.fullName(), // Генерує повне ім'я
    phone: faker.phone.number(), // Генерує номер телефону
    email: faker.internet.email(), // Генерує email адресу
    job: faker.person.jobTitle(), // Генерує назву професії
  };
};

export default createFakeContact;

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 10 }, // Плавно наращиваем до 10 виртуальных пользователей за 1 минуту
    { duration: '2m', target: 10 }, // Держим 10 пользователей 2 минуты
    { duration: '1m', target: 0 },  // Плавно снижаем до 0
  ],
};

export default function () {
  // Запрашиваем главную страницу и одно изображение
  http.get('https://test178941.ru/');
  http.get('https://test178941.ru/image.jpg');
  sleep(1); // Ждем 1 секунду между итерациями
}

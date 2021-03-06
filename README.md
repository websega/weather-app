# pure-js-weather

![license](https://img.shields.io/github/license/websega/pure-js-weather "license")

Погодное приложение, использующее api [openweather](https://openweathermap.org/api) для получения погодных данных и [unsplash](https://unsplash.com/developers) для вывода фонового изображения и [ipify](https://www.ipify.org/) для координат.

[Посмотреть демо](https://weather-c5499.web.app/)

![alt text](./preview.png)

---

##### Install
1. Установить пакеты  ```npm i```
2. В корне проекта создайте файл ```.env```, в который поместите соответствующий API_KEY из используемых сервисов.

```
OPENWEATHER_API_KEY='your_api_key_from_openweather'
UNSPLASH_API_KEY='your_api_key_from_unsplash'
IP_API_KEY='your_api_key_from_ipify'
```

##### Scripts
- Start dev-server    ```npm run start```
- Development build   ```npm run dev```
- Production build    ```npm run build```
- Сode check          ```npm run lint```
- Check and fix       ```npm run lint:fix```

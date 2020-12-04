

### Приложение позволяет:
- находить города по названию и получать для них данные о погоде;
- получать данные о погоде в текущем городе(если пользователь разрешает использовать геолокацию);
- добавлять/удалять города в список избранных;
- хранить список избарнных в локальном хранилище.

### Технологии:
- react, как основная view библиотека;
- redux, для хранентя стейта приложения;
- redux-thunk, для асинхронных запросов и инкапсуляции сайдэффектов;
- prop-types, для поверхностной типизации;
- eslint, stylelint и .editorconfig, для поддержания консистентности кода;
- yarn, для управления пакетами.

### Глобальные зависимости
```
yarn
```

### Запуск приложения

```
yarn
yarn start
```

### Примечания:;
- максимальное число локаций для сохранения 20.
- используется бесплатный аккаунт и ключ с openweathermap.org.

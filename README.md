## Сервер для приложения Место

### Описание
Сервер для обработки запросов для приложения Место. Сервер отдает JSON ответы при обращении к соответствующим страницам. В случае обращения к несуществующим страницам или несуществующим пользователям написаны соответствующие JSON ответы.

### node.js
Сервер написан на базе node.js c использованием фреймворка express.

### express
Используется фреймворк express для сокращения кода и улучшения читаемости. Написан роутинг страниц. В отдельные файлы выделены контроллеры, обрабатывающие логику запроса к определенной странице. Также отдельно выделен хелпер для обращения к файлу. Применена раздача статичных файлов.

### eslint
Используется модуль eslint для сохранения хорошего стиля кода.

### Стэк:
1. Visual studio code:
   Плагины:
   - JS-CSS-HTML Formatter
   - eslint
   - editorconfig

3. Git Bash
3. GitHub
4. Postman
5. Node.js + express.js
6. NiM


#### Ссылка на проект:
https://ialse.github.io/express-mesto/index.html

$("#navlink-1").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Главная"));
});
$("#navlink-2").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Наши специалисты"));
});
$("#navlink-3").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Акции"));
});
$("#navlink-4").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Прайс-лист"));
});
$("#navlink-5").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Список заявок"));
});
$("#navlink-6").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Выйти"));
});
$("#navlink-7").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Регистрация"));
});
$("#navlink-8").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Войти"));
});
$("#heading").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(
    new SpeechSynthesisUtterance(
      "ДОРОГИЕ КЛИЕНТЫ! Спешим порадовать вас очередными супер акциями со скидками на маникюр и педикюр!"
    )
  );
});
$("#switch-btn").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Обычная версия"));
});
$("#card-1").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(
    new SpeechSynthesisUtterance(
      "Акция для наших клиенток Вы можете в течение месяца посетить наш салон и сделать бесплатно любой нюдовый маникюр Для этого вам необходимо: Подписаться на нас в Instagram Рассказать о нас в своей истории Оставить коментарий под любым постом"
    )
  );
});
$("#card-2").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(
    new SpeechSynthesisUtterance(
      "Акция 2+1 Успей скорее навести красоту и бонусом получить раслабляющий массаж рук Для этого вам необходимо: Записаться онлайн в наш салон Выбрать услугу маникюр+педикюр Прийти без опоздания в значенное вами время"
    )
  );
});
$("#card-3").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(
    new SpeechSynthesisUtterance(
      "Дизайн в подарок Если ты любишь эксперемнировать, то скорее учавствуй в нашей крутой акции Для этого вам необходимо: Выложить фото вашего маникюра в Instagram Отметить наш аккаунт Поделиться отзывом"
    )
  );
});
$("#footer-1").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("Cалон ALLURE в Москве"));
});
$("#footer-2").on("click", function() {
  let synth = window.speechSynthesis;
  synth.speak(new SpeechSynthesisUtterance("г. Москва, ул. Арбат, 22с1 Время работы: ежедневно: 10:00 - 22:00 +7(945) 555-55-55"));
});

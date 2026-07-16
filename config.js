/* =========================================================================
   TO'Y TAKLIFNOMASI SOZLAMALARI  ·  НАСТРОЙКИ ПРИГЛАШЕНИЯ
   -------------------------------------------------------------------------
   Sayt IKKI TILDA: o'zbekcha (uz) va ruscha (ru). O'ng yuqoridagi
   UZ / RU tugmasi tilni almashtiradi.
   Matnni o'zgartirsangiz, HAR IKKALA tilni ham yangilang: { uz: "...", ru: "..." }

   Сайт на ДВУХ языках. Меняя текст, обновляйте оба поля: { uz, ru }.
   Файлы (фото, музыка) лежат в КОРНЕ, поэтому пути без папок.
   ========================================================================= */

window.weddingConfig = {

  /* ---------- ISMLAR · ИМЕНА (bir xil, tarjima kerak emas) ---------- */
  groomName: "Xurshid",
  brideName: "Malika",

  /* ---------- SANA · ДАТА ----------
     Countdown shu sanagacha ishlaydi. Format: "YYYY-MM-DDTHH:MM:SS"
     Vaqtni (18:00) o'zingizga moslab o'zgartiring. */
  weddingDate: "2027-05-25T18:00:00",

  displayDate:    { uz: "25-may, 2027-yil", ru: "25 мая 2027 года" },
  displayTime:    { uz: "18:00",            ru: "18:00" },
  displayWeekday: { uz: "Seshanba",         ru: "Вторник" },

  /* ---------- TAKLIF MATNI · ТЕКСТ ПРИГЛАШЕНИЯ ---------- */
  inviteTitle: {
    uz: "Bizning to'yimizga",
    ru: "На нашу свадьбу"
  },
  inviteSubtitle: {
    uz: "Marhamat qilib tashrif buyurishingizni so'raymiz",
    ru: "Просим оказать нам честь своим присутствием"
  },
  welcomeMessage: {
    uz: "Hayotimizning eng baxtli kunida yonimizda bo'lishingizni, quvonchimizga sherik bo'lishingizni astoyidil xohlaymiz.",
    ru: "Мы искренне желаем видеть вас рядом в самый счастливый день нашей жизни и разделить с нами эту радость."
  },

  /* ---------- TO'YXONA · ЗАЛ ---------- */
  venueName: {
    uz: "\"Yakkasaroy\" to'yxonasi",
    ru: "Банкетный зал «Яккасарой»"
  },
  venueAddress: {
    uz: "Toshkent sh., Yakkasaroy tumani",
    ru: "г. Ташкент, Яккасарайский район"
  },

  /* Xarita: joyni ko'rsatuvchi embed (API kalit shart emas).
     Karta: встраиваемая карта места (ключ API не нужен). */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Yakka%20Saroy%20banket%20zali%20Toshkent&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/place/Yakka+Saroy+(+%D0%91%D0%B0%D0%BD%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D0%B9+%D0%B7%D0%B0%D0%BB+%D0%AF%D0%BA%D0%BA%D0%B0%D1%81%D0%B0%D1%80%D0%B0%D0%B9)/data=!4m2!3m1!1s0x0:0xef64b91e3caf8304?sa=X&ved=1t:2428&ictx=111",

  /* ---------- RASMLAR · ФОТО (korneda, papkasiz) ---------- */
  heroImage:   "hero.jpg",
  coupleImage: "couple.jpg",
  gallery: [
    "rasm-1.jpg",
    "rasm-2.jpg",
    "rasm-3.jpg"
  ],

  /* ---------- MUSIQA · МУЗЫКА ---------- */
  musicFile: "song.mp3",
  musicAutoplay: true,

  /* ---------- YAKUN · ФУТЕР ---------- */
  footerMessage: { uz: "Sizni kutamiz!", ru: "Будем рады видеть вас!" },
  footerNames: "Xurshid & Malika",

  /* =======================================================================
     INTERFEYS YOZUVLARI · НАДПИСИ ИНТЕРФЕЙСА
     (odatda o'zgartirish shart emas · обычно менять не нужно)
     ===================================================================== */
  ui: {
    coverEyebrow:      { uz: "Siz taklif qilindingiz",   ru: "Вы приглашены" },
    openBtn:           { uz: "Taklifnomani ochish",      ru: "Открыть приглашение" },
    heroEyebrow:       { uz: "Sizni taklif qilmoqchimiz", ru: "Приглашаем вас" },
    scrollHint:        { uz: "pastga",                   ru: "вниз" },
    countdownEyebrow:  { uz: "To'yimizgacha",            ru: "До нашей свадьбы" },
    cdDays:            { uz: "kun",                      ru: "дней" },
    cdHours:           { uz: "soat",                     ru: "часов" },
    cdMinutes:         { uz: "daqiqa",                   ru: "минут" },
    cdSeconds:         { uz: "soniya",                   ru: "секунд" },
    galleryEyebrow:    { uz: "Xotira lahzalari",         ru: "Мгновения памяти" },
    locationEyebrow:   { uz: "Manzil",                   ru: "Адрес" },
    detailDateLabel:   { uz: "Sana",                     ru: "Дата" },
    detailTimeLabel:   { uz: "Vaqt",                     ru: "Время" },
    directionsBtn:     { uz: "Yo'nalish olish",          ru: "Построить маршрут" }
  },

  /* Boshlang'ich til · Язык по умолчанию: "uz" yoki "ru" */
  defaultLang: "uz"
};

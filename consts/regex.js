const linkExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i;
const ruNameExp = /^[а-яА-Я0-9\s?,.!-]+$/;
const enNameExp = /^[a-zA-z0-9\s?,.!-]+$/;

module.exports = { linkExp, ruNameExp, enNameExp };

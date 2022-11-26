import sendEmail from "../lib/mail";

export default async function handler(req, res) {
  const mailOptions = {
    form: "nechip163@yandex.ru",
    to: "nechip163@yandex.ru",
    subject: "Письмо отпр",
    text: `
        Имя: ${req.body.name},
        Телефон: ${req.body.phone},
        E-mail: ${req.body.email},
        Сообщение: ${req.body.message},
    `,
  };
  sendEmail(mailOptions);
  res.send(`Спасибо за заявку, ${req.body.name}!`);
}

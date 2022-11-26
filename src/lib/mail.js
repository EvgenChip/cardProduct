import mailer from "nodemailer";

const smtpTransport = mailer.createTransport(
  {
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "nechip163@yandex.ru",
      pass: "besmelya1",
    },
    tls: { rejectUnauthorized: false },
  },
  {
    from: "krylevsky-test <nechip163@yandex.ru>",
  }
);

const sendEmail = (mailOptions) => {
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully", info);
    }
    smtpTransport.close();
  });
};

export default sendEmail;

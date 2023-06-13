import { mailOptions, transporter } from "../../components/lib/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  email: "Email",
  message: "Password",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );

  return {
    text: stringData
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "Message from Artem",
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Войти в электронную почту Mail.ru — надежный почтовый клиент",
  description: "Войти в почту Mail. Вы можете зайти в свой аккаунт используя пароль, QR-код, VK ID или свой профиль на Госуслугах",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

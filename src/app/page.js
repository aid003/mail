import Image from 'next/image'
import styles from './page.module.css'
import logo from '../../public/mail-logo.svg'
import ImgList from '../../components/ImgList'
import LoginForm from '../../components/login/LoginForm'
import vk from "../../public/vk.svg"
import gos from '../../public/gosuslugi.ru.svg'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.logoIconImg} width={50} height={50} src={logo} alt='logo' />
      </div>
      <section className={styles.mainContent}>
        <h1 className={styles.heading}>Войти в аккаунт</h1>
        <ImgList />
        <LoginForm></LoginForm>
        <p className={styles.anothetIn}>Другие способы входа</p>
        <div className={styles.anotherButtons}>
          <div>
            <Image alt='' width={50} height={50} className={styles.vkimage} src={vk} />
          </div>
          <div>
            <Image alt='' width={50} height={50} className={styles.gosimage} src={gos} />
          </div>
        </div>
        <div className={styles.containerFooter}>
          <a className={styles.resaveLink} href='/'>Восстановить доступ</a>
          <a className={styles.createLink} href='/'>Создать аккаунт</a>
        </div>
      </section>
      <div className={styles.footer}>
        <p className={styles.footerText}>Mail.ru</p>
        <p className={styles.footerText}>О компании</p>
        <p className={styles.footerText}>Реклама</p>
        <p className={styles.footerText}>Вакансии</p>
      </div>
    </main>
  )
}

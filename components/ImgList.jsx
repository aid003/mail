import Image from 'next/image'
import styles from './styles/styles.module.css'
import mailPost from '../public/mail-post.svg'
import gmailPost from '../public/gmail-post.svg'
import yandexPost from '../public/yandex-post.svg'

const ImgList = () => {
	return (
		<ul className={styles.listImg}>
			<li className={styles.listItem}>
				<Image className={styles.addMailImg} width={50} height={20} alt='mailImg' src={mailPost} />
			</li>
			<li className={styles.listItem}>
				<Image className={styles.addMailImg} width={50} height={20} alt='mailImg' src={yandexPost} />
			</li>
			<li className={styles.listItem}>
				<Image className={styles.mailImg} width={50} height={20} alt='mailImg' src={gmailPost} />
				<p className={styles.gmailText}>Gmail</p>
			</li>
			<li className={styles.listItem}>
				<a>Другой</a>
			</li>
		</ul>
	)
}

export default ImgList

"use client"
import Image from 'next/image'
import styles from './styles/styles.module.css'
import mailPost from '../public/mail-post.svg'
import gmailPost from '../public/gmail-post.svg'
import yandexPost from '../public/yandex-post.svg'
import { useState } from 'react'

const ImgList = () => {

	const [img1, setImg1] = useState(true);
	const [img2, setImg2] = useState(false);
	const [img3, setImg3] = useState(false);

	const changeActiveHandler = (img) => {
		if (img === '1') {
			img1 ? setImg1(false) : setImg1(true)
		} else if (img === '2') {
			img2 ? setImg2(false) : setImg2(true)
		} else if (img === '3') {
			img3 ? setImg3(false) : setImg3(true)
		} else if (img === '4') {
			setImg1(false)
			setImg2(false)
			setImg3(false)
		}
		

	}

	return (
		<ul className={styles.listImg}>
			<li className={img1 ? `${styles.listItem}  ${styles.activeImgBorder}` : `${styles.listItem}`} onClick={() => { changeActiveHandler('1') }}>
				<Image className={styles.addMailImg} width={50} height={20} alt='mailImg' src={mailPost} />
			</li>
			<li className={img2 ? `${styles.listItem}  ${styles.activeImgBorder}` : `${styles.listItem}`} onClick={() => { changeActiveHandler('2') }}>
				<Image className={styles.addMailImg} width={50} height={20} alt='mailImg' src={yandexPost} />
			</li>
			<li className={img3 ? `${styles.listItem}  ${styles.activeImgBorder}` : `${styles.listItem}`} onClick={() => { changeActiveHandler('3') }}>
				<div className={styles.gmailMail}>
					<Image className={styles.mailImg} width={50} height={20} alt='mailImg' src={gmailPost} />
					<p className={styles.gmailText}>Gmail</p>
				</div>
			</li>
			<li className={styles.listItem} onClick={() => { changeActiveHandler('4') }}>
				<a>Другой</a>
			</li>
		</ul>
	)
}

export default ImgList

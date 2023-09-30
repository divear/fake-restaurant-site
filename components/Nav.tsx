import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

import icon from "../public/icon.png"
import burger from "../public/icons/burger.png"

function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const [modal, setModal] = useState(false)
    const router = useRouter();
    const currentPathname = router.pathname;
    console.log(currentPathname)

    const navClass = currentPathname === '/' ? 'navMain' : 'nav';
    useEffect(() => {
        if (window.innerWidth <= 768) { // You can adjust this threshold as needed
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [])


    return (
        <div>
            <div className={!isMobile ? navClass : "no"}>
                <Link href="/">
                    <Image className='logo' width={150} src={icon} alt="U Labužníckého stolu" />
                </Link>
                <Link href="/#rezervace">rezervace</Link>
                <Link href="/#kontakt">kontakt</Link>
                <Link href="/o-restauraci">o restauraci</Link>
                <Link href="/menu">menu</Link>
            </div>
            <div onClick={() => setModal(!modal)} className={isMobile ? "burgerMenu" : "no"}>
                <Image width={50} src={burger} alt='☰' />
            </div>
            <div className={modal ? "modal" : "no"}>
                <Link onClick={() => setModal(false)} href="/#rezervace">rezervace</Link>
                <Link onClick={() => setModal(false)} href="/#kontakt">kontakt</Link>
                <Link onClick={() => setModal(false)} href="/o-restauraci">o restauraci</Link>
                <Link onClick={() => setModal(false)} href="/menu">menu</Link>
            </div>

        </div>
    )
}

export default Nav
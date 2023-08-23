import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <div className='nav'>
            <Link href="/o-restauraci">o restauraci</Link>
            <Link href="/menu">menu</Link>
            <Link href="/#rezervace">rezervace</Link>
            <Link href="/#kontakt">kontakt</Link>
        </div>
    )
}

export default Nav
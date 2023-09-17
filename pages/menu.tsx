import React from 'react'

function Menu() {
    return (
        <div className='menu'>
            <title>Menu</title>
            <h1 className='pageHeader'>Menu</h1>

            <div className="nabidka">

                <div className="obedovaNabidka">

                    <h1 className='smallPageHeader'>Obědová nabídka</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Segedínský guláš</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Smažený sýr</td>
                                <td>120kč</td>
                            </tr>
                            <tr>
                                <td>Řízek</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Langoš</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Přírodní řízek</td>
                                <td>140kč</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="vecerniNabidka">

                    <h1 className='smallPageHeader'>Večerní nabídka</h1>
                    <table>
                        <tbody>

                            <tr>
                                <td>Segedínský guláš</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Palačinky</td>
                                <td>120kč</td>
                            </tr>
                            <tr>
                                <td>Hamburger</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Svíčková omáčka</td>
                                <td>140kč</td>
                            </tr>
                            <tr>
                                <td>Bramboráky</td>
                                <td>140kč</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ div>
    )
}

export default Menu
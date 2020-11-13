import React from 'react'
import TinderCard from 'react-tinder-card'
import styles from './alphabets.module.css'

function Alphabets() {
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    const swiped = (direction, alpToDelete) => {
        console.log('You swiped: ' + alpToDelete)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.cards}>

                {uppercase.slice(0).reverse().map(el => (
                    <TinderCard
                        className='swipe'
                        onSwipe={(dir) => swiped(dir, el)}
                        key={el}
                        onCardLeftScreen={() => onCardLeftScreen(el)}
                        preventSwipe={['up', 'down']}>
                        <div className={styles.alphabets}>
                            <h1 className={styles.sailorBlue}>{el}</h1>
                            <h1 className={styles.mint}>{el.toLowerCase()}</h1>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default Alphabets

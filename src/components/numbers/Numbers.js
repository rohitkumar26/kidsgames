import React from 'react'
import TinderCard from 'react-tinder-card'
import styles from './numbers.module.css'
function Numbers() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


    const swiped = (direction, alpToDelete) => {
        console.log('You swiped: ' + alpToDelete)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }


    return (
        <div className={styles.cardcontainer}>
            <div className={styles.cards}>

                {arr.slice(0).reverse().map(el => (
                    <TinderCard
                        className='swipe'
                        onSwipe={(dir) => swiped(dir, el)}
                        key={el}
                        onCardLeftScreen={() => onCardLeftScreen(el)}
                    >
                        <div className={styles.alphabets}>
                            <h1 className={styles.sailorBlue}>{el}</h1>

                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default Numbers

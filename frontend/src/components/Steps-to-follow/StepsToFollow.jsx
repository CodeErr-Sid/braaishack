import React from 'react'
import styles from './StepsToFollow.module.css'

const StepsToFollow = () => {

    const steps = [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit"
    ]

    return (
        <section className={styles.stepstofollowcontainer}>
            <h1 className={styles.stepheader}>Steps to Follow:</h1>
            <p className={styles.stepsdescription}>
            Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. 
            Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. 
            </p>
            <div className={styles.steps}>
                {steps?.map((step, index) => (
                    <div className={styles.stepcontainer} key={index}>
                        <div className={styles.stepnumbercircle}>
                            <div className={styles.stepnumber}>
                                {index + 1}
                            </div>
                        </div>
                        <div className={styles.stepdescription}>
                            {step}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StepsToFollow
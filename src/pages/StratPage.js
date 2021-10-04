import React from 'react'
import NavBar from '../components/NavBar'

function StratPage() {
    return (
        <div style={styles}>
            <NavBar/>
            <article class="blog-post" style={{paddingTop: 120, paddingLeft: 80, paddingRight: 80}}>
                <h2 class="blog-post-title" style={{color: '#ffffff'}}>Strategies and patterns of analyzing the benefits from Earth Observations.</h2>
                <div style={{color: '#ffffff', fontWeight: 500, padding: 10}}>
                <p>After a thorough study of the principles of technology, the concepts of NASA missions (both implemented and under development) and their usefulness in the life of a modern person using examples of their real use, our task was to form a general strategy for analyzing the usefulness of information obtained with the help of these technologies.
        Faced with a lot of resources, we concluded that the conditions in which the Earth's Surface Research is required can be divided into 2 types:</p>
                    <ul>
                        <li>Complementation long-term research and databases.</li>
                        <li>A single analysis of abnormal activity in certain areas to prevent or minimize the consequences of natural disasters.</li>
                    </ul> 
                    <p>According to what type of data we have in front of us, we can analyze its usefulness correctly, since the replenishment of long-term databases in order to track climate trends, in our strategy, has different criteria for determining usefulness in comparison with information that gives an understanding of climate variability.</p>
                    <h3>Strategy used for identifying benefits from Data Complementing long-term researches and databases.</h3>
                    <p>As we have mentioned before, analysis of the benefits of earth observations is possible only if we divide data to 2 certain groups according their type. First type is the data received from earth observations complementing data bases and investigations. This type has 1 main criterion of being beneficial - Data Accuracy.</p>
                    <div style={{marginTop: 30, color: '#000000'}}>
                        <p>To review how Data Accuracy affects the benefit taken from the data, we can refer to an example of PACE (NASA mission) being useful for Bernard Friedman. He explains that PACE systems help him in regularly monitoring the amount of toxins in the mollusks. The analysis of the amount of toxin is carried out in accordance with the color of the water in certain parts of the water surface of the earth. This toxin can be concentrated in shellfish, potentially harming mammals, including humans who consume them. The appearance of a toxin called domoic acid affects the livelihoods of marine inhabitants, but also on underwater fauna and even humans. </p>
                        <p>If accuracy of his results will be decreased, it can cause several consequences. As an example, Mr. Friedman wouldn’t be able to analyze certain areas and verify whether they need to be closed for fishers catching mollusks. Rate of people dying from toxication and animals hurt from domoic acid might increase. </p>                    
                        <p>If accuracy of his results will be decreased, it can cause several consequences. As an example, Mr. Friedman wouldn’t be able to analyze certain areas and verify whether they need to be closed for fishers catching mollusks. Rate of people dying from toxication and animals hurt from domoic acid might increase. </p>
                        <h3>Strategy used for identifying benefits from Data analyzing of abnormal activity in certain areas to prevent or minimize the consequences of natural disasters.</h3>
                        <p>Returning to the examples of the use of GPM technologies in the chapter "NASA Global Precipitation Measurement Mission (GPM), precipitation data and their use for forecasting and mitigation of natural disasters" (pp. 22-24) and identifying main patterns of actions taken in each situation we have discovered 3 main stages:</p>
                        <ul>
                            <li>Data collection</li>
                            <li>Decision making</li>
                            <li>Implmentation</li>
                        </ul>
                        <p>If first strategy is based on analyzing accuracy only, this one is more complicated and specific due to the situation difference. Taking to consideration the fact that this type of data is needed for prevention and mitigation of natural disasters we need to mention time frame needed for the data collection and conducting subsequent measures. This data need to be given quickly so governmental structures could evacuate citizens or provide help to certain areas in case of natural disasters. 
We have concluded that following mentioned criteria and analyzing its quality is the way of analyzing efficiency, benefit and value of certain Earth Observations.
</p>                </div>
                </div>
            </article>
        </div>
    )
}

const styles = {
    backgroundImage: "url('/strategies.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

export default StratPage

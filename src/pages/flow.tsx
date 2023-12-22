import AnimatedDiv from '../components/Animate/AnimatedDiv'
import AnimatedContainer from '../components/Animate/AnimatedContainer'

const Flow = () => {
  return (
    <main id="flow" className="flex flex-col max-w-sm md:max-w-2xl my-10 mx-2 md:mx-0">
      <AnimatedContainer className="mb-10 contents w-full flex">
        <AnimatedDiv className="flex items-end">
          <div className="text-3xl font-bold my-4 mr-3">Flow Cytometry</div>
          <span className="font-normal italic my-4">by Patrick Cheng</span>
        </AnimatedDiv>
        <AnimatedDiv className="mt-2 text-sm italic">Two thousand years ago, Aristotle thought disease arose from imbalance of blood, phlegm, bile. Computers were invented a few generations ago, and now anyone can use out-of-the-box machine learning algorithms to diagnose leukemia. In this article I'll explain how.</AnimatedDiv>
        <AnimatedDiv className="head">What are Leukemia and Flow Cytometry?</AnimatedDiv>
        <AnimatedDiv className="para">Our immune cells are collectively called “white blood cells” or WBCs. Most are normal but some mutate and become cancerous. In these cases, not only do they not do their jobs properly but they also take resources from normal cells which in turn can't do their jobs either. Doctors diagnose leukemia with various laboratory tests, and among the most accurate is a test called <i>flow cytometry</i>, which measures protein levels of all the cells in a blood sample. The protein levels can be thought of as the different traits of a person.</AnimatedDiv>
        <AnimatedDiv className="para">ELI5: If you were to measure a firefighter, a soldier, and a ballerina... firefighters' and soldiers' boots are much heavier than ballerinas' pointe shoes. Ballerinas don't wear helmets. Firefighters carry hose but soldiers don't. Who wears no helmet or hose and light shoes? Helmet and no hose?</AnimatedDiv>
        <AnimatedDiv className="para">Flow cytometry works by tagging specific proteins with fluorescent markers and measuring the fluorescence. The proteins are named things like “CD34” or “CD38”, where CD stands for “conserved domain”. You can think of them like the shoes, hose, helmet in the example above. </AnimatedDiv>
        <AnimatedDiv className="para">In figure 1, a normal patient shows the rough distribution of normal WBCs as they develop, with a smooth curve representing a normal transition of CD34 to CD38 in a population. On the right is a leukemic patient, who has an anomalous population of low CD34 AND low CD38 cells that doesn't really ever happen "naturally". </AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+1.png" />
        </AnimatedDiv>

        <AnimatedDiv className="para">A pathologist will look at maybe dozens of plots like the one in figure 1. The thing is, a computer is great at crunching arrays of samples like this very quickly. There's the rub.</AnimatedDiv>
        <AnimatedDiv className="para"><b>Napkin math:</b> pathologists cost roughly $1 per minute, and a straightforward flow may take 10 minutes... there are at 150,000 new cases of leukemia per year. The tab comes out to $1,500,000 per year... this does not count negative cases, periodic retesting for relapse, and retesting for treatment monitoring, which is really a huge portion of flows. Not to mention, flow cytometry is used for many other types of molecular classNameification and this method can easily be adapted across other uses as well.</AnimatedDiv>
        <AnimatedDiv className="head">Data!</AnimatedDiv>
        <AnimatedDiv className="para">There happens to be a flow cytometry repository at flowrepository.org. ;) This dataset contains 359 people, including 43 patients suffering from acute myeloid leukemia (AML), a subtype of leukemia. I used this <a href="https://github.com/genepattern">git repo</a> to preprocess the data.
          For each patient there are a combination of about 30 of the same proteins that were measured with flow cytometry for the roughly 30,000 cells in each sample. The measure of the proteins is in units of fluorescence, ranging from 0 (no protein) to 1015 (lots of protein). A scatter plot of the first patient's first two markers results in the scatterplot below.</AnimatedDiv>
        <AnimatedDiv className="w-full flex flex-col md:flex-row items-center justify-center">
          <img className="max-w-sm" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+2.png" />
          <img className="max-w-sm" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+3a.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">Additionally, since I want to explore a computer's vision of this space, I split the plot into histogram boxes, because tracking each of 30,000 cells will not be computationally feasible. In the figure above-right, the plot is divided into 100 boxes. You can see a majority of the lymphocytes (a type of WBC) falling into the boxes labeled 4 and 14. So the predictors for our algorithm are actually the number of cells that fall into each box. </AnimatedDiv>

        <AnimatedDiv className="head">Machine Learning!</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+4.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">We need a few things out of our algorithm... </AnimatedDiv>
        <AnimatedDiv className=''><li className="ml-6">Predicts quickly (timely diagnosis = good)</li></AnimatedDiv>
        <AnimatedDiv className=''><li className="ml-6 mb-6">Good with lots of independent variables (lots of histogram boxes)</li></AnimatedDiv>
        <AnimatedDiv className="para">A classNameifier algorithm called Support Vector Machine (SVM) is a reasonable choice. SVM is an algorithm that is designed to fined a mathematical “boundary” separating sets of data as wide as possible. For a set of data in two dimensions, this would be a line separating healthy from sick. It's very fast when classNameifying new samples, since it basically boils down to the equation of a line, and it's also great in high dimensional space due to the “kernel trick”, which is particularly useful for biological data.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+5.png" />
        </AnimatedDiv>

        <AnimatedDiv className="head">Tuning Parameters</AnimatedDiv>
        <AnimatedDiv className="para">Overfitting is a concept where predictions can be too tight or too loose. </AnimatedDiv><AnimatedDiv className="para">ELI5: Learning English by studying ONLY Shakespeare, saying hello with "God ye good den, how now, Wench!"... it works for a very specific time and place- Elizabethan era England. This is overfitting. Underfitting, on the other hand, is learning English using only the most common words: “a, the, I, of, to, and.” Hardly enough to speak English fluently.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+6.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">In machine learning, we are leveraging the processing power of a computer but we need to avoid overfit. In order to avoid this, we can introduce “regularization”, in which model complexity is mathematically “punished” by a new term C in the SVM equation. For a large C value, the punishment will be large, which means that the model will be more likely to overfit. Figure 10 shows an example of where introducing tolerance via adjusting C and allowing a “softer” margin may lead to a more robust model, even if it leads to some training misclassNameifications.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+7.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">Cross validation is another way of reducing overfitting. As overfitting arises from over-reliance on a small amount of training data, we can chop our data up in several ways to present more. This helps lend more power to our model by making it more generalizable. While one fifth of the data is held out for the test section (aka “test fold”), the remaining four fifths of data is trained to find an optimal C value. The chosen regularization C term is then used to make predictions on the test fold.</AnimatedDiv>
        <AnimatedDiv className="para">In figure 11 a sample grid search can be seen. At this stage we have generated a large dataset for a single tube of 359 patients by all possible marker combinations and are selecting a C to use for the 72 patients held out as a test fold. The grid search essentially repeats training and then testing over a range of C between 10^-6 to 10^6.</AnimatedDiv>
        <AnimatedDiv className="para">For the record, I used 10-fold cross validation. One fifth of the total set is held out as previously mentioned, then the remaining data is used for grid searching C. For each C in the search, 10 models are trained and the results averaged in an effort to reduce variance. The reason for the nested split is to conserve the all-important separation of training influence from the final test fold until the predictions are ready to actually be made. Using test data as part of the training fold is a very easy way to induce overfit.</AnimatedDiv>
        <AnimatedDiv className="para">In our instance C would be 10^-1, which would then be used for original test fold prediction. It should be noted that this particular shape of score plot is conserved through every SVM grid search.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+8.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">Finally, I used F-score and recall instead of accuracy to avoid the situation where a test with 99% false positives would still have 100% positive predictive value, etc. This is twice the harmonic mean of Precision (True Positives over Total Test Positives) and Recall (True Positives over Total Actual Positives). </AnimatedDiv>

        <AnimatedDiv className="head">What Did We Find? 🤔</AnimatedDiv>
        <AnimatedDiv className="para">Running a severely handicapped model with the first two markers our of 35 produces an F-score of 0.76 and a recall of 0.67. This means 67% of actual sick patients were detected. </AnimatedDiv>
        <AnimatedDiv className="para">Expanding to include all markers, the F-score increases to 0.85 and recall increases to 0.95. There are still 12 false positives and 2 false negatives though, and that's a lot of hefty consequences. What happens if we tune?</AnimatedDiv>
        <AnimatedDiv className="para">As mentioned earlier, pathologists review flow cytometry results as a series of two dimensional scatterplots. The computer has no such limitations. If we plot markers 3, 4, 5 at a time... the F-scores seem to continue to improve. It seems that positive cases are detected at 95% (recall), except for 93% at 5 markers. </AnimatedDiv>

        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+9.png" />
        </AnimatedDiv>

        <AnimatedDiv className="head">What Does It All Mean! 🤯</AnimatedDiv>
        <AnimatedDiv className="para">Overall, the original question of machine learning prediction for flow cytometry seems to have been answered. The SVM algorithm performs at a consistent rate of detecting 95% cases of leukemia.</AnimatedDiv>
        <AnimatedDiv className="para">The algorithm's precision is higher as it reaches 5 marker analysis, but then seems to fall off again. An explanation for the dropoff may be that the “curse of dimensionality” comes into play (figure 16). With every dimension added to your histogram, the “space” within which your data exists becomes exponentially larger. In any case the better precision in higher dimensional space validates the notion that computers can see plots in 3+ dimensions better than humans.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-lg" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+10.png" />
        </AnimatedDiv>

        <AnimatedDiv className="head">Patients 7 and 101 😵‍💫</AnimatedDiv>
        <AnimatedDiv className="para">Every model missed the same two positive cases: patients #7 and #101. Since the two cases are consistent against all 7 models, they may both have something in common that our model is not able to detect.</AnimatedDiv>
        <AnimatedDiv className="para">Preliminary investigation of these two cases suggests that there may be some separability as suggested by the plots in figure 18. The rows are matching plots that are typically one of the first inspected by pathologists during routine evaluation. The red boxes indicate some of the suspicious populations that would certainly increase a human's degree of suspicion. This may be a consequence of the SVM method. A different classNameifier algorithm, such as “KMeans” might yield more sensitivity for these patients.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-xl" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+11.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">Another avenue for improvement is to change the relative weighting of marker combinations in diagnosis. Some markers have more predictive value than others; certainly the ones plotted in the figure are generally significant. It is possible that the signal from these combinations is being diluted by opposing or neutral signals from other markers. This is an area that a tree boosting algorithm such as XG Boost may certainly help.</AnimatedDiv>
        <AnimatedDiv className="para">In any case, the curiosity behind this was sparked by articles like this and this. I think there's something there. 95% is nothing to scoff at and I'm just some dude.</AnimatedDiv>
        <AnimatedDiv className="para">Thanks for reading! Hopefully you are as optimistic as I am that concepts like these will improve healthcare across the board.</AnimatedDiv>


        <h4>Bonus Nerdistry: What is Support Vector Machine?</h4>
        <AnimatedDiv className="para">For a set of two binarily labeled sets of data, there exists a “hyperplane” in between the sets that separates the two. For simplicity, we can consider two dimensional data first, for which the hyperplane is a line. Surrounding the line on either side are two halves of the boundary zone that contains no data. There are many possible lines to choose (in most cases an infinite number), but the goal of the support vector machine is to find the line for which this boundary is as wide as possible.</AnimatedDiv>
        <AnimatedDiv className="w-full flex justify-center">
          <img className="border-2 border-black max-w-sm md:max-w-xl" src="https://patslookout.s3.us-west-2.amazonaws.com/flow/figure+12.png" />
        </AnimatedDiv>
        <AnimatedDiv className="para">The general equation for the line or hyperplane is: w<sup>T</sup>x + b = 0 where w is called the weight vector perpendicular to the margin and b is some constant to move the line away from the origin. We may label positive examples +1 and negative examples -1 such that positive samples are all w<sup>T</sup>x + b ≥ 1 and w<sup>T</sup>x + b ≤ -1. </AnimatedDiv>
        <AnimatedDiv className="para">Consider two points as close as possible to each other along these boundary lines w<sup>T</sup>x<sup>+</sup> + b = 1 and w<sup>T</sup>x<sup>-</sup> + b = -1. The magnitude of the vector between these two points is equivalent to the width of the boundary, and furthermore, the line is parallel to the weight vector w.</AnimatedDiv>
        <AnimatedDiv className="para">The difference between these equations gives w<sup>T</sup>(x<sup>+</sup>-x<sup>-</sup>) = 2. Since w and the vector between the points are parallel, this is also equivalent to ||w<sup>T</sup>|| * ||(x<sup>+</sup>-x<sup>-</sup>)|| = 2. Divide by w to get the equation for the width of the margin: ||(x<sup>+</sup>-x<sup>-</sup>)|| = 2 / ||w<sup>T</sup>||. We then see that we maximize the boundary by minimizing w.</AnimatedDiv>
        <AnimatedDiv className="para">You can convert this into a quadratic programming equation: subject to the constraints of: 0 ≤ α<sub>i</sub> and y ∑ α<sub>i</sub> y<sub>i</sub> = 0. The terms α can best be thought of as weights for each sample, and it turns out that once solved, most α are equal to zero. The points with non-zero α are those that lie close to the boundary that  contribute the most to its definition. These points are what are called the support vectors.</AnimatedDiv>
      </AnimatedContainer>

    </main>
  )
}

export default Flow
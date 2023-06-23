---
layout: page
title: "PC-SIG Diskette Library (Disk #949)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0949/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0949"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STATISTICAL CONSULTANT"

    The STATISTICAL CONSULTANT is an expert system to help you select the
    right statistical test for your problem.
    
    The system asks you a series of questions about the variables and goals
    of the measurement.  Based on your responses, the system chooses a
    statistical test or measure.  Should your problem require a deeper
    analysis than can be addressed within CONSULTANT, the system indicates
    references for further study.
    
    The program assumes a level of technical knowledge greater than that
    offered in a first course in statistics.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES949.TXT

{% raw %}
```
Disk no  949
Program Title: STATISTCAL CONSULTANT
PC-SIG version 1
 
    The STATISTICAL CONSULTANT helps you select the appropriate statistical
test for your problem. The system asks you a series of questions, starting
with, "how many variables do you have?" Responses lead to the program
finding the particular technique you need. Most questions are phrased for
yes/no responses. NOTE: This program requires an extensive background and
knowledge of statistics.
 
Usage: Statistics
 
System Requirements: 128K memory and one disk drive.
 
How to Start: Type: TYPE STATCON.DOC (press enter) to view
documentation and STATCON (press enter) to run the program.
 
Suggested Registration: $8.00 for reference book.
 
File Descriptions:
 
ORDER    TXT  Order form for accompanying statistics book.
STATCON  000  Program overlay (must be on disk with STATCON.COM).
STATCON  COM  Main program.
STATCON  DOC  Documentation for Statistical Consultant.
STATCONC 000  Program overlay (must be on disk with STATCON.COM).
STATCONC COM  Version of STATCON for composite monitors.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk no 949 STATISTCAL CONSULTANT  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, Type: COPY STATCON.DOC LPT1: (press enter)  ║
║                                                                         ║
║ To run the program, Type: STATCON (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDER.TXT

{% raw %}
```
				ORDER FORM

To order copies of A GUIDE FOR SELECTING STATISTICAL TECHNIQUES FOR
ANALYZING SOCIAL SCIENCE DATA, SECOND EDITION by Frank M. Andrews,
Laura Klem, Terrence N. Davidson, Patrick M. O'Malley and Willard
L. Rodgers send this form and a check for $8 per copy (packages of 
5 copies are $25) to

Publishing Division
Institute for Social Research
The University of Michigan
P.O. Box 1248
Ann Arbor, MI  48106-9973


ALL ORDERS FROM INDIVIDUALS MUS BE PREPAID;  make checks payable to 
the Institute for Social Research.  Organizations with a printed 
purchase order may be billed; actual postage costs will be added to 
billed orders.

PLEASE SEND _____ COPIES OF:
 
	A GUIDE FOR SELECTING STATISTICAL TECHNIQUES
        FOR ANALYZING SOCIAL SCIENCE DATA, SECOND EDITION

	@ $8 each (or $25 for a package of 5 copies)    $__________
       		Michigan Residents add 4% sales tax     $__________
                              Total amount enclosed     $__________


SHIPPING ADDRESS

NAME________________________________________________________
ORGANIZATION _______________________________________________
ADDRESS_____________________________________________________
CITY_____________________________ STATE ______  ZIP_________

______ Please send me information about other volumes published by
       the Institute for Social Research.
```
{% endraw %}

## STATCON.DOC

{% raw %}
```









		     THE STATISTICAL CONSULTANT
                         by Robert Sechrist
                Dept. of Geography & Regional Planning
                 Indiana University of Pennsylvania
                        Indiana, Pa. 15705





                             USERS MANUAL






 






The Statistical Consultant is an authorized implementation of A GUIDE FOR
SELECTING STATISTICAL TECHNIQUES FOR ANALYZING SOCIAL SCIENCE DATA, SECOND
EDITION, by Frank M. Andrews, Laura Klem, Terrence N. Davidson, Patrick M.
O'Malley, and Willard L. Rodgers (Ann Arbor: Institute for Social Research,
The University of Michigan, 1981).  Copyright 1981 by the University of 
Michigan, All Rights Reserved.  Use in this software release is by permission
of the Institute for Social Research.

Copies of the bound volume A GUIDE FOR SELECTING STATISTICAL TECHNIQUES FOR 
ANALYZING SOCIAL SCIENCE DATA, SECOND EDITION, may be ordered from the 
publisher by writing to: Book Sales Section, Institute for Social Research,
The University of Michigan, P.O. Box 1248, Ann Arbor, Michigan  48106
(telephone: 313-764-8271) or by using the form found in the file order.txt
on your distribution diskette.


  
                     THE STATISTICAL CONSULTANT   
   
     The Statistical Consultant is an expert system designed to assist you
in selecting the appropriate statistical test for your problem.  The system
will ask you a series of questions, starting with, how many variable do you
have?  Responses to questions leads to the identification of a particular
technique.  Most questions are phrased for yes/no responses.  In these cases
one need only type y or n.  The Consultant is constructed so that any answer
other than 'y' will be taken as 'n'. Occasionally other responses may be
required.  Follow the prompts and there will be no problem.  A few minutes 
experimentation with the Consultant should answer all remaining questions.  
   
SYSTEM REQUIREMENTS   
   
     You will need an IBM-pc (or compatible) with 128kb memory and one
floppy disk drive.  The Consultant is constructed to take advantage of a
color monitor, but a monochrome will suffice.  If you are using a composite
monitor, then you should execute statconc.  No data files are accessed by
the Consultant.   
   
INSTALLATION   
   
     As always make a backup immediately.  There are five files on the   
supplied diskette.  These are statcon.com, statconc.com, statcon.doc,  
statcon.000, and statconc.000.  Statcon.doc is this file, statcon.com and  
statconc.com are the program files.  Statcon.000 and Statconc.000 are
required overlay files.  Either the statcon or statconc files should be
copied to your work diskette or hard disk.  You should print a copy of
statcon.doc using whatever method you normally employ.  A good method for
printing statcon.doc is the command 'copy statcon.doc prn'. 
   
INVOCATION AND PROGRAM OPERATION   
   
 
     From the system prompt type statcon (or statconc).  For example, 
 
A>statcon 
     You should not call statcon from another drive (A>b:statcon, for example)
because the program will, under some conditions, look for the file statcon.000
on the calling drive. If statcon.000 is not found the program will abort.     
     You will be asked through a series of questions (most of which require 
a yes or no response) to identify how and what you wish to measure, verify, 
or determine.  In some cases the questions have been phrased so that the
negative response would not be readily identifiable were it not enclosed in
parentheses.  Where this is the case, additional indicators are present, and
afterwards your selection is echoed back to the screen in red.  When answering
questions either upper or lower case responses are acceptable.   
      The first choice you must make involves telling the consultant the  
number of variables you will be dealing with.  From there continue answering 
the questions the program asks you. If you do not know what you are being  
asked, you should seek the assistance of someone who has a better grasp of  
statistics than yourself.  The consultant assumes that you know something of
statistics (about the equivalent of an introductory course).  The references 
suggested can be helpful in improving your knowledge of a particular test.  
The full citations for references given by the program can be found below.  
   
USER NOTES AND WARNINGS   
   
The user should please note the following.   
1. Information in red (or highlight for monochrome) after a suggestion   
   should be taken as a warning that may apply in your case.  Notes after   
   the references in yellow (or dim for monochrome) are also warnings, but  
   tend to be more informative, still they should be seriously considered   
   before proceeding with the measure or test.   
2. Weighted data, small sample sizes, complex sample designs and    
   capitalization on chance in fitting a statistical model are sources    
   of potential problems in data analysis.  If one of these situations   
   exists, the CONSULTANT should be used with caution.   
3. The statistical measures recommended are descriptive of the particular 
   sample being examined.  For some statistical measures, the value obtained
   will also be a good estimate of the value in the population as a whole, 
   whereas other statistics may underestimate (or overestimate) the
   population value. In general the amount of bias is relatively small and 
   sometimes there are adjustments which can be made for it.  These 
   adjustments are discussed in good statistics texts (but are not offered
   by the CONSULTANT). If a statistic is a biased estimator of the population
   value, it is marked in the offered solution with an asterisk. (*)   
4. In principle, a confidence interval may be placed around any statistic.  
   Methods for doing this are not indicated in the CONSULTANT.  Formulas   
   for computing confidence intervals for commonly used measures are given  
   in standard textbooks.   
5. The CONSULTANT does not explicitly consider possible transformation of the
   data such as bracketing, using logarithms, ranking, etc.  Transformations
   may be used to simplify analysis or bring data into line with assumptions
   (It is, for example, often possible to transform scores so that the  
   transformed scores correspond to a normal distribution, constitute an 
   interval scale, or relate linearly to another variable.)  Occasionally
   it may be wise to eliminate cases with extreme values.   
6. In many situations it is possible to make alternative decision about the  
   nature of one`s variables, relationships, and/or goals, and these may    
   result in the alternative selections at various points in the decision   
   (interrogation) process of the CONSULTANT.  It is always possible to use 
   techniques that require less stringent assumptions than the techniques  
   originally considered.  Two-point nominal variables meet the definition
   of intervally scaled variables.   
7. Information in blue (or underlined for monochrome) after a suggestion   
   indicates a scenario beyond the scope of the CONSULTANT.   
8. Most importantly, the CONSULTANT is a guide, it is not the only source   
   of information available.  If you are a novice talk to an expert before  
   committing yourself to an inappropriate test.   
               GLOSSARY OF TERMS USED BY THE CONSULTANT  
                                        
  
ADDITIVE.  A situation in which the best estimate of a dependent variable is 
obtained by simply adding together the appropriately computed effects of  
each of the independent variables.  Additivity implies the absence of  
interactions.  See also INTERACTION.  
  
AGREEMENT.  Agreement measures the extent to which two sets of scores (e.g., 
scores obtained from two raters) are identical.  Agreement involves a more  
stringent matching of two variables than does covariation, which implicitly 
allows one to change the mean (by adding a constant) and /or to change the  
variance (by multiplying by a constant) for either or both variables before 
checking the match.  
  
BIAS.  The difference between the expected value of a statistic and the  
population value it is intended to estimate.  See EXPECTED VALUE.   
  
BIASED ESTIMATOR.  A statistic whose expected value is not equal to the  
population value.  See EXPECTED VALUE.  
  
BIVARIATE NORMALITY.  A particular form of distribution of two variables  
that has the traditional "bell" shape (but not all bell-shaped distributions 
are normal).  If plotted in three-dimensional space, with the vertical axis 
showing the number of cases, the shape would be that of a three-dimensional 
bell (if the variances were unequal).  When perfect bivariate normality  
obtains, the distribution of one variable is normal for each and every value 
of the other variable.  See also NORMAL DISTRIBUTION.  
  
BRACKETING.  The operation of combining categories or ranges of values of a 
variable so as to produce a small number of categories.  Sometimes referred 
to as "collapsing" or "grouping."  
  
CAPITALIZATION ON CHANCE.  When one is searching for a maximally powerful  
prediction equation, chance fluctuations in a given sample act to increase  
the predictive power obtained; since data from another sample from the same 
population will show different chance fluctuations, the equation derived for 
one sample is likely to work less well in any other sample.  
  
CASUAL MODEL.  An abstract quantitative representation of real-world  
dynamics (i.e., of the causal dependencies and other interrelationships  
among observed or hypothetical variables.)  

COMPLEX SAMPLE DESIGN.  Any sample design that uses design that uses  
something other than simple random selection.  Complex sample designs  
include multi-stage selection, and/or stratification, and/or clustering.   
For information on the calculation of sampling errors of statistics from  
complex designs, see note 9 in Appendix C.  
COVARIATE.  A variable that is used in an analysis to correct, adjust, of  
modify the scores on a dependent variable before those scores are related to 
one or more independent variables.  For example, in an analysis of how  
demographic factors (age, sex, education, etc.) relate to ware rates,  
monthly earnings might first be adjusted to take account of (i.e., remove  
effects attributable to) number of hours worked, which in this example would
be the covariate.  
  
COVARIATION.  Covariation measures the extent to which cases (e.g., persons) 
have the same relative positions on two variables.  See also AGREEMENT.  
  
DEPENDENT VARIABLE.  A variable which the analyst is trying to explain in  
terms of one or more independent variables.  The distinction between  
dependent and independent variables is typically made on theoretical grounds 
- in terms of a particular causal model or to test a particular hypothesis. 
Synonym:  criterion variable.  
  
DESIGN MATRIX.  A specification, expressed in matrix format, of the  
particular effects and combinations of effects that are to be considered in 
an analysis.  
  
DICHOTOMOUS VARIABLE.  A variable that has only two categories.  Gender  
(male/female) is an example.  See also TWO-POINT SCALE.  
  
DUMMY VARIABLE.  A variable with just two categories that reflects only part 
of the information actually available in a more comprehensive variable.  For 
example, the four-category variable Region (Northeast, Southeast, Central,  
West) could be the basis for a two-category dummy variable that would  
distinguish Northeast from all other regions.  Dummy variables often come in 
sets so as to reflect all of the original information.  In our example, the 
four-category region variable defines four dummy variables:  (1) Northeast  
vs. all other; (2) Southeast vs. all other; (3) Central vs. all other; and  
(4) West vs. all other.  Alternative coding procedures (which are equivalent 
in terms of explanatory power but which may produce more easily  
interpretable estimates) are effect coding and orthogonal coefficients.  
  
EXPECTED VALUE.  A theoretical average value of homogeneity of variance.   
See HOMOGENEITY OF VARIANCE.                          
  
HETEROSCEDASTICITY.  The absence of homogeneity of variance.  See also  
HOMOGENEITY OF VARIANCE.    
  
HIERARCHICAL ANALYSIS.  As used on page 26 of the Guide, a hierarchical 
analysis is one in which inclusion of a higher order interaction term  
implies the inclusion of all lower order terms.  For example, if the  
interaction of two independent variables is included in an explanatory  
model, then the main effects for both of those variables are also included  
in the model.    

HOMOGENEITY OF VARIANCE.  A situation in which the variance on a dependent  
variable is the same (homogeneous) across all levels of the independent  
variables.  In analysis of variance applications, several statistics are  
available for testing the homogeneity assumption (see Kirk, 1968, Page 61); 
in regression applications, a lack of homogeneity cam be detected by  
examination of residuals (see Draper and Smith, 1966, page 86).  In either  
case, a variance-stabilizing transformation may be helpful (see Kruskal,  
1978, page 1052).  Synonym:  homoscedasticity.  Antonym:   
heteroscedasticity.     
  
HOMOSCEDASTICITY.  See HOMOGENEITY OF VARIANCE.   
  
INDEPENDENT VARIABLE.  A variable used to explain a dependent variable.   
Synonyms:  predictor variable, explanatory variable.  See also DEPENDENT  
VARIABLE.   
  
INTERACTION.  A situation in which the direction and/or magnitude of the  
relationship between two variables depends on (i.e., differs according to)  
the value of one or more other variables.  When interaction is present,  
simple additive techniques are inappropriate; hence, interaction is  
sometimes thought of as the absence of additivity.  Synonyms:   
nonadditivity, conditioning effect, moderating effect contingency effect.   
See also PATTERN VARIABLE, PRODUCT VARIABLE.  
  
INTERVAL SCALE.  A scale consisting of equal-sized units (dollars, years,  
etc.).  On an interval scale the distance between any two positions is of  
known size.  Results from analytic techniques appropriate for interval  
scales will be affected by any non-linear transformation of the scale  
values.  See also SCALE OF MEASUREMENT.  
  
INTERVENING VARIABLE.  A variable which is postulated to be a predictor of  
one or more dependent variables, and simultaneously predicted by one or more 
independent variables.  Synonym:  mediating variable.  
  
KURTOSIS.  Kurtosis indicates the extent to which a distribution is more  
peaked or flat-topped than a normal distribution.  
  
LINEAR.  The form of a relationship among variables such that when any two  
variables are plotted, a straight line results.  A relationship is linear if 
the effect on a dependent variable of a change of one unit in an independent 
variable is the same for all possible such changes.  
  
MATCHED SAMPLES.  Two (or more) samples selected in such a way that each  
case (e.g., person) in one sample is matched (i.e., identical within  
specified limits) on one or more preselected characteristics with a  
corresponding case in the other sample.  One example of matched samples is  
having repeated measures on the same individuals.  Another example is  
linking husbands and wives.  Matched samples are different from independent 
samples, where such case-by-case matching on selected characteristics has 
not been assured.  
MEASURE OF ASSOCIATION.  A number (a statistic) whose magnitude indicates  
the degree of correspondence (i.e., strength of relationship) between two  
variables.  An example is the Pearson product-moment correlation  
coefficient.  Measures of association are different from statistical tests  
of association (e.g., Pearson chi-square, F test) whose primary purpose is  
to assess the probability that the strength of a relationship is different  
from some preselected value (usually zero).  See also STATISTICAL MEASURE,  
STATISTICAL TEST.   
  
  
MISSING DATA.  Information that is not available for a particular case
(e.g.,person) for which at least some other information is available.  This  
can occur for a variety of reasons, including a person's refusal or  
inability to answer a question, nonapplicability of a question, etc.  For  
useful discussions of how to overcome problems caused by missing data in  
surveys see Hertel (1976) and Kim and Curry (1977).  
  
MULTIVARIATE NORMALITY.  The form of a distribution involving more than two 
variables in which the distribution of one variable is normal for each and  
every combination of categories of all other variables.  See Harris (1975,  
page 231) for a discussion of multivariate normality.  See also NORMAL  
DISTRIBUTION.  
  
NOMINAL SCALE.  A classification of cases which defines their equivalence  
and non-equivalence, but implies no quantitative relationships or ordering  
among them.  Analytic techniques appropriate for nominally scaled variables 
are not affected by any one-to-one transformation of the numbers assigned to 
the classes.  See also SCALE OF MEASUREMENT.  
  
NONADDITIVE.  Not additive.  See also ADDITIVE, INTERACTION.  
  
NORMAL DISTRIBUTION.  A particular form for  the distribution of a variable 
which, when plotted, produces a "bell" shaped curve--symmetrical, rising  
smoothly from a small number of cases at both extremes to a large number of
cases in the middle.  Not all symmetrical bell-shaped distributions meet the
definition of normality.  See Hays (1973,page 296).  
  
NORMALITY.  See NORMAL DISTRIBUTION.  
  
ORDINAL SCALE.  A classification of cases into a set of ordered classes such 
that each case is considered equal to, greater than, or less than every  
other case.  Analytic techniques appropriate for ordinally scaled variables 
ore not affected by any monotonic transformation of the numbers assigned to 
the classes.  See also SCALE OF MEASUREMENT.  
  
OUTLYING CASE (OUTLIER).  A case (e.g., person) whose score on a variable  
deviates substantially from the mean (or other measure of central tendency). 
Such cases can have disproportionately strong effects on statistics.  
PATTERN VARIABLE.  A nominally scaled variable whose categories identify  
particular combinations (patterns) of scores on two or more other variables. 
For example, a party-by-gender pattern variable might be developed by  
classifying people into the following six categories:  (1) Republican males, 
(2) Independent females, (3) Democratic males, (4) Republican females, (5)  
Independent females, (6) Democratic females.  A pattern variable can be used 
to incorporate interaction in multivariate analysis.  
  
PRODUCT VARIABLE.  An intervally scaled variable whose scores are equal to  
the product obtained when the values of two other variables are multiplied  
together.  A product variable can be used to incorporate certain types of  
interaction in multivariate analysis.  
  
RANKS.  The position of a particular case (e.g., person) relative to other  
cases on a defined scale - as in "1st place," "2nd place," etc.  Note that
when the actual values of the numbers designating the relative positions  
(the ranks) are used in analysis they are being treated as an interval  
scale, not on ordinal scale.  See also INTERVAL SCALE, ORDINAL SCALE.  
  
SCALE OF MEASUREMENT.  As used in this Guide, scale of measurement refers to 
the nature of the assumptions one makes about the properties of a variable; 
in particular, whether that variable meets the definition of nominal,  
ordinal, or interval measurement.  See also NOMINAL SCALE, ORDINAL SCALE,  
INTERVAL SCALE.  
  
SKEWNESS.  Skewness is a measure of lack of symmetry of a distribution.  
  
STANDARDIZED COEFFICIENT.  When an analysis is performed on variables that  
have been standardized so that they have variances of 1.0, the estimates  
that result are known as standardized coefficients; for example, a  
regression run on original variables produces unstandardized regression  
coefficients known as b's, while a regression run on standardized variables 
produces standardized regression coefficients known as betas.  (In practice, 
both types of coefficients can be estimated from the original variables.)   
Blalock (1967), Hargens (1976), and Kim and Mueller (1976) provide useful  
discussions on the use of standardized coefficients.  
  
STANDARDIZED VARIABLE.  A variable that has been transformed by  
multiplication of all scores by a constant and/or by the addition of a  
constant to all scores.  Often these constants are selected so that the  
transformed scores have a mean of zero and a variance (and standard  
deviation) of 1.0.  
  
STATISTICAL INDEPENDENCE.  A complete lack of covariation between variables; 
a lack of association between variables.  When used in analysis of variance
or covariance, statistical independence between the independent variables is 
sometimes referred to as a balanced design.    
STATISTICAL MEASURE.  A number (a statistic) that can be used to assess the 
probability that a statistical measure deviates from some preselected value 
(often zero) by no more than would be expected due to the operation of  
chance if the cases (e.g., persons) studied were randomly selected from a  
larger population.  Examples include Pearson chi-square, F test, t test, and 
many others.  Statistical tests are different from statistical measures.   
See also STATISTICAL MEASURE.  
  
TRANSFORMATION.  A change made to the scores of all cases (e.g., persons) on 
a variable by the application of the same mathematical operation(s) to each 
score.  (Common operations include addition of a constant, multiplication by 
a constant, taking logarithms, ranking bracketing, etc.)  
  
TWO-POINT SCALE.  If each case is classified into one of two categories  
(e.g., yes/no. male/female, dead/alive), the variable is a two-point scale. 
For analytic purposes, two-point scales can be treated as nominal scales,  
ordinal scales, or interval scales.  
  
WEIGHTED DATA.  Weights are applied when one wishes to adjust the impact of 
cases (e.g., persons) in the analysis, e.g., to take account of the number  
of population units that each case represents.  In sample surveys weights
are most likely to be used with data derived from sample designs having  
different selection rates or with data having markedly different subgroup  
response rates.  
  
  
  
			REFERENCES CITED   
  
  
Andrews, D.F., Bickel, P.J., Hampel, F.R., Huber, P.J., Rogers,W.H., and 
Tukey, J.W.  ROBUST ESTIMATES OF LOCATION:   SURVEY AND ADVANCES. 
Princeton: Princeton University Press, 1972.    
  
Andrews, F.M., and Messenger, R.C.  MULTIVARIATE NOMINAL SCALE ANALYSIS.   
Ann Arbor:  Institute for Social Research, The  University of Michigan,  
1973.    
  
Andrews, F.M., Morgan, J.N., Sonquist, J.A., and Klem, L.  MULTIPLE  
CLASSIFICATION ANALYSIS.  Second edition.  Ann Arbor: Institute for Social  
Research, The University of Michigan, 1973.  
  
Blalock, H.M., Jr. Casual inferences, closed populations, and measures of  
association.  AMERICAN POLITICAL SCIENCE REVIEW 61 (1967): 130-136.  

Blalock, H.M., JR. Can we find a genuine ordinal slope analogue?  IN  
SOCIOLOGICAL METHODOLOGY 1976, edited by D.R. Heise.  San Francisco:   
Jossey-Bass, 1975.  
  
Blalock, H.M., Jr.  SOCIAL STATISTICS.  Second edition, revised, New York:  
McGraw-Hill, 1979.  
[BMDP] Dixon, W.J., editor.  BDMP STATISTICAL SOFTWARE 1981 MANUAL.   
Berkeley, California:  University of California Press, 1981.  
  
Bock, R.D., and Haggard, E.A.  The use of multivariate analysis of variance 
in behavioral research.  In HANDBOOK OF MEASUREMENT AND ASSESSMENT IN  
BEHAVIORAL SCIENCES, edited by D.K. Whitla.  Reading, Massachusetts:   
Addison-Wesley, 1968  
  
Bock, R.D., and Yates, G. MULTIQUAL:  LOG-LINEAR ANALYSIS OF NOMINAL OR  
ORDINAL QUALITATIVE DATA BY THE METHOD OF MAXIMUM LIKELIHOOD.  User's Guide. 
Chicago:  National Educational Resources, 1973.  
  
Borg, I., and Lingoes, J.C.  A model and algorithm for multidimensional  
scaling with external constraints on the distances.  PSYCHOMETRIKA 45  
(1980):  25-38.  
  
Bowker, A.H., A test for symmetry in contingency tables.  JOURNAL OF THE  
AMERICAN STATISTICAL ASSOCIATION 43 (1948):  572-574.  
  
Bradley, D.R., Bradley, T.D., McGrath, S.G., and Cutcomb, S.D. Type 1 error 
rate of the chi-square test of independence in RxC tables that have small  
expected frequencies.  PSYCHOLOGICAL BULLETIN 86 (1979):  1290-1297.  
  
Bradley, J.V. DISTRIBUTION-FREE STATISTICAL TESTS.  Englewood Cliffs, New  
Jersey:  Prentice-Hall, 1968.  
  
Brown, M.B., and Forsythe, A.B. The small sample behavior of some  
statistics which test the equality of several means.  TECHNOMETRICS 16  
(1974a):  129-132.  
 
Brown, M.B., and Forsythe, A.B.  Robust tests for the equality of variances. 
JOURNAL OF THE AMERICAN STATISTICAL ASSOCIATION 69 (1974b):  364-367.  
  
Camilli, G., and Hopkins, K.D.  Applicability of chi-square to 2x2  
contingency tables with small expected cell frequencies.  PSYCHOLOGICAL  
BULLETIN 85 (1978):  163-167.  
  
Carroll, J.D., and Chang, J.J.  Analysis of individual differences in  
multidimensional scaling via and N-way generalization of "Eckart-Young"  
decomposition.  PSYCHOMETRIKA 35 (1970): 283-319.  
  
Carroll, J.D., Pruzansky, S., and Kruskal, J.B.  CANDELINC:  a general  
approach to multidimensional analysis of many-way arrays with linear  
constraints on parameters.  PSYCHOMETRIKA 45 (1980):  3-24.  
  
Cohen, J.  A coefficient of agreement for nominal scales. EDUCATIONAL AND  
PSYCHOLOGICAL MEASUREMENT 20 (1960):  37-46.  
  
Cohen, J.  Weighted Kappa:  nominal scale agreement with provision for  
scaled disagreement or partial credit.  PSYCHOLOGICAL BULLETIN 70 (1968):
213-220.
Conover, W.J.  PRACTICAL NONPARAMETRIC STATISTICS.  New York:  John Wiley,  
1971.  
  
Cooley, W.W., and Lohnes, P.R.  MULTIVARIATE DATA ANALYSIS.  New York:   
Wiley, 1971.  
  
D'Agostino, R.B.  Simple compact portable test of normality:  Geary's test  
revisited.  PSYCHOLOGICAL BULLETIN 74 (1970):  138-140.  
  
Darlington, R.B.  Reduced variance regression.  PSYCHOLOGICAL BULLETIN 85  
(1978):  1238-1255.  
  
Dempster, P., Schatzoff, M., and Wermuth, N. A simulation study of  
alternatives to ordinary least squares.  JOURNAL OF THE AMERICAN STATISTICAL 
ASSOCIATION 72 (1977):  77-102.  
  
Dixon, W.J., and Massey, F.J., Jr.  INTRODUCTION TO STATISTICAL ANALYSIS.   
Third edition.  New York:  McGraw-Hill, 1969.  
  
Draper, N.R., and Smith, H.  APPLIED REGRESSION ANALYSIS.  New York:  Wiley, 
1966.  
  
DuMouchel, W.H.  The regression of a dichotomous variable.  Unpublished.   
Survey Research Center Computer Support Group, Institute for Social  
Research, University of Michigan, 1974.  
  
DuMouchel, W.H.  On the analogy between linear and log-linear regression.   
Technical Report No. 67.  Unpublished.  Department of Statistics, University 
of Michigan, March 1976.  
  
Feinberg, S.E.  THE ANALYSIS OF CROSS-CLASSIFIED DATA.  Cambridge,  
Massachusetts:  The MIT Press, 1977. 
  
Fennessey, J., and d'Amico, R. Collinearity, ridge regression, and  
investigator judgement.  SOCIOLOGICAL METHODS AND RESEARCH 8 (1980): 
309-340.  
  
Fleiss, J.L., Cohen, J., and Everitt, B.S.  Large sample standard errors of 
kappa and weighted kappa.  PSYCHOLOGICAL BULLETIN 72 (1969):  323-327.  
  
Freeman, L.C.  ELEMENTARY APPLIED STATISTICS FOR STUDENTS IN BEHAVIORAL  
SCIENCE.  New York :  Wiley, 1965.  
  
Gillo, M.W.  MAID:  A Honeywell 600 program for an automatised survey  
analysis.  BEHAVIORAL SCIENCE 17 (1972):  251-252.  
  
Gillo, M.W., and Shelley, M.W.  Predictive modelling of multivariable and  
multivariate data.  JOURNAL OF THE AMERICAN STATISTICAL ASSOCIATION 69  
(1974):  646-653.  

Glass, G.V., and Hakstian, A.R.  Measures of association in comparative  
experiments:  their development and interpretation.  AMERICAN EDUCATIONAL  
RESEARCH JOURNAL 6 (1969):  403-414.  
Glass, G.V., Willson, V.L., and Gottman, J.M.  DESIGN AND ANALYSIS OF TIME  
SERIES EXPERIMENTS.  Boulder, Colorado:  Colorado Associated University  
Press, 1975.  
  
Gokhale, D.V., and Kullback, S.  THE INFORMATION IN CONTINGENCY TABLES.  New 
York:  Marcel Dekker, 1978.  
  
Goodman, L.A., and Kruskal, W.H.  Measures of association for cross  
classifications.  JOURNAL OF THE AMERICAN STATISTICAL ASSOCIATION 49 (1954): 
 
732-764.  
  
Goodman, L.A., and Kruskal, W.H.  Measures of association for cross  
classification III:  approximate sampling theory.   JOURNAL OF THE AMERICAN 
STATISTICAL ASSOCIATION 58 (1963):  310-364.  
  
Goodman, L.A., and Kruskal, W.H.  Measures of association for cross  
classification IV:  simplification of asymptotic variances.  JOURNAL OF THE 
AMERICAN STATISTICAL ASSOCIATION 67 (1972):  415-421.  
  
Gorsuch, R.L.  FACTOR ANALYSIS.  Philadelphia:  E.B. Saunders, 1974.  
  
Gross, A.J., and Clark, V.A.  SURVIVAL DISTRIBUTIONS:  RELIABILITY  
APPLICATIONS IN THE BIOMEDICAL SCIENCES.  New York:  Wiley, 1975.  
  
Guttman, L.  A general nonmetric technique for finding the smallest  
coordinate space for a configuration of points.  PSYCHOMETRIKA 33 (1968):   
469-506.  
  
Hannan, M.T., and Tuma, N.B.  Methods for temporal analysis.  In ANNUAL  
REVIEW OF SOCIOLOGY:  1979, edited by A. Inkeles.  Palo Alto:  Annual  
Reviews, 1979.  
 
Hargens, L.  A note on standardized coefficients as structural parameters.  
SOCIOLOGICAL METHODS AND RESEARCH 5 (1976):  247-256.  
  
Harris, R.J.  A PRIMER OF MULTIVARIATE STATISTICS.  New York:  Academic  
Press, 1975.  
  
Harshbarger, T.R.  INTRODUCTORY STATISTICS:  A DECISION MAP.  New York:  
Macmillan, 1971.  
  
Harshman, R.A.  PARAFAC:  Foundations of the PARAFAC procedure- models and  
conditions for an 'explanatory' multi-model factor analysis.  WORKING PAPERS 
IN PHONETICS 16.  Los Angeles:  University of California at Los Angeles,  
1970.  
  
Hartwig, F.  EXPLORATORY DATA ANALYSIS.  Beverly Hills, California:  Sage,  
1979.  
  
Hays, W.L.  STATISTICS FOR THE SOCIAL SCIENCES.  Second edition.  New York: 
Holt, Rinehart, and Winston, 1973.  
Hertel, B.R.  Minimizing error variance introduced by missing data routines 
in survey analysis.  SOCIOLOGICAL METHODS AND RESEARCH 4 (1976):  459-474.  
  
Isaac, P.D, and Poor, D.D.S.  On the determination of appropriate  
dimensionality in data with error.  PSYCHOMETRIKA 39 (1974):  91-109.  
  
Joreskog, K.G., and Sorbom. D.  LISREL:  ANALYSIS OF LINEAR STRUCTURAL  
RELATIONSHIPS BY THE METHOD OF MAXIMUM LIKELIHOOD.  Version IV.  User's  
Guide, Chicago:  National Educational Resources, 1978.  
  
Kalbfleisch, J.D., and Prentice, R.L.  THE STATISTICAL ANALYSIS OF FAILURE  
TIME DATA.  New York:  Wiley, 1980.  
  
Kelley, T.L.  An unbiased correlation ratio measure.  PROCEEDINGS OF THE  
NATIONAL ACADEMY OF SCIENCES 21 (1935):  554-559.  
  
Kendall, M.G.  RANK CORRELATION METHODS.  Fourth edition. London:  Griffin, 
1970.  
  
Kendall, M.G., and Stuart, A.  THE ADVANCED THEORY OF STATISTICS,  Volume 2. 
New York:  Hafner, 1961.  
  
Kerlinger, F.N., and Pedhazur, E.J.  MULTIPLE REGRESSION IN BEHAVIORAL  
RESEARCH.  New York:  Holt, Rinehart and Winston, 1973.  
  
Kim, J.  Predictive measures of ordinal association.  AMERICAN JOURNAL OF  
SOCIOLOGY 76 (1971):  891-907.  
  
Kim, J.  Multivariate analysis of ordinal variables.  AMERICAN JOURNAL OF  
SOCIOLOGY 81 (1975):  261-298.  
  
Kim, J., and Curry, J.  The treatment of missing data in multivariate  
analysis.  SOCIOLOGICAL METHODS AND RESEARCH 6 (1977):  215-240.  
  
Kim, J., and Mueller, C.W.  Standardized and unstandardized coefficients in 
causal analysis.  SOCIOLOGICAL METHODS AND RESEARCH 4 (1976):  423-438.  
  
Kirk, R.E.  EXPERIMENTAL DESIGN:  PROCEDURES FOR THE BEHAVIORAL SCIENCES.   
Belmont, California:  Brooks/Cole, 1968.  
  
Krippendorff, K. Bivariate agreement coefficients for reliability of data.  
In SOCIOLOGICAL METHODOLOGY:  1970, edited by E.F. Borgatta and G.W.  
Bohrnstedt.  San Francisco:  Jossey-Bass, 1970.  
  
Kruskal, J.B.  Multidimensional scaling by optimizing goodness of fit to a  
nonmetric hypothesis.  PSYCHOMETRIKA 29 (1964a):  1-27.  
  
Kruskal, J.B.  Nonmetric multidimensional scaling:  a numerical method.   
PSYCHOMETRIKA 29 (1964b):  115-130.  
Kruskal, J.B.  Transformations of data. In INTERNATIONAL ENCYCLOPEDIA OF  
STATISTICS, Volume 2, edited by W.H. Kruskal and J.M. Tanur. New York:   
Crowell Collier and Macmillan.  Originally published 1968.  Copyright  
renewed in 1978 by The Free Press.  
  
Kruskal, J.B., and Wish, M.  MULTIDIMENSIONAL SCALING.  Beverly Hills,  
California:  Sage, 1978.  
  
Kruskal, J.B., Young, F.W., and Seery, J.B. How to use KYST, a very flexible 
program to do multidimensional scaling and unfolding.  Unpublished.  Bell  
Laboratories, Murray Hills, New Jersey, 1973.  
  
Landis, J.R., Stanish, W.M., Freeman, J.L., and Koch,G.G.  A computer  
program for the generalized chi-square analysis of categorical data using  
weighted least squares (GENCAT).  COMPUTER PROGRAMS IN BIOMEDICINE 6 (1976): 
196-231.  
  
Langeheine, R.  Erwartete fitwerte fur Zufallskonfigurationen in PINDIS.   
ZEITSCHRIFT FUR SOZIALPSYCHOLOGIE 11 (1980):  38-49.  
  
Leinhardt, S., and Wasserman, S.S.  Exploratory data analysis:  an  
introduction to selected methods.  In SOCIOLOGICAL METHODOLOGY 1979, edited 
by K.F. Schuessler.  San Francisco:  Jossey-Bass, 1978.  
  
Light, R.J.  Measures of response agreement for qualitative data:  some  
generalizations and alternatives.  PSYCHOLOGICAL BULLETIN 76 (1971): 
365-377.  
  
Lingoes, J.C., and Borg, I.  Procrustean individual difference scaling.   
JOURNAL OF MARKETING RESEARCH 13 (1976):  406-407.  
  
Lingoes, J.C., Roskam, E.E., and Borg, I.  GEOMETRIC REPRESENTATIONS OF  
RELATIONAL DATA.  Second edition.  Ann Arbor:  Mathesis Press, 1979.  
  
MacCallum, R.C., and Cornelius, E.T.  A Monte Carlo Investigation of  
recovery of structure by ALSCAL.  PSYCHOMETRIKA 42 (1977):  401-428.  
  
Mayer, L.S., and Robinson,J.A.  Measures of association for multiple   
regression models with ordinal predictor variables.  IN SOCIOLOGICAL  
METHODOLOGY 1978, edited by K.F. Schuessler.  San Francisco:  Jossey-Bass,  
1977.  
  
McCleary, R., and Hay, R.A.,Jr., with Meidinger, E.E., and McDowall, D.   
APPLIED TIME SERIES ANALYSIS FOR THE SOCIAL SCIENCES.  Beverly Hills,  
California:  Sage, 1980.  
  
McNemar, Q.  PSYCHOLOGICAL STATISTICS.  Fourth edition.  New York:  Wiley,  
1969.  
  
[MIDAS] Fox, D.J., and Guire, K.E.  DOCUMENTATION FOR MIDAS.  Third edition, 
Ann Arbor:  Statistical Research Laboratory, The University of Michigan,  
1976.  
Morrison, D.F.  MULTIVARIATE STATISTICAL METHODS.  Second edition.   New  
York:  McGraw-Hill, 1976.  
  
Mosteller, F., and Tukey, J.W.  DATA ANALYSIS AND REGRESSION.  Reading,  
Massachusetts:  Addison-Wesley, 1977.  
  
Neter, J., and Wasserman, W.  APPLIED LINEAR STATISTICAL MODELS.  Homewood, 
Illinois:  Richard D. Irwin, 1974.  
  
Nunnally, J.C.  PSYCHOMETRIC THEORY.  Second edition.  New York: 
McGraw-Hill, 1978.  
  
Olson, C.L.  On choosing a test statistic in multivariate analysis of  
variance.  PSYCHOLOGICAL BULLETIN 83 (19760:  579-586.  
  
Olsson, U.  Maximum likelihood estimation of the polychoric correlation  
coefficient.  PSYCHOMETRIKA 44 (1979):  443-460.  
  
Olsson, U.  Measuring correlation in ordered two-way contingency tables.   
JOURNAL OF MARKETING RESEARCH 17 (1980):  391-394.  
  
[OSIRIS] Survey Research  Center Computer Support Group.  OSIRIS IV USER'S  
MANUAL.  Seventh edition.  Ann Arbor:  Institute for Social Research, The  
University of Michigan, 1981.  
  
Overall, J.E., and Klett, C.J.  APPLIED MULTIVARIATE ANALYSIS.  New York:   
McGraw-Hill, 1972.  
  
Ramsay, J.O.  Maximum likelihood estimation in multidimensional scaling.   
PSYCHOMETRIKA 42 (1977): 241-266.  
  
Rao, C.R.  LINEAR STATISTICAL INFERENCE AND ITS APPLICATIONS.  New-York:   
Wiley, 1965.  
  
Robinson, W.S.  The statistical measurement of agreement.  AMERICAN  
SOCIOLOGICAL REVIEW 22 (1957):  17-25.  
  
Rozeboom, W.W.  Ridge regression:  bonanza or beguilement?  PSYCHOLOGICAL  
BULLETIN 86 (1979):  242-249.  
  
Sands, R., and Young, F.W.  Component models for three-way data:  an  
alternating least squares algorithm with optimal scaling features.   
PSYCHOMETRIKA 45 (1980):  39-68.  
  
[SAS] SAS Institute, Inc.  SAS USER'S GUIDE, 1979 EDITION.  Raleigh, North  
Carolina:  SAS Institute, 1979.  
  
[SAS] SAS Institute, Inc.  THE SAS SUPPLEMENTAL LIBRARY USER'S GUIDE, 1980  
EDITION.  Cary, North Carolina:  SAS Institute, 1980.  
  
Siegel, S.  NONPARAMETRIC METHODS FOR THE BEHAVIORAL SCIENCES.  New York:   
McGraw-Hill, 1956.  Smith, G., and Campbell, F.  A critique of ridge regression methods.   
JOURNAL OF THE AMERICAN STATISTICAL ASSOCIATION 75 (1980):  74-81.  
  
Sneath, P.H.A., and Sokal, R.R.  NUMERICAL TAXONOMY.  San Francisco:  W.H.  
Freeman, 1973.  
  
Snedecor, G.W., and Cochran, W.G.  STATISTICAL METHODS.  Sixth edition.   
Ames, Iowa:  The Iowa State University Press, 1967.  
  
Somers, R.H.  A new asymmetric measure of association for ordinal variables. 
AMERICAN SOCIOLOGICAL REVIEW 27 (1962):  799-811.  
 
Sonquist, J.A., Baker, E.L., and Morgan, J.N.  SEARCHING FOR STRUCTURE.   
Revised edition.  Ann Arbor:  Institute for Social Research, The University 
of Michigan, 1974.  
  
Sorbom, D., and Joreskog, K.G.  COFAMM:  CONFIRMATORY FACTOR ANALYSIS WITH  
MODEL MODIFICATION.  User's Guide.  Chicago:  National Educational  
Resources, 1976.  
  
Spence, I., and Graef, J.  The determination of the underlying  
dimensionality of an empirically obtained matrix of proximities.   
MULTIVARIATE BEHAVIORAL RESEARCH 9 (1974):  331-342.  
  
Spence, I., and Ogilvie, J.C.  A table of expected stress values for random 
rankings in nonmetric multidimensional scaling.  MULTIVARIATE BEHAVIORAL  
RESEARCH 8 (1973):  511-517.  
  
[SPSS] Nie, N.H., Hull, C.H., Jenkins, J.G., Steinbrenner, K., and Bent,  
D.H.  SPSS STATISTICAL PACKAGE FOR THE SOCIAL SCIENCES.  Second edition.    
New York:  McGraw-Hill, 1975.  
  
[SPSS] Hull, C.H., and Nie, N.H.  SPSS UPDATE 7-9:  NEW PROCEDURES AND  
FACILITIES FOR RELEASES 7-9.  New York:  McGraw-Hill, 1981.  
  
Srikantan, K.S.  Canonical association between nominal measurements.   
JOURNAL OF THE AMERICAN STATISTICAL ASSOCIATION 65 (1970):  284-292.  
  
Statistical Research Laboratory.  ELEMENTARY STATISTICS USING MIDAS.  Second
edition.  Ann Arbor:  Statistical Research Laboratory, The University of  
Michigan, 1976.  
  
Statistics Department, University of Chicago.  ECTA program:  description  
for users.  Mimeographed paper, 1973.  
  
Stuart, A.  The estimation and comparison of strengths of association in  
contingency tables.  BIOMETRIKA 40 (1953):  105-110.  
  
Takane, Y., Young, F.W., and DeLeeuw, J.   Nonmetric individual differences
multidimensional scaling:  an alternating least squares method with optimal 
scaling features.  PSYCHOMETRIKA 42 (1977):  7-67.  
Tukey, J.W.  EXPLORATORY DATA ANALYSIS.  Reading, Massachusetts: 
Addison-Wesley, 1977.  
  
Young, F.W., and Torgerson, W.S.  TORSCA, a FORTRAN IV program for
Shepard-Kruskal multidimensional scaling analysis.  BEHAVIORAL SCIENCE 12
(1976): 498.  
  
Yule, G.V., and Kendall, M.G.  AN INTRODUCTION TO THE THEORY OF STATISTICS. 
Fourteenth edition.  London:  Griffin, 1957.  
 
 
 
	
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0949

     Volume in drive A has no label
     Directory of A:\

    FILES949 TXT      1195  12-16-87   9:01a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-11-87  10:49a
    ORDER    TXT      1385   8-05-87   3:53p
    STATCON  000     48640   8-05-87   2:57p
    STATCON  COM     25960   8-05-87   2:57p
    STATCON  DOC     40534   8-05-87   4:10p
    STATCONC 000     48640   8-05-87   3:57p
    STATCONC COM     25678   8-05-87   3:57p
            9 file(s)     192610 bytes
                          123904 bytes free

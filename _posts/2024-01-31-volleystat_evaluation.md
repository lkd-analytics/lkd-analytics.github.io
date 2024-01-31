---
title: '`volleystat` Review and Journal Article Appraisal'
date: "2024-01-31 16:00:00 +/-1100"
categories: test
output:
  md_document:
    variant: markdown_github
    preserve_yaml: yes
  github_document: default
  pdf_document: default
tags: null
---

<style type="text/css">
  .nav-tabs>li>a:hover, .nav-tabs>li>a:focus, .nav-tabs>li.active>a,     .nav-tabs>li.active>a:hover, .nav-tabs>li.active>a:focus{
     background-color: #298bb8;
     color: #ffffff;
     }
</style>
<style type="text/css">
script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
</style>
<script>
 $(document).ready(function() {
    $('body').prepend('<div class=\"zoomDiv\"><img src=\"\" class=\"zoomImg\"></div>');
    // onClick function for all plots (img's)
    $('img:not(.zoomImg)').click(function() {
      $('.zoomImg').attr('src', $(this).attr('src')).css({width: '100%'});
      $('.zoomDiv').css({opacity: '1', width: '85%', border: '1px solid white', borderRadius: '5px', position: 'fixed', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)', boxShadow: '0px 0px 50px #000000', zIndex: '50', overflow: 'auto', maxHeight: '100%'});
    });
    // onClick function for zoomImg
    $('img.zoomImg').click(function() {
      $('.zoomDiv').css({opacity: '0', width: '0%'}); 
    });
  });
</script>

------------------------------------------------------------------------

# 1. Open Source Data: Overview

## 1.1 Datasets and variables

The `volleystat` package is an open-source statistics repository for the
Men & Female German Bundesliga Volleyball League (1st Division) created
by [Viktor Bozhinov](https://github.com/bozhinvi). The package contains
various datasets with multiple variables, including:

### First tabs

{% tabs log %}

{% tab log php %}
```php
var_dump('hello');
```
{% endtab %}

{% tab log js %}
```javascript
console.log('hello');
```
{% endtab %}

{% tab log ruby %}
```javascript
pputs 'hello'
```
{% endtab %}

{% endtabs %}


### matches

Dataset containing match data.

    ##  [1] "league_gender"     "season_id"         "competition_stage"
    ##  [4] "match_id"          "match"             "match_day"        
    ##  [7] "date_time"         "spectators"        "match_duration"   
    ## [10] "team_id"           "team_name"         "set_won"

### matchstats

Dataset containing match statistics

    ##  [1] "league_gender" "season_id"     "match_id"      "team_id"      
    ##  [5] "player_id"     "shirt_number"  "vote"          "pt_tot"       
    ##  [9] "pt_bp"         "pt_profloss"   "serv_tot"      "serv_err"     
    ## [13] "serv_pt"       "rec_tot"       "rec_err"       "rec_pos"      
    ## [17] "rec_per"       "att_tot"       "att_err"       "att_blo"      
    ## [21] "att_pt"        "att_per"       "blo_pt"

### match_addresses

Dataset containing venue details

    ## [1] "season_id" "match_id"  "gym"       "adress"    "lon"       "lat"

### players

Dataset containing match statistics

    ##  [1] "season_id"     "league_gender" "team_id"       "team_name"    
    ##  [5] "lastname"      "firstname"     "height"        "gender"       
    ##  [9] "birthdate"     "shirt_number"  "position"      "nationality"  
    ## [13] "player_id"

### sets

Dataset containing indiviudal set statistics/data

    ## [1] "league_gender" "season_id"     "match_id"      "match"        
    ## [5] "team_id"       "team_name"     "set"           "set_duration" 
    ## [9] "pt_set"

### staff

Dataset containing staff personal information

    ##  [1] "season_id"     "league_gender" "team_id"       "team_name"    
    ##  [5] "lastname"      "firstname"     "gender"        "birthdate"    
    ##  [9] "position"      "nationality"

### team_adresses

Dataset containing home team location data

    ## [1] "season_id"      "league_gender"  "team_id"        "team_name"     
    ## [5] "gym_adress"     "max_spectators" "lon"            "lat"

# 

------------------------------------------------------------------------

## 1.2 Data Source

The data was collected from the official [Bundesliga Volleyball
website](https://www.volleyball-bundesliga.de/). It covers the games
played from the 2013/14 to the 2018/19 season.

Specfically, the in-game match statistics were collected/scraped
directly from official game reports using the
[`tabulizer`](https://cran.r-hub.io/web/packages/tabulizer/vignettes/tabulizer.html)
package:

<details>
<summary>
***Example game report:***
</summary>

![](https://i.imgur.com/g7h7GkX.png)

</details>

------------------------------------------------------------------------

## 1.3 Accessing the data

Accessing the data is quite straightforward, as the datasets are
directly accessible from the `volleystat` package itself. Therefore you
can either access the dataset directly:

``` r
matchstats
```

    ## Google Chrome was not found. Try setting the `CHROMOTE_CHROME` environment variable to the executable of a Chromium-based browser, such as Google Chrome, Chromium or Brave.

![](/assets/images/test2/matchstats%20table-1.png)

Alternatively, you can assign the dataset to your personal global
environment for further analysis.

``` r
vballStats <- matchstats
```

<br> Unfortunately, one limitation of this package is that the data is
scraped directly from the game reports (.pdf), therefore, the package
will only be updated with new data once the package creator manually
scrapes recent games and uploads them.

------------------------------------------------------------------------

## 1.4 Appraisal

As the `volleystat` package contains multiple variables, there are
multiple research questions that can be produced, for example:

<style>
div.blue { background-color:#e6f0ff; border-radius: 3px; padding: 10px;}
</style>

-   *Is there a relationship between longer match/set times and player
    metrics?*
    -   Using player metrics from the *matchstats* dataset and
        `match_duration`/`set_duration` from the *matches*/*sets*
        datasets respectively, we can discover any correlations for
        specific player metrics.
-   *What player metrics best predict match outcome?*
    -   We can create a new variable, match outcome, which can be used
        as a dependent variable in a predictive model using player
        metrics from *matchstats* as our predictor variables.
-   *Does playing at home, time of match and spectator count influence
    match outcome?*
    -   Variables for home or away, match time and spectator count can
        be extracted from the *matches* dataset, which can then be
        compared to a match outcome variable (created via data
        manipulation).

Unfortunately, the `volleystat` package does not include hawkeye data
containing x,y co-ordinates of the ball, nor any LPS/Optical tracking
data for player position on the court.

Not having access to this data makes it difficult/impossible to analyse
parts of the games such as:

-   setter choice/selection
-   spike choice/selection
-   service choice/selection
-   defence formation on attack

<details>
<summary>
***2016 Olympics - Service Placement Visual:***
</summary>

![](https://i.imgur.com/c12Wo0Y.png)

(<https://volleymob.com/fivb-hawk-eye-system-line-challenges-fans-coaches/>)

</details>

------------------------------------------------------------------------

## 1.5 Visualisations

This section will demonstrate what types of visualisations can be
created through manipulation of data obtained from the `volleystat`
package (all visualisations were made with the package `ggplot2`).

To add context, a table of metric definitions has been provided below.

(Please note that you can click on an image/graph to zoom/enlarge it.
Click on the image/graph again to minimize it.)

<details>
<summary>
***R code for graphs:***
</summary>

``` r
# Function for creating multiple ggplots
# Creates a plot based on season, faceted by player metrics
gg_function <- function(team, gender) {
  p <- team_stats_long %>% 
    filter(team_name_abrv == team,
           league_gender.x == gender) %>% 
    ggplot(aes(x = season_id, y = value)) +
  geom_col() +
  facet_wrap(~pt_metrics, scales = 'free_y') +
  geom_line(subset(seas_avg_long, gender == league_gender.x),
            mapping = aes(x = season_id, 
                          y = avg, group = 1, 
                          color = 'blue'), 
            size = 0.8) +
  scale_color_manual(name = 'League Average', values = 'Blue') +
  theme(axis.text.x = element_text(angle = 90),
        panel.background = element_rect(colour = 'black'),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(), 
        legend.position = 'bottom',
        legend.title = element_text(face = 'bold'),
        legend.key = element_rect(fill = 'white',
                                  color = 'black'),
        strip.background = element_rect(colour = 'black',
                                        fill = 'black'),
        strip.text.x = element_text(color = 'white',
                                    face = 'bold')) +
  xlab('Season (Year)') +
  ylab('Frequency') +
  ggtitle(paste(team, '- 13/14 to 18/19 team metric overview'))
  return(p)
}
```

</details>

<br>

### Metric Definitions

<center>
![](https://i.imgur.com/h6JaMqQ.png)
</center>

### Mens League

The team metric overview visualisation below provides an easy way to
interpret how well a teams metrics compare to the season average for a
given year. Depending on domain knowledge, this may provide a quick way
of determining which teams performed well for a season in the
Bundesliga.

#### Berlin Recycling Volleys

![](/assets/images/test2/unnamed-chunk-11-1.png)

#### SWD Powervolleys Dueren

![](/assets/images/test2/unnamed-chunk-12-1.png)

#### TV Rottenburg

![](/assets/images/test2/unnamed-chunk-13-1.png)

#### TSV Herrsching

![](/assets/images/test2/unnamed-chunk-14-1.png)

#### TV Ingersoll Buehl

![](/assets/images/test2/unnamed-chunk-15-1.png)

### Womens League

The team metric overview visualisation below provides an easy way to
interpret how well a teams metrics compare to the season average for a
given year. Depending on domain knowledge, this may provide a quick way
of determining which teams performed well for a season in the
Bundesliga.

#### Allianz MTV Stuttgart

![](/assets/images/test2/unnamed-chunk-16-1.png)

#### Dresdner SC

![](/assets/images/test2/unnamed-chunk-17-1.png)

#### Ladies in Black Aachen

![](/assets/images/test2/unnamed-chunk-18-1.png)

#### Rote Raben Vilsbiburg

![](/assets/images/test2/unnamed-chunk-19-1.png)

#### SC Potsdam

![](/assets/images/test2/unnamed-chunk-20-1.png)

# 

------------------------------------------------------------------------

# 2. Journal Article Appraisal

I’ve chosen to review the article *“Mathematical models to identify
high-performance players for the Brazilian under-19 men’s volleyball
team”* by Pedro Schons, Guilherme Pereira Berriel, Artur Avelino Birk
Preissler, Guilherme Cortoni Caporal, Rochelle Rocha Costa, Luiz Carlos
Rodrigues da Silvac and Luiz Fernando Martins Kruel which was published
in 2022.

Link to this article:
<https://www.tandfonline.com/doi/full/10.1080/02640414.2022.2085439>

## 2.1 Research question/aim

The main aim of this research article was to identify the variables that
contribute to being selected for the under-19 men’s Brazilian volleyball
team. A secondary aim was to create a model that used those variables to
identify players that are classified as ‘high performance’.

Schons et al. \[1\] hypothesised that those with higher measurements in
the training and anthropometric profiles would be selected, and
therefore have a higher level of physical output. They also hypothesised
that spike jump reach would be the main discriminating factor towards
being selected or not.

------------------------------------------------------------------------

## 2.2 Data Overview

Schons et al. \[1\] split their model parameters into 3 different
categories:

Training profile (questionnaire):

<ul>
<li>
How many years have you been playing volleyball?
</li>
<li>
How many times a week are you involved in physical training? (Strength
and conditioning)
</li>
<li>
How many times a week are you involved with technical-tactical
volleyball training?
</li>
</ul>

Anthropometric profile:

<ul>
<li>
Body mass (kg)
</li>
<li>
Height (cm)
</li>
<li>
Arm span (cm)
</li>
<li>
Block standing reach (cm)
</li>
<li>
Spike standing reach (cm)
</li>
</ul>

Physical performance profile:

<ul>
<li>
Change of direction test (s)
</li>
<li>
10m sprint test (s)
</li>
<li>
Block jump reach (cm)
</li>
<li>
Spike jump reach (cm)
</li>
</ul>

Their 1st model included 10 coefficients: playing experience, physical
training per week, body mass, height, arm span, block standing reach,
spike standing reach, change of direction, block jump reach and spike
jump reach

The 2nd model was compromised of playing experience and spike jump
reach.

------------------------------------------------------------------------

## 2.3 Analysis Method

The authors mainly used Fisher’s linear discriminant function analysis,
while using other techniques to check model performance:

<style>
div.blue {background-color:#e6f0ff; border-radius: 3px; padding: 10px;}
</style>

-   *Fisher’s Linear Discriminant Analysis*
    -   Fisher’s linear discriminant analysis is a method of identifying
        patterns and features that characterize or separate different
        groups/classes based on a set of features/variables. For
        instance, different groups in this paper were ‘selected’ and
        ‘non-selected’, while the features are the variables from the
        anthropometric, physical performance and training profiles.
-   *Wilk’s Lambda*
    -   Wilk’s Lambda was used as to measure the variables with the
        greatest discrimination between groups. With Wilk’s Lambda
        ranging from 0 - 1. A Wilk’s Lambda value of 1 indicates no
        discrimination, while a score of 1 indicates total
        discrimination.
-   *One Way ANOVA Test*
    -   The One Way ANOVA Test was used to compare the mean values of
        the independent variables to determine which values were
        ‘significant’. The independent variables found to be significant
        were included in Model 1.
-   *Cohen’s d coefficient*
    -   Cohen’s d was used to measure effect size of the difference
        between the 2 groups (selected and non-selected). The following
        effect sizes were used:
        -   insignificant = \< 0.19
        -   small = 0.20 - 0.49
        -   medium = 0.50 - 0.79
        -   large = 0.80 - 1.29
        -   very large = \> 1.30
-   *p-value*
    -   p-values were used to calculate significance values, with
        ‘significance’ being set at p = \< 0.05

------------------------------------------------------------------------

## 2.4 Overall findings

Overall, the researches found that:

<style>
div.blue {background-color:#e6f0ff; border-radius: 3px; padding: 10px;}
</style>

-   Almost all varaibles from the anthropometric, physical and training
    profiles were found to be significantly different between the
    selected and non-selected groups except sprint time (p = 0.472).
    -   Model 1 correctly classified 82.7% of participants into their
        respective groups
    -   Model 2 correctly classified 78.7% of participants into their
        respective groups
-   Spike jump reach was the variable with the highest correlation that
    discriminated between groups, which was in line with the authors
    hypothesis.
    -   This finding was also supported by research conducted by Tsoukos
        et al. in 2019 and Mostaert et al. in 2020.
    -   Other research did not find any correlation between spike jump
        reach and attack efficiency in game though, leading Schons et
        al. to suggest that spike jump reach is an important variable
        when looking for young talent.

------------------------------------------------------------------------

## 2.5 Critique

Overall, I found that Schons et al.\[1\] did the following well:

<style>
div.blue {background-color:#e6f0ff; border-radius: 3px; padding: 10px;}
</style>

-   Throughout the methods section, each test conducted for the
    anthropometric, physical performance and training profiles were
    thoroughly explained. Describing all equipment used and provided
    step-by-step instructions, allowing for re-creation of testing in
    future research.
    -   The authors recognised that the 10m sprint wasn’t a suitable
        coefficient to be considered for the model as volleyball players
        will rarely sprint for a distance over 10m.
    -   They also recognised that their method of measuring jump height
        (chalk) was obsolete, and could of opted for a much more
        accurate method.
-   They acknowledged that the libero (defensive specialist) position
    has vastly different requirements and characteristics compared to
    the other positions.
    -   Although, the setter also has fairly different requirements
        compared to the attacking rolls on the team, but was included in
        this study. This may be something to consider for future
        research.

On the other hand, I do feel like there were aspects that could be
improved on:

<style>
div.blue {background-color:#e6f0ff; border-radius: 3px; padding: 10px;}
</style>

-   Some of the phrases and grammar throughout quite difficult to
    understand, for example:
    -   *“The good percentages of explanations of the mathematical
        models are confirmed by the high rates of correct answers”*
    -   *“Allow greater game experiences and prepare more the players”*
-   The first mention of the coefficients of the models were described
    in the discussion section. The description of the model coefficients
    also wasn’t clear. I believe a concise sentence detailing the
    coefficients in the model situated in the methods section would
    allow for an easier reading flow.
    -   Table 5. does provide the linear equations for Model 1 and Model
        2, but I feel like it’s shows a bit late in the
-   The statistical analyses section was written with an assumed
    knowledge of statistics, making for a difficult read as there were
    no in-depth descriptions provided. This level of statistical
    analysis may be a bit advanced, without descriptions, for the
    Journal of Sports Science.
-   Some sections of the paper are repeated excessively, specifically
    the classification values that the models explained.

------------------------------------------------------------------------

# 3. References

1.  Schons P, Berriel GP, Preissler AAB, Caporal GC, Costa RR, da Silva
    LCR, et al. Mathematical models to identify high-performance players
    for the Brazilian under-19 men’s volleyball team. Journal of Sports
    Sciences. 2022 Jun.

<strong>Liam Drowley, 2022</strong>. <br> <lkd.latrobe@gmail.com>

------------------------------------------------------------------------

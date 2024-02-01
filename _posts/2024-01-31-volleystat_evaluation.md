---
title: '`volleystat` R Package Review'
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
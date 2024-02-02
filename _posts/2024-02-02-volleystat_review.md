---
title: 'Volleyball R package: `volleystat`'
date: "2024-02-02 20:00:00 +/-1100"
categories: [sport_analytics, volleyball]
output:
  md_document:
    variant: markdown_github
    preserve_yaml: yes
tags: [volleyball]
always_allow_html: true
---

------------------------------------------------------------------------

## Open Source Data: Overview

### Datasets and variables

The `volleystat` package is an open-source statistics repository for the
Men & Female German Bundesliga Volleyball League (1st Division) created
by [Viktor Bozhinov](https://github.com/bozhinvi). The package contain
the following datasets/dataframes, including: *matches, matchstats,
match_addresses, players, sets, staff,* and *team_addresses.*

For example, here are some of the variables included in the *players*
and *sets* dataframes:

<table class="table table-striped table-hover table-condensed" style="color: black; margin-left: auto; margin-right: auto;">
<p>
Player data:
</p>
<thead>
<tr>
<th style="text-align:center;">
season_id
</th>
<th style="text-align:center;">
league_gender
</th>
<th style="text-align:center;">
team_id
</th>
<th style="text-align:center;">
team_name
</th>
<th style="text-align:center;">
lastname
</th>
<th style="text-align:center;">
firstname
</th>
<th style="text-align:center;">
height
</th>
<th style="text-align:center;">
gender
</th>
<th style="text-align:center;">
birthdate
</th>
<th style="text-align:center;">
shirt_number
</th>
<th style="text-align:center;">
position
</th>
<th style="text-align:center;">
nationality
</th>
<th style="text-align:center;">
player_id
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center;">
1617
</td>
<td style="text-align:center;">
Men
</td>
<td style="text-align:center;">
1001
</td>
<td style="text-align:center;">
Solingen Volleys
</td>
<td style="text-align:center;">
Bevers
</td>
<td style="text-align:center;">
Lennart
</td>
<td style="text-align:center;">
179
</td>
<td style="text-align:center;">
male
</td>
<td style="text-align:center;">
1993-07-10
</td>
<td style="text-align:center;">
10
</td>
<td style="text-align:center;">
Libero
</td>
<td style="text-align:center;">
Germany
</td>
<td style="text-align:center;">
10
</td>
</tr>
<tr>
<td style="text-align:center;">
1617
</td>
<td style="text-align:center;">
Men
</td>
<td style="text-align:center;">
1001
</td>
<td style="text-align:center;">
Solingen Volleys
</td>
<td style="text-align:center;">
den Boer
</td>
<td style="text-align:center;">
Huib
</td>
<td style="text-align:center;">
191
</td>
<td style="text-align:center;">
male
</td>
<td style="text-align:center;">
1981-11-11
</td>
<td style="text-align:center;">
2
</td>
<td style="text-align:center;">
Setter
</td>
<td style="text-align:center;">
Netherlands
</td>
<td style="text-align:center;">
2
</td>
</tr>
<tr>
<td style="text-align:center;">
1617
</td>
<td style="text-align:center;">
Men
</td>
<td style="text-align:center;">
1001
</td>
<td style="text-align:center;">
Solingen Volleys
</td>
<td style="text-align:center;">
Gies
</td>
<td style="text-align:center;">
Oliver
</td>
<td style="text-align:center;">
197
</td>
<td style="text-align:center;">
male
</td>
<td style="text-align:center;">
1985-06-28
</td>
<td style="text-align:center;">
3
</td>
<td style="text-align:center;">
Outside spiker
</td>
<td style="text-align:center;">
Germany
</td>
<td style="text-align:center;">
3
</td>
</tr>
<tr>
<td style="text-align:center;">
1617
</td>
<td style="text-align:center;">
Men
</td>
<td style="text-align:center;">
1001
</td>
<td style="text-align:center;">
Solingen Volleys
</td>
<td style="text-align:center;">
Gosmann
</td>
<td style="text-align:center;">
Christian
</td>
<td style="text-align:center;">
191
</td>
<td style="text-align:center;">
male
</td>
<td style="text-align:center;">
1992-07-02
</td>
<td style="text-align:center;">
6
</td>
<td style="text-align:center;">
Universal
</td>
<td style="text-align:center;">
Germany
</td>
<td style="text-align:center;">
6
</td>
</tr>
<tr>
<td style="text-align:center;">
1617
</td>
<td style="text-align:center;">
Men
</td>
<td style="text-align:center;">
1001
</td>
<td style="text-align:center;">
Solingen Volleys
</td>
<td style="text-align:center;">
Horn
</td>
<td style="text-align:center;">
Maximilian
</td>
<td style="text-align:center;">
188
</td>
<td style="text-align:center;">
male
</td>
<td style="text-align:center;">
1996-08-07
</td>
<td style="text-align:center;">
4
</td>
<td style="text-align:center;">
Setter
</td>
<td style="text-align:center;">
Germany
</td>
<td style="text-align:center;">
4
</td>
</tr>
</tbody>
</table>
<table class="table table-striped table-hover table-condensed" style="color: black; margin-left: auto; margin-right: auto;">
<p>
Set data:
</p>
<thead>
<tr>
<th style="text-align:center;">
league_gender
</th>
<th style="text-align:center;">
season_id
</th>
<th style="text-align:center;">
match_id
</th>
<th style="text-align:center;">
match
</th>
<th style="text-align:center;">
team_id
</th>
<th style="text-align:center;">
team_name
</th>
<th style="text-align:center;">
set
</th>
<th style="text-align:center;">
set_duration
</th>
<th style="text-align:center;">
pt_set
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center;">
Women
</td>
<td style="text-align:center;">
1314
</td>
<td style="text-align:center;">
2003
</td>
<td style="text-align:center;">
home
</td>
<td style="text-align:center;">
2001
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
<td style="text-align:center;">
1
</td>
<td style="text-align:center;">
23
</td>
<td style="text-align:center;">
18
</td>
</tr>
<tr>
<td style="text-align:center;">
Women
</td>
<td style="text-align:center;">
1314
</td>
<td style="text-align:center;">
2002
</td>
<td style="text-align:center;">
home
</td>
<td style="text-align:center;">
2002
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
1
</td>
<td style="text-align:center;">
23
</td>
<td style="text-align:center;">
25
</td>
</tr>
<tr>
<td style="text-align:center;">
Women
</td>
<td style="text-align:center;">
1314
</td>
<td style="text-align:center;">
2004
</td>
<td style="text-align:center;">
home
</td>
<td style="text-align:center;">
2008
</td>
<td style="text-align:center;">
USC Münster
</td>
<td style="text-align:center;">
1
</td>
<td style="text-align:center;">
27
</td>
<td style="text-align:center;">
22
</td>
</tr>
<tr>
<td style="text-align:center;">
Women
</td>
<td style="text-align:center;">
1314
</td>
<td style="text-align:center;">
2001
</td>
<td style="text-align:center;">
home
</td>
<td style="text-align:center;">
2005
</td>
<td style="text-align:center;">
Rote Raben Vilsbiburg
</td>
<td style="text-align:center;">
1
</td>
<td style="text-align:center;">
27
</td>
<td style="text-align:center;">
26
</td>
</tr>
<tr>
<td style="text-align:center;">
Women
</td>
<td style="text-align:center;">
1314
</td>
<td style="text-align:center;">
2005
</td>
<td style="text-align:center;">
home
</td>
<td style="text-align:center;">
2009
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
1
</td>
<td style="text-align:center;">
19
</td>
<td style="text-align:center;">
25
</td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

### Data source

The data was collected from the official [Bundesliga Volleyball
website](https://www.volleyball-bundesliga.de/). It covers the games
played from the 2013/14 to the 2018/19 season.  

Specfically, the in-game match statistics were collected/scraped
directly from official game reports using the
[`tabulizer`](https://cran.r-hub.io/web/packages/tabulizer/vignettes/tabulizer.html)
package:

<center>
<details markdown="1">
<summary>
Example game report:
</summary>
![](assets/images/volleyball/volleystat_review/match_report_example.png)
</details>
</center>

------------------------------------------------------------------------

### Accessing the data

Accessing the data is quite straightforward, as the datasets are
directly accessible from the `volleystat` package itself. Therefore you
can either access the dataset directly:

``` r
volleystat::matches
volleystat::matchstats
volleystat::players
# and so on...
```

Unfortunately, one limitation of this package is that the data is
scraped directly from the game reports (.pdf), therefore, the package
will only be updated with new data once the package creator manually
scrapes recent games and uploads them.

------------------------------------------------------------------------

### Possible research questions

As the `volleystat` package contains multiple variables, there are
multiple research questions that can be produced, for example:

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

Unfortunately, the `volleystat` package does not include hawkeye-like
data containing x,y co-ordinates of the ball, nor any LPS/Optical
tracking data for player position on the court.  

Not having access to this data makes it difficult/impossible to analyse
parts of the games such as:

-   setter choice/selection
-   spike choice/selection
-   service choice/selection
-   defence formation on attack

------------------------------------------------------------------------

### Visualisations

This section will demonstrate what types of visualisations can be
created through manipulation of data obtained from the `volleystat`
package (all visualisations were made with the package `ggplot2`). The
code for initial data wrangling performed can be viewed below.

<details markdown="1">
<summary>
Code: initial data wrangling
</summary>

``` r
# Load required libraries
library(volleystat)
library(tidyverse)
library(kableExtra)
library(ggbump)
library(ggsci)

# Join matchstats & team_adresses from volleystat to know which team played which games
match_team_join <- left_join(volleystat::matchstats, 
                             volleystat::team_adresses, 
                             by = c('team_id' = 'team_id', 
                                    'season_id' = 'season_id')
) %>% 
  select(-c(league_gender.y, gym_adress, max_spectators, lon, lat))

# Calculate team statistics for each team grouped by season
team_summary_stats <- match_team_join %>%
  group_by(team_name, season_id, league_gender.x) %>% 
  summarise(pt_total = sum(pt_tot), # not using summarise(across) as I want to rename columns
            serv_total = sum(serv_tot),
            aces = sum(serv_pt),
            serv_error = sum(serv_err),
            rec_total = sum(rec_tot),
            rec_error = sum(rec_err),
            att_total = sum(att_tot),
            att_error = sum(att_err),
            att_block = sum(att_blo),
            att_pt = sum(att_pt),
            block_pt = sum(blo_pt)) %>% 
  mutate(team_name_abrv = abbreviate(team_name), # create abbreviated team_names for data viz
         season_id = case_when(season_id == 1314 ~ '2013/14',
                               season_id == 1415 ~ '2014/15',
                               season_id == 1516 ~ '2015/16',
                               season_id == 1617 ~ '2016/17',
                               season_id == 1718 ~ '2017/18',
                               season_id == 1819 ~ '2018/19'))
```

    ## `summarise()` has grouped output by 'team_name', 'season_id'. You can override
    ## using the `.groups` argument.

``` r
         #season_id = str_replace(season_id, '(\\d)(\\d{2}$)', '\\1/\\2')) # season xxyy to xx/yy

# Convert team_summary_stats to long format for data viz
team_stats_long <- team_summary_stats %>% 
  pivot_longer(cols = pt_total:block_pt,
               names_to = 'pt_metrics')

# Calculating season averages for each metric
season_avg_long <- team_stats_long %>% 
  group_by(season_id, pt_metrics, league_gender.x) %>% 
  summarise(avg = round(mean(value)))
```

    ## `summarise()` has grouped output by 'season_id', 'pt_metrics'. You can override
    ## using the `.groups` argument.

</details>

Additionally to add some context, a table of metric definitions has been
provided below.

<table class="table table-striped table-hover table-condensed" style="color: black; width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Metrics
</th>
<th style="text-align:left;">
Descriptions
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
pt_total
</td>
<td style="text-align:left;">
Total points scored
</td>
</tr>
<tr>
<td style="text-align:left;">
serv_total
</td>
<td style="text-align:left;">
Total number of serves
</td>
</tr>
<tr>
<td style="text-align:left;">
aces
</td>
<td style="text-align:left;">
Total number of service aces
</td>
</tr>
<tr>
<td style="text-align:left;">
serv_error
</td>
<td style="text-align:left;">
Total number of service errors
</td>
</tr>
<tr>
<td style="text-align:left;">
rec_total
</td>
<td style="text-align:left;">
Total number of receptions from serve
</td>
</tr>
<tr>
<td style="text-align:left;">
rec_error
</td>
<td style="text-align:left;">
Total number of receptions errors
</td>
</tr>
<tr>
<td style="text-align:left;">
att_total
</td>
<td style="text-align:left;">
Total number of attacks/spikes
</td>
</tr>
<tr>
<td style="text-align:left;">
att_error
</td>
<td style="text-align:left;">
Total number of attacking errors
</td>
</tr>
<tr>
<td style="text-align:left;">
att_block
</td>
<td style="text-align:left;">
Total number of blocks
</td>
</tr>
<tr>
<td style="text-align:left;">
att_pt
</td>
<td style="text-align:left;">
Total number of successful attacks
</td>
</tr>
<tr>
<td style="text-align:left;">
block_pt
</td>
<td style="text-align:left;">
Total number of successful blocks
</td>
</tr>
</tbody>
</table>

#### Men’s League

Here is a visualisation that looks at the top 3 and bottom 3 performing
teams of the Men’s Bundeliga 18/19 Volleyball Competition.
<details markdown="1">
<summary>
Code: additional data wrangling
</summary>

``` r
top3_bottom3_1819_men <- team_stats_long %>% 
  filter(league_gender.x == 'Men',
         team_name %in% c('Berlin Recycling Volleys',
                          'VfB Friedrichshafen',
                          'Hypo Tirol AlpenVolleys Haching',
                          'VCO Berlin',
                          'TV Rottenburg',
                          'Helios Grizzlys Giesen'),
         season_id =='2018/19') %>% 
  # Add final seed to name for legend
  mutate(team_name = case_when(team_name == 'Berlin Recycling Volleys' ~ 'Berlin Recycling Volleys (1)',
                               team_name == 'VfB Friedrichshafen' ~ 'VfB Friedrichshafen (2)',
                               team_name == 'Hypo Tirol AlpenVolleys Haching' ~ 'Hypo Tirol AlpenVolleys Haching (3)',
                               team_name == 'Helios Grizzlys Giesen' ~ 'Helios Grizzlys Giesen (10)',
                               team_name == 'TV Rottenburg' ~ 'TV Rottenburg (11)',
                               team_name == 'VCO Berlin' ~ 'VCO Berlin (12)'),
         # Re-level for ordering in legend, weird ordering as legend is at the bottom
         team_name = factor(team_name, levels = c('Berlin Recycling Volleys (1)',
                                                  'Helios Grizzlys Giesen (10)',
                                                  'VfB Friedrichshafen (2)',
                                                  'TV Rottenburg (11)',
                                                  'Hypo Tirol AlpenVolleys Haching (3)',
                                                  'VCO Berlin (12)')),
         # Also re-level the abbreviated team names for the x-axis
         team_name_abrv = factor(team_name_abrv, levels = c('BrRV',
                                                            'VfBF',
                                                            'HTAH',
                                                            'HlGG',
                                                            'TVRt',
                                                            'VCOB'))) 
```

</details>
<details markdown="1">
<summary>
Code: data visualisations
</summary>

``` r
ggplot(top3_bottom3_1819_men, aes(x = team_name_abrv, y = value, fill = team_name)) +
  geom_col() +
  facet_wrap(~pt_metrics, scales = 'free_y') +
  geom_hline(data = season_avg_long %>% filter(league_gender.x == 'Men', season_id == '2018/19'),
             aes(yintercept = avg, linetype = 'League Average'), linewidth = 0.7, col = '#54D421') +
  theme_bw() +
  theme(panel.grid.major.x = element_blank(),
        legend.position = 'bottom',
        legend.text = element_text(size = 11),
        legend.title = element_text(size = 13),
        axis.text = element_text(colour = 'black'),
        panel.background = element_rect(fill = '#f1f1f1')) +
  labs(fill = 'Team',
       linetype = '') + # change legend title
  ggtitle('Comparison of top 3 and bottom 3 teams for the 18/19 season, w/ league avg.') +
  ylab('Quantity') +
  xlab('') +
  scale_fill_manual(values = c("#375681", "#db571a", "#4972ab", "#E76E36", "#7092c2", "#EC895B")) +
  scale_linetype_manual(values = 5)
```

![](/assets/images/volleystat_review/unnamed-chunk-8-1.png)
</details>

![](/assets/images/volleystat_review/unnamed-chunk-9-1.png)

> For nearly all of the metrics, the top 3 performing teams were above
> the season average, while the bottom performing teams were for the
> most part under the league average, which is mostly to be expected.
> This visual might also give some insight to coaches on the importance
> of some metrics compared to others. For instance seeing a possible
> correlation between *aces* and *serv_error* where the top 3 teams are
> taking more risks serving, hence the higher *serv_error* rates, but
> also have a higher number of *aces*. This may be something the bottom
> 3 teams could incoroporate into their game to try and be more
> successful.

#### Women’s League

I thought I would change it up for the women’s league and explore the
service metrics across all the seasons.
<details markdown="1">
<summary>
Code: additional data wrangling
</summary>

``` r
serve_metrics_13to19 <- team_stats_long %>% 
  filter(league_gender.x == 'Women',
         pt_metrics %in% c('serv_total', 'aces', 'serv_error'),
         team_name_abrv %in% c('AMTS', # filter to only have teams across all seasons
                               'DrSC',
                               'LiBA',
                               'RtRV',
                               'SCPt',
                               'SSCS',
                               'USCM',
                               'VCWs',
                               'VIIT'))
```

</details>
<details markdown="1">
<summary>
Code: data visualisations
</summary>

``` r
ggplot(serve_metrics_13to19,aes(x = season_id, y = value, col = team_name)) +
  geom_bump(aes(group = team_name), linewidth = 0.7) + # have to add group = team_name when x-axis categorical
  geom_point(size = 1) +
  facet_wrap(~pt_metrics, scales = 'free_y') +
  theme_bw() +
  theme(panel.grid.minor.x = element_blank(),
        legend.position = 'bottom',
        legend.text = element_text(size = 11),
        legend.title = element_text(size = 13),
        axis.text = element_text(colour = 'black'),
        panel.background = element_rect(fill = '#f1f1f1')) +
  labs(col = 'Team') +
  ggtitle('Service metric comparison for Womens Bundesliga from 2013/14 to 2018/19 ') +
  ylab('Quantity') +
  xlab('Season') +
  scale_color_d3()
```

![](/assets/images/volleystat_review/unnamed-chunk-10-1.png)
</details>

![](/assets/images/volleystat_review/unnamed-chunk-11-1.png)

> As for the women’s visualisation, all the teams are quite varied over
> the various seasons, which is somewhat expected as player transfers
> are a thing. To add a little more context I’ve also added a table
> below that shows where each team placed on the final ladder per season
> (only decided to keep teams in this graph in the table, which explains
> the missing values).

<table class="table table-striped table-hover table-condensed" style="color: black; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="empty-cells: hide;border-bottom:hidden;" colspan="1">
</th>
<th style="border-bottom:hidden;padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="6">

Season

</th>
</tr>
<tr>
<th style="text-align:left;">
</th>
<th style="text-align:center;">
2013/14
</th>
<th style="text-align:center;">
2014/15
</th>
<th style="text-align:center;">
2015/16
</th>
<th style="text-align:center;">
2016/17
</th>
<th style="text-align:center;">
2017/18
</th>
<th style="text-align:center;">
2018/19
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
1st
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
</tr>
<tr>
<td style="text-align:left;">
2nd
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
</tr>
<tr>
<td style="text-align:left;">
3rd
</td>
<td style="text-align:center;">
Rote Raben Vilsbiburg
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
<td style="text-align:center;">
Allianz MTV Stuttgart
</td>
<td style="text-align:center;">
Dresdner SC
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
<td style="text-align:center;">
Dresdner SC
</td>
</tr>
<tr>
<td style="text-align:left;">
4th
</td>
<td style="text-align:center;">
Ladies in Black Aachen
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
USC Muenster
</td>
<td style="text-align:center;">
SC Potsdam
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
SC Potsdam
</td>
</tr>
<tr>
<td style="text-align:left;">
5th
</td>
<td style="text-align:center;">
SSC Schwerin
</td>
<td style="text-align:center;">
SC Potsdam
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
VC Wiesbaden
</td>
<td style="text-align:center;">
Ladies in Black Aachen
</td>
<td style="text-align:center;">
Rote Raben Vilsbiburg
</td>
</tr>
<tr>
<td style="text-align:left;">
6th
</td>
<td style="text-align:center;">
SC Potsdam
</td>
<td style="text-align:center;">
Ladies in Black Aachen
</td>
<td style="text-align:center;">
Rote Raben Vilsbiburg
</td>
<td style="text-align:center;">
Rote Raben Vilsbiburg
</td>
<td style="text-align:center;">
USC Muenster
</td>
<td style="text-align:center;">
Ladies in Black Aachen
</td>
</tr>
<tr>
<td style="text-align:left;">
7th
</td>
<td style="text-align:center;">
USC Muenster
</td>
<td style="text-align:center;">
USC Muenster
</td>
<td style="text-align:center;">
SC Potsdam
</td>
<td style="text-align:center;">
USC Muenster
</td>
<td style="text-align:center;">
SC Potsdam
</td>
<td style="text-align:center;">
USC Muenster
</td>
</tr>
<tr>
<td style="text-align:left;">
8th
</td>
<td style="text-align:center;">

-   </td>
    <td style="text-align:center;">
    Rote Raben Vilsbiburg
    </td>
    <td style="text-align:center;">

    -   </td>
        <td style="text-align:center;">
        Ladies in Black Aachen
        </td>
        <td style="text-align:center;">
        Rote Raben Vilsbiburg
        </td>
        <td style="text-align:center;">
        VC Wiesbaden
        </td>
        </tr>
        <tr>
        <td style="text-align:left;">
        9th
        </td>
        <td style="text-align:center;">
        Allianz MTV Stuttgart
        </td>
        <td style="text-align:center;">

        -   </td>
            <td style="text-align:center;">

            -   </td>
                <td style="text-align:center;">

                -   </td>
                    <td style="text-align:center;">

                    -   </td>
                        <td style="text-align:center;">

                        -   </td>
                            </tr>
                            <tr>
                            <td style="text-align:left;">
                            10th
                            </td>
                            <td style="text-align:center;">

                            -   </td>
                                <td style="text-align:center;">

                                -   </td>
                                    <td style="text-align:center;">
                                    Ladies in Black Aachen
                                    </td>
                                    <td style="text-align:center;">

                                    -   </td>
                                        <td style="text-align:center;">

                                        -   </td>
                                            <td style="text-align:center;">

                                            -   </td>
                                                </tr>
                                                <tr>
                                                <td style="text-align:left;">
                                                11th
                                                </td>
                                                <td style="text-align:center;">

                                                -   </td>
                                                    <td style="text-align:center;">

                                                    -   </td>
                                                        <td style="text-align:center;">

                                                        -   </td>
                                                            <td style="text-align:center;">

                                                            -   </td>
                                                                <td style="text-align:center;">

                                                                -   </td>
                                                                    <td style="text-align:center;">

                                                                    -   </td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td style="text-align:left;">
                                                                        12th
                                                                        </td>
                                                                        <td style="text-align:center;">

                                                                        -   </td>
                                                                            <td style="text-align:center;">

                                                                            -   </td>
                                                                                <td style="text-align:center;">

                                                                                -   </td>
                                                                                    <td style="text-align:center;">

                                                                                    -   </td>
                                                                                        <td style="text-align:center;">

                                                                                        -   </td>
                                                                                            <td style="text-align:center;">

                                                                                            -   </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                <td style="text-align:left;">
                                                                                                13th
                                                                                                </td>
                                                                                                <td style="text-align:center;">

                                                                                                -   </td>
                                                                                                    <td style="text-align:center;">

                                                                                                    -   </td>
                                                                                                        <td style="text-align:center;">

                                                                                                        -   </td>
                                                                                                            <td style="text-align:center;">

                                                                                                            -   </td>
                                                                                                                <td style="text-align:center;">

                                                                                                                -   </td>
                                                                                                                    <td style="text-align:center;">

                                                                                                                    -   </td>
                                                                                                                        </tr>
                                                                                                                        </tbody>
                                                                                                                        </table>

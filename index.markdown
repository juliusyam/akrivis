---
layout: default
title: Home
video-file-name: background-video.mp4

# Header Container Short Description
about-brief: The Akrivis team supports educators and administrators by organizing, analyzing, and communicating data through interactive visualizations and in-depth analysis. Akrivis helps clients understand their data and turns insight into action.

service-brief: Akrivis offers a variety of data services to meet your company’s needs.

project-brief: Akrivis collaborates with thought leaders and stakeholders to extract the most out of your data. We look forward to collaborating with you. 

# About Section

# Service Section
service1-title: Exploratory data mining and gathering
service1-des: We will help you discover the characteristics of your data and extract it for you. 

service2-title: Data cleaning and transformation 
service2-des: We will tidy and organize your data so it is structured and ready for analysis.

service3-title: Data visualization and analysis
service3-des: We will visualize your data in interactive and user-friendly dashboards for you to analyze.

service4-title: Statistical modeling and testing
service4-des: We will perform tests on your data to check for correlations and statistical significance. 

service5-title: Data management and warehousing 
service5-des: We will use the most efficient methods to store and manage your data for you.

service6-title: Machine learning for correlation and pattern matching
service6-des: We will run machine learning algorithms to help you predict what your data is telling you. 

# Project Section
project1-title: COVID-19 Return to the Office Analysis
project1-type: Exploratory data mining and gathering
project1-date: Sep 2020

project2-title: Employee Exit Survey Analysis
project2-type: Data Visualization & Analysis
project2-date: Mar 2020
---

<!-- This signifies what layouts are included. DONT TOUCH THIS, I will prepare this. -->
{% include homepage.html %}

<script>
    $(window).ready(function(){
    
        // These are the only two lines need changing. First bracket states where you intend the paragraph to be situated, second bracket states where the paragraph is located at.

        //The . in front correlates to a class="xxx" tag, so just leave it there.
        $('.des-content').empty();
        $('.des-content').load('/paragraphs/about');

    });
</script>

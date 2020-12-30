---
layout: default
title: Home
video-file-name: background-video.mp4

# Header Container Short Description
about-brief: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi ab unde explicabo consequuntur eius, officiis iste amet at.

service-brief: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem magnam commodi blanditiis id omnis officia, ipsum perspiciatis harum, non ratione.

project-brief: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestiae iure, enim minima nesciunt est in rem, maxime autem quo impedit.

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
project1-title: Insert Title Here This is a Splendid Project
project1-type: Data Cleaning & Transformation
project1-date: Dec 2020

project2-title: Insert Title Here Also Decent Project Innit
project2-type: Data Management & Warehousing
project2-date: Sep 2021

project3-title: Analysis of School Performance
project3-type: Data Visualization & Analysis
project3-date: Mar 2020

project4-title: Yolo Am I Right Lorem Ipsum This Already
project4-type: Machine Learning for Correlation & Pattern Matching
project4-date: Nov 2019
---

<!-- This signifies what layouts are included. DONT TOUCH THIS, I will prepare this. -->
{% include homepage.html %}

<script>
    $(window).ready(function(){
    
    // These are the only two lines need changing. First bracket states where you intend the paragraph to be situated, second bracket states where the paragraph is located at.

    //The . in front correlates to a class="xxx" tag, so just leave it there.
    $('.des-content').empty();
    $('.des-content').load('/akrivis/paragraphs/about');

    // $('.des-content').empty();
    // $('.des-content').load('/akrivis/paragraphs/about');

    // $('.des-content').empty();
    // $('.des-content').load('/akrivis/paragraphs/about');
    });
</script>

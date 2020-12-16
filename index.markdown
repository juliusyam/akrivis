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
service1-des: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quia, accusantium laborum est praesentium autem eveniet quam ex eum animi.

service2-title: Data cleaning and transformation 
service2-des: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ad perspiciatis assumenda sint debitis nulla veniam est facilis asperiores.

service3-title: Data visualization and analysis
service3-des: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores velit aliquam doloribus perspiciatis!

service4-title: Statistical modeling and testing
service4-des: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia. Modi, quos velit dolore esse, aperiam repellendus labore ullam debitis molestias.

service5-title: Data management and warehousing 
service5-des: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quae autem accusamus, distinctio illum earum necessitatibus unde assumenda voluptatibus ex pariatur nihil.

service6-title: Machine learning for correlation and pattern matching
service6-des: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum nostrum aperiam doloremque inventore atque quis rerum labore.
---

<!-- This signifies what layouts are included. DONT TOUCH THIS, I will prepare this. -->
{% include homepage.html %}

<script>
    // $(window).ready(function(){
    
    // These are the only two lines need changing. First bracket states where you intend the paragraph to be situated, second bracket states where the paragraph is located at.

    //The . in front correlates to a class="xxx" tag, so just leave it there.
    $('.des-content').empty();
    $('.des-content').load('/akrivis/paragraphs/about');

    // $('.des-content').empty();
    // $('.des-content').load('/akrivis/paragraphs/about');

    // $('.des-content').empty();
    // $('.des-content').load('/akrivis/paragraphs/about');
// });
</script>

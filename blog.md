---
layout: blog
title: "Defcon1Dfw Blog"
---

<div class="blog-card-container">
    <div class="blog-card-container-a">
        {% for post in site.posts limit: 10 %}
        <a class="post-card" href="{{ post.url }}">
            <!-- <div class="post-card-item" > -->
            <div class="post-card-item-img" style="background-image: url({{ site.urlPrefix }}{{ post.imgUrl }})"></div>
            <!-- </div> -->
            <div class="post-card-text">
                <p>{{ post.title }}</p>
                <p class="post-card-date">{{ post.content | strip_html | truncate:150 }}</p>
                <p class="post-card-date">{{ post.date | date: '%-d %B %Y' }}</p>
            </div>
        </a>
        {% endfor %}
    </div>
</div>
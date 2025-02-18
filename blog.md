---
layout: blog
title: "Blog"
---

<div class="blog-card-container" data-nosnippet>
    <div class="blog-card-container-a">
        {% for post in site.posts limit: 10 %}
        <a class="post-card" href="{{ post.url }}">
            <!-- <div class="post-card-item" > -->
            <div class="post-card-item-img-container">
            <div class="post-card-item-img" style="background-image: url({{ site.url }}{{ site.urlPrefix }}{{ post.imgUrl }})"></div>
            </div>
            <!-- </div> -->
            <div class="post-card-text">
                <p>{{ post.title }}</p>
                <p class="post-card-desc">{{ post.content | strip_html | truncate:100 }}</p>
                <p class="post-card-date">{{ post.date | date: '%-d %B %Y' }}</p>
            </div>
        </a>
        {% endfor %}
    </div>
</div>
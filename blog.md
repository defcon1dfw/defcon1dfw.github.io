---
layout: blog
title: "Defcon1Dfw Blog"
---
<div data-nosnippet>
    {% for post in site.posts limit: 10 %}
    <a class="post-card" href="{{ post.url }}">
        <div class="post-card-item">
            <p>{{ post.title }}</p>
            <p class="post-card-date">{{ post.date | date: '%-d %B %Y' }}</p>
        </div>
        <div class="post-card-item" >
            <div class="post-card-item-img" style="background-image: url({{ site.urlPrefix }}{{ post.imgUrl }})"></div>
        </div>
    </a>
    {% endfor %}
</div>

---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
{% include head.html %}
{% terminal %}
$ whoami
DXH30
$ date
{{ site.time | date: '%A %B %H:%M:%S %Z %Y' }}
$ echo "Hello World!"
Hello World!
$ _
{% endterminal %}

# Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
      - <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    </li>
  {% endfor %}
</ul>

{% include disqus.html %}

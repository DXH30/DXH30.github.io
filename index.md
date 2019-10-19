---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
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

# Pages
<table width="100%">
<tr>
 {% for page in site.pages %}
 <td align="center"><a href="{{ page.url }}">{{ page.title }}</a></td>
 {% endfor %}
</tr>
</table>

{% include disqus.html %}

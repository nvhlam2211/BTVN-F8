var posts = [
    {
        title: 'Tiêu đề bài viết 1',
        excerpt : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo, fugit quos vitae assumenda dolores, minus deleniti nesciunt est repudiandae minima odit nihil voluptate modi sapiente recusandae ullam. Totam, illo.',
        picture: 'https://fastly.picsum.photos/id/402/500/300.jpg?hmac=AyMNJkRlmOZBmk24Ly04OtpyM2gtSIvQboytTtaG0kA',
    },
    {
        title: 'Tiêu đề bài viết 2',
        excerpt : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo, fugit quos vitae assumenda dolores, minus deleniti nesciunt est repudiandae minima odit nihil voluptate modi sapiente recusandae ullam. Totam, illo.',
        picture: 'https://fastly.picsum.photos/id/402/500/300.jpg?hmac=AyMNJkRlmOZBmk24Ly04OtpyM2gtSIvQboytTtaG0kA',
    },
    {
        title: 'Tiêu đề bài viết 3',
        excerpt : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo, fugit quos vitae assumenda dolores, minus deleniti nesciunt est repudiandae minima odit nihil voluptate modi sapiente recusandae ullam. Totam, illo.',
        picture: 'https://fastly.picsum.photos/id/402/500/300.jpg?hmac=AyMNJkRlmOZBmk24Ly04OtpyM2gtSIvQboytTtaG0kA',
    },
];
var html = `<div class="posts">
${posts.map(function(post, index){
    return `<div class="post-item ${index % 2 !== 0 ? "post-right" : " "}">
        <img
          src="${post.picture}"
          alt="${post.title}"
        />
        <div>
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
        </div>
      </div>`
})}
</div>`
document.write(html);
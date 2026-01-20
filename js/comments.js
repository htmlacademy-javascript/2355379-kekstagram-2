const COMMENTS_COUNT = 5;

const socialComments = document.querySelector('.social__comments');
// использовать один из комментов как шаблон:
const socialComment = document.querySelector('.social__comment');

const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');

const socialCommentCount = document.querySelector('.social__comment-shown-count');

let totalComments = [];
let count = 0;

// создает комменты
const renderComments = (comments) => {

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentTemplate = socialComment.cloneNode(true);
    const commentAuthor = commentTemplate.querySelector('.social__picture');
    commentAuthor.src = comment.avatar;
    commentAuthor.alt = comment.name;
    //commentTemplate.querySelector('.social__text').textContent = comment.message;

    fragment.appendChild(commentTemplate);
  });
  socialComments.appendChild(fragment);
};

const clearComments = () => {
  socialComments.innerHTML = '';
  socialCommentTotalCount.textContent = '';
};

const initComments = (comments) => {
  count = Math.min(COMMENTS_COUNT, comments.length);
  totalComments = comments;
  socialCommentTotalCount.textContent = comments.length;
  socialCommentCount.textContent = count;
  renderComments(totalComments.slice(0, count));
};

commentsLoader.addEventListener('click', () => {

});

export { renderComments, clearComments, initComments };

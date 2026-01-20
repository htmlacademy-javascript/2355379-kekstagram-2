const socialComments = document.querySelector('.social__comments');
// использовать один из комментов как шаблон:
const socialComment = document.querySelector('.social__comment');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');

// создает комменты
const renderComments = (comments) => {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  socialCommentTotalCount.textContent = comments.length;

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentTemplate = socialComment.cloneNode(true);
    const commentAuthor = commentTemplate.querySelector('.social__picture');
    commentAuthor.src = comment.avatar;
    commentAuthor.alt = comment.name;
    commentTemplate.querySelector('.social__text').textContent = comment.message;

    fragment.appendChild(commentTemplate);
  });
  socialComments.appendChild(fragment);
};

const clearComments = () => {
  socialComments.innerHTML = '';
  socialCommentTotalCount.textContent = '';
};

export { renderComments, clearComments };

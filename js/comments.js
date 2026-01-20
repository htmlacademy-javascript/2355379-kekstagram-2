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
  socialCommentCount.textContent = count;

  if(count >= totalComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const clearComments = () => {
  socialComments.innerHTML = '';
  socialCommentTotalCount.textContent = '';
};

const initComments = (comments) => {
  count = Math.min(COMMENTS_COUNT, comments.length);
  totalComments = comments;
  socialCommentTotalCount.textContent = comments.length;

  renderComments(totalComments.slice(0, count));
};

commentsLoader.addEventListener('click', () => {
  const prevCount = count;
  count = Math.min(count + COMMENTS_COUNT, totalComments.length);
  renderComments(totalComments.slice(prevCount, count));



});

export { renderComments, clearComments, initComments };

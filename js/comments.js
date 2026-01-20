const socialComments = document.querySelector('.social__comments');
// использовать один из комментов как шаблон:
const socialComment = document.querySelector('.social__comment');


// создает комменты
const renderComments = (comments) => {
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
};

export { renderComments, clearComments };

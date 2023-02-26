const copyContent = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    // console.log('Content copied to clipboard');
  } catch (err) {
    // console.error('Failed to copy: ', err);
  }
}

const generateCopyButtons = () => {
  const preCodes = document.querySelectorAll('div.pre-code');
  const codes = document.querySelectorAll('div.code');
  const allCodeBlocks = [...preCodes, ...codes];

  allCodeBlocks.forEach(element => {
    const div = document.createElement('div');
    const icon = document.createElement('i');

    div.classList.add('copy-btn-container');
    icon.classList.add('material-icons', 'copy-btn');
    icon.innerText = 'content_copy';

    div.appendChild(icon);
    element.prepend(div);

    icon.addEventListener('click', async () => {
      const codeContent = element.querySelector('.code-content');
      const content = codeContent.innerText;
      await copyContent(content);
    });
  });
};

(() => {
  generateCopyButtons();
})();
// Kubernetes 生态技术文档库 - 自定义 JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 代码复制按钮反馈
  document.querySelectorAll('.md-clipboard').forEach(function(button) {
    button.addEventListener('click', function() {
      const originalTitle = this.getAttribute('title');
      this.setAttribute('title', '已复制!');
      
      setTimeout(() => {
        this.setAttribute('title', originalTitle);
      }, 2000);
    });
  });

  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 代码块语言标签显示
  document.querySelectorAll('.highlight').forEach(function(block) {
    const code = block.querySelector('pre code');
    if (code && code.className) {
      const lang = code.className.match(/language-(\w+)/);
      if (lang && lang[1]) {
        const label = document.createElement('div');
        label.className = 'highlight-language-label';
        label.textContent = lang[1].toUpperCase();
        block.insertBefore(label, block.firstChild);
      }
    }
  });

  // 外部链接在新标签页打开
  document.querySelectorAll('.md-content a[href^="http"]').forEach(function(link) {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

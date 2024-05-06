function addIcons(rows) {
    rows.forEach(row => {
        if (row.querySelector('.custom-icon-container')) return; // Avoid duplicating icons

        const resourceId = row.getAttribute('data-resource-id');
        const fcContent = row.querySelector('.fc-cell-content');
        if (!fcContent) return;

        const iconContainer = document.createElement('div');
        iconContainer.className = 'custom-icon-container';
        iconContainer.style.display = 'inline-block';
        iconContainer.style.marginRight = '5px';

        const icon = document.createElement('img');
        icon.style.width = "20px";
        icon.style.height = "20px";

        const status = localStorage.getItem(resourceId) || 'neutral';
        icon.src = chrome.runtime.getURL(`images/${status}.png`);
        icon.onclick = function () {
            const currentStatus = localStorage.getItem(resourceId) || 'neutral';
            let newStatus;
            switch (currentStatus) {
                case 'neutral':
                    newStatus = 'like';
                    break;
                case 'like':
                    newStatus = 'star';
                    break;
                case 'star':
                    newStatus = 'dislike';
                    break;
                case 'dislike':
                    newStatus = 'neutral';
                    break;
            }
            localStorage.setItem(resourceId, newStatus);
            icon.src = chrome.runtime.getURL(`images/${newStatus}.png`);
        };

        iconContainer.appendChild(icon);
        fcContent.prepend(iconContainer);
    });
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.matches('tr[data-resource-id]')) {
                    addIcons([node]);
                }
            });
        }
    });
    const existingRows = document.querySelectorAll('tr[data-resource-id]');
    addIcons(existingRows);
});
observer.observe(document.querySelector('body'), {childList: true, subtree: true});

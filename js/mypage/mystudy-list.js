const init = () => {
    const group = document.querySelectorAll('.item');
    group.forEach(ele => ele.addEventListener('click', () => location.href = '../study/study-detail.html'));

    const deleteBtn = document.querySelectorAll('.delete-btn');
    const popup = document.querySelector('.popup');

    deleteBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        popup.classList.add('active');
    }));

    const cancelBtn = document.querySelectorAll('.popup-cancel-btn');

    cancelBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        popup.classList.remove('active');
    }));
}

init();
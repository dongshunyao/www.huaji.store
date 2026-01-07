function setMode(darkMode) {
    document.body.classList.toggle('dark-mode', darkMode);

    document.getElementById('question').classList.toggle('dark-mode-select', darkMode);
    document.getElementById('question').classList.toggle('light-mode-select', !darkMode);

    document.getElementById('button').classList.toggle('dark-mode-button', darkMode);
    document.getElementById('button').classList.toggle('light-mode-button', !darkMode);

    if (darkMode) {
        document.getElementById('modeText').innerHTML='⊙ ω ⊙&nbsp;黑夜&nbsp;⊙ ω ⊙';
    } else {
        document.getElementById('modeText').innerHTML='✪ ω ✪&nbsp;白昼&nbsp;✪ ω ✪';
    }
}

function changeMode() {
    const targetDarkMode = !(localStorage.getItem('darkMode') === 'true');
    localStorage.setItem('darkMode', String(targetDarkMode));

    setMode(targetDarkMode);
}

function changeTitle() {
    const originTitle = document.title;
    let titleTimeout;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = 'QwQ 肿么不看了？';
            clearTimeout(titleTimeout);
        } else {
            document.title = '≧▽≦ 咦！又开始看了！';
            titleTimeout = setTimeout(function () {
                document.title = originTitle;
            }, 3000);
        }
    });
}

function onload() {
    const wasDarkMode = localStorage.getItem('darkMode') === 'true';
    localStorage.setItem('darkMode', String(wasDarkMode));

    setMode(wasDarkMode);
    changeTitle();
}
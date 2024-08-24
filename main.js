function setMode(darkmode) {
    document.body.classList.toggle('dark-mode', darkmode);

    document.getElementById('question').classList.toggle('dark-mode-select', darkmode);
    document.getElementById('question').classList.toggle('light-mode-select', !darkmode);

    document.getElementById('button').classList.toggle('dark-mode-button', darkmode);
    document.getElementById('button').classList.toggle('light-mode-button', !darkmode);

    if (darkmode) {
        document.getElementById('modeText').innerHTML='⊙ ω ⊙&nbsp;黑夜&nbsp;⊙ ω ⊙';
    } else {
        document.getElementById('modeText').innerHTML='✪ ω ✪&nbsp;白昼&nbsp;✪ ω ✪';
    }
}

function changeMode() {
    const targetDarkmode = !(localStorage.getItem('darkmode') === 'true');
    localStorage.setItem('darkmode', targetDarkmode);

    setMode(targetDarkmode);
}

function changeTitle() {
    const originTitle = document.title;
    let titleTime;
    document.addEventListener('visibilitychange', function () {
        $('[rel="shortcut icon"]').attr('href', '/favicon.ico');
        if (document.hidden) {
            document.title = 'QwQ 肿么不看了？';
            clearTimeout(titleTime);
        } else {
            document.title = '≧▽≦ 咦！又开始看了！';
            titleTime = setTimeout(function () {
                document.title = originTitle;
            }, 3000);
        }
    });
}

function onload() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', wasDarkmode);

    setMode(wasDarkmode);
    changeTitle();
}
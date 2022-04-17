function move(session, time) {
    if (session === 0) {
        session = 1;
        let timeBar = document.getElementById('mybar');
        let width = 1;
        let timBarId = setInterval(frame, 10);

        function frame() {
            if (width >= time) {
                clearInterval(id)
                session = 0;
            } else {
                width++;
                timeBar.style.width = width / 100 + '%';
            }
        }
    }
}

export {move}
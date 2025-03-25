document.getElementById('previewBtn').addEventListener('click', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const logo = document.getElementById('logo');
    const vsfront = document.getElementById('vsfront');

    // 画像アニメーション設定
    image1.style.left = '800px';
    image2.style.left = '-300px';

    setTimeout(() => {
        image1.style.left = '50px';
        image2.style.left = '450px';
        vsfront.style.opacity = '1';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }, 500);
});

// 画像アップロード
document.getElementById('upload1').addEventListener('change', event => {
    document.getElementById('image1').src = URL.createObjectURL(event.target.files[0]);
});
document.getElementById('upload2').addEventListener('change', event => {
    document.getElementById('image2').src = URL.createObjectURL(event.target.files[0]);
});

// GIF作成＆ダウンロード
document.getElementById('downloadBtn').addEventListener('click', async () => {
    const gif = new GIF({ workers: 2, quality: 10 });
    const canvas = document.getElementById('captureCanvas');
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 10; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(document.getElementById('animationArea'), 0, 0, canvas.width, canvas.height);
        gif.addFrame(canvas, { delay: 100 });
    }

    gif.on('finished', blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'matchup.gif';
        link.click();
    });

    gif.render();
});

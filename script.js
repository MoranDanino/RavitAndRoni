// // כאשר הסרטון מסתיים, מציגים את התוכן
// document.getElementById('openingVideo').addEventListener('ended', function() {
//     document.getElementById('videoContainer').style.display = 'none';
//     document.getElementById('mainContent').style.display = 'block';
// });
// נסה להפעיל את השיר אוטומטית גם במובייל (רוב הדפדפנים דורשים אינטראקציה ראשונה)
window.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bgMusic');
    if (audio) {
        // נסה לנגן מיד
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(function() {
                // אם נחסם, ננגן אחרי כל קליק ראשון
                document.body.addEventListener('click', function once() {
                    audio.play();
                    document.body.removeEventListener('click', once);
                });
            });
        }
    }
});

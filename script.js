
// window.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById('bgMusic');
//     if (audio) {
//         // נסה לנגן מיד
//         var playPromise = audio.play();
//         if (playPromise !== undefined) {
//             playPromise.catch(function() {
//                 // אם נחסם, ננגן אחרי כל קליק ראשון
//                 document.body.addEventListener('click', function once() {
//                     audio.play();
//                     document.body.removeEventListener('click', once);
//                 });
//             });
//         }
//     }
// });

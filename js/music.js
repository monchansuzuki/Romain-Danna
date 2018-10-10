let para = [

    "He was graduated from the Conservatory Darius Milhaud in Paris, and jazz music school academy EDIM.",
    "He started to learn music when he was 5 years old and never stopped. He has been playing the trumpet guitar piano and keyboard for years.",
    "He is currently working in collaboration with many singers and musicians, recording in studios, performing on stage, and composing soundtrack (TV,Cinema, PV, CM) with Cubase (orchestral composition).",
    "Always listening movie and game soundtracks, he was inspired by some of the greatest names from the movie soundtrack maker: Hans Zimmer, Harry Gregson Williams, John Powell, Alan Silvestri, James Newton Howard ,Trevor Rabin etc."
];

let seeMore = document.getElementById('see-more');
seeMore.addEventListener('click',function (ev) {
    ev.target.style.display = 'none';
    para.forEach( function (p , index) {
        let para = document.createElement('p');
        para.textContent = p;
        para.id = 'para'+index
        para.classList.add('about')
        document.getElementById('music-content').appendChild(para);
    });

})



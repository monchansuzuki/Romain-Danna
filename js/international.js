function onClick(e) {
    if (e.target.innerHTML === '<img src="img/japan.png">日本語'){
        e.target.innerHTML = '<img src="img/uk.png">English'
        isEn = true;
    }
    else {
        e.target.innerHTML = '<img src="img/japan.png">日本語';
        isEn = false;
    }
    console.log('click '+ e.target.innerHTML+ 'vav isEn = '+isEn);
    if (isEn === true) {
        aboutTextJp.forEach( function (p, index) {
            console.log(p)

            document.getElementById('para'+index).textContent = p;
        })
    }
    else if (isEn === false) {
        aboutTextEn.forEach(function (p, index) {
            console.log(p)

            document.getElementById('para'+index).textContent = p;
        })
    }

}

let aboutTextJp = [
    "Romainはフランス人のモデル/俳優/ミュージシャン、エンジニアです。彼は日本のTVCM、カタログ、映画への出演をしていることで知られています。また、音楽家、作曲家としても知られています。彼のポートフォリオと撮影作品は、印刷物、プロモーション作品、雑誌の出版物、eコマースモデリング、ミュージックビデオ、コマーシャルなどです。",
    "パリで生まれ、2012年にPolytech\'GroupからThermal＆Energyエンジニアとして卒業しました。 2015年26歳の時に日本に移住し、東京でモデル・俳優を始めました。彼は現在、主に日本、韓国、フランスで活動をし、コンサートでピアノ演奏もしています。",
    "彼は多くの有名な企業と仕事をしました: 資生堂、Revlon、ラコステ、ユニクロ、Microsoft、ゴディバ、ニベア、パナソニック、Sony、Nintendo、日立、ヤマハ、イオン、アニヴェルセル、ホンダ、スズキ、オラクル、日本のテレビ番組、邦画、サファリカタログ、クラウディア、Zexy、NTTドコモ、Burger King、キヤノンなど。 Instagramのアカウントを開設し、仕事、ライフスタイル、旅行、音楽を記録し共有しています。",
    "ピアノの演奏以外に、ボクシングジムでのトレーニング、山登り、映画鑑賞、家族や友人との時間を過ごしています。"
    ];

let aboutTextEn = [
    "Romain is a French model/actor/musician and engineer. He is known for his appearance in Japanese TVCM, catalogs and movies. He is also known for being a musician and composer. His portfolio and work ranges from print work, promotional work, magazine publications, ecommerce modeling, music videos, commercials, and more.",
    "Born in Paris he was graduated as Thermal&Energy engineer in 2012 from the Polytech’Group. He moved in Japan in 2015 and started his modeling/acting career at the age of 26 in Tokyo. He is currently and mainly working in Japan, Korea and France where he also playing piano in concert.",
    "He has worked with companies such as Shiseido, Revlon, Lacoste, Uniqlo, Microsoft, Godiva, Nivea, Panasonic, Sony, Nintendo, Hitachi, Yamaha, Aeon, Anniversaire wedding, Honda, Suzuki, Oracle, Japanese TV, Japanese Cinema, Safari catalog, Kuraudia wedding, Zexy catalog, NTT docomo, Burger King, Canon, and more. He has started an Instagram account to document and share his work, style, travel, and music.",
    "When he is not playing the piano, he is either training at the boxing gym, mountain hiking, at the cinema or spending time with his family and friends."
];


let isEn = false;
let anchorLangue = document.getElementById('lang-a');

anchorLangue.addEventListener("click",onClick);



    aboutTextEn.forEach( function (p , index) {
        let para = document.createElement("p");
        para.className = "about";
        para.id = 'para'+index;

        console.log(p)
        para.textContent = p;
        document.getElementById("content").appendChild(para);
    });




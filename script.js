let wordsLi = ["ADEPT"," ARTICULATE", " CANDOR"," CONDUCIVE",  "DEFERENCE", "EGREGIOUS", "ENTAIL",  "FACILITATE", "GIST", "KNACK", "NOVEL", "OBSOLETE", "PARAMOUNT", "REINFORCE", "TREMENDOUS"];

let meaningLi = ["Very skilled or expert.", 
            "Refers to a person who can speak clearly and effectively.",
            "Honesty, being truthful and sincere.",
            "To help make an outcome possible.",
            "Respectful submission to or courteous regard for another person.",
            "Extremely bad, horrifying or appalling.",
            "Involve something necessary or require.",
            "To make something easier.",
            "The essential meaning of speech or text.",
            "A special skill an individual possesses that is difficult to teach.",
            "New and innovative.",
            "Something that is no longer produced or used.",
            "More important than anything else or chief in importance.",
            "To strengthen and add support."
        ];

const word = document.getElementById("rndWord");
const meaning = document.getElementById("wrdMeaning");
const button = document.getElementById("genBtn");
const holder = document.getElementsByClassName("wall-holder");
const downloadBtn = document.getElementById("download");

//Function to Select a new Word from the array of words randomly using Math.random
const randomWordGenerator = () => {
    let randomNumber = Math.floor((Math.random() * wordsLi.length));
    word.innerHTML = wordsLi[randomNumber];
    meaning.innerHTML = meaningLi[randomNumber];
}

//Function to download the word and its meaning as a Image file

download.addEventListener('click', ()=>{
    domtoimage.toJpeg(holder).then((data)=>{
        var link = document.createElement("a");
        link.download = "WaLLit Wallpaper.jpeg";
        link.href= data;
        link.click();
    })
})






const animeCharacters = [
    {
        id: 1,
        name: "Naruto Uzumaki",
        birthday: "October 10",
        zodiac_sign: "Libra",
        anime: "Naruto",
        likes: ["Ramen", "Training", "Making Friends"],
        dislikes: ["Vegetables", "Giving Up"],
        image_url: "https://static.wikia.nocookie.net/boruto/images/9/9d/375px-NarutoBorutoMovie.jpg/revision/latest?cb=20200121144920",
        wiki_page_url: "https://naruto.fandom.com/wiki/Naruto_Uzumaki"
    },
    {
        id: 2,
        name: "Eren Yeager",
        birthday: "March 30",
        zodiac_sign: "Aries",
        anime: "Attack on Titan",
        likes: ["Freedom", "avenging his mother"],
        dislikes: ["Titans", "oppression", "being powerless"],
        image_url: "image_url_herehttps://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20220123225500",
        wiki_page_url: "https://attackontitan.fandom.com/wiki/Eren_Yeager"
    },
    {
        id: 3,
        name: "Monkey D. Luffy",
        birthday: "May 5",
        zodiac_sign: "Taurus",
        anime: "One Piece",
        likes: ["Meat", "Adventure", "Becoming Pirate King"],
        dislikes: ["Negativity", "Being Betrayed"],
        image_url: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/239?cb=20200429191518",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
    },
    {
        id: 4,
        name: "Leorio Paradinight",
        birthday: "March 3",
        zodiac_sign: "Pisces",
        anime: "Hunter X Hunter",
        likes: ["Helping people", "medicine", "money"],
        dislikes: ["Being looked down upon", "losing a friend"],
        image_url: "https://static.wikia.nocookie.net/hunterxhunter/images/7/73/HxH2011_EP145_Leorio_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20220625011601",
        wiki_page_url: "https://hunterxhunter.fandom.com/wiki/Leorio_Paradinight"
    },
    {
        id: 5,
        name: "Spike Spiegel",
        birthday: "June 26",
        zodiac_sign: "Cancer",
        anime: "Cowboy Bebop",
        likes: ["Bell peppers and beef", "jazz music", "martial arts"],
        dislikes: ["Taking life seriously", "bureaucracy"],
        image_url: "https://static.wikia.nocookie.net/cowboybebop/images/7/73/Screen_Shot_2013-12-11_at_12.52.29_PM.png/revision/latest?cb=20140404054920",
        wiki_page_url: "https://cowboybebop.fandom.com/wiki/Spike_Spiegel"
    },
    {
        id: 6,
        name: "Levi Ackerman",
        birthday: "December 25",
        zodiac_sign: "Capricorn",
        anime: "Attack on Titan",
        likes: ["Cleanliness", "tea", "his squad"],
        dislikes: ["Dirt", "disorder", "Titans"],
        image_url: "https://static.wikia.nocookie.net/shingekinokyojin/images/f/f0/Levi_Ackermann_%28Anime%29_character_image_%28850%29.png/revision/latest?cb=20210124214225",
        wiki_page_url: "https://attackontitan.fandom.com/wiki/Levi_Ackermann_(Anime)"
    },
    {
        id: 7,
        name: "Keishin Ukai",
        birthday: "July 28",
        zodiac_sign: "Leo",
        anime: "Haikyuu!!",
        likes: ["Coaching", "his team", "training", "smoking"],
        dislikes: ["Loud noises during matches", "unfair play"],
        image_url: "https://static.wikia.nocookie.net/haikyuu/images/9/9d/Ukai_s4-e7-1.png/revision/latest/scale-to-width-down/1000?cb=20200604102109",
        wiki_page_url: "https://haikyuu.fandom.com/wiki/Keishin_Ukai"
    },
    {
        id: 8,
        name: "Jotaro Kujo",
        birthday: "1970",
        zodiac_sign: "Aquarius",
        anime: "JoJo's Bizarre Adventure",
        likes: ["His hat", "his Stand: Star Platinum", "his friends"],
        dislikes: ["DIO", "injustice", "his father's absence"],
        image_url: "https://static.wikia.nocookie.net/jjba/images/9/99/KujoAnime.png/revision/latest?cb=20161029182608",
        wiki_page_url: "https://jojo.fandom.com/wiki/Jotaro_Kujo"
    },
    {
        id: 9,
        name: "Hisoka Marow",
        birthday: "June 6",
        zodiac_sign: "Gemini",
        anime: "Hunter x Hunter",
        likes: ["Strong opponents", "excitement", "children"],
        dislikes: ["Weak opponents", "boredom"],
        image_url: "https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039",
        wiki_page_url: "https://hunterxhunter.fandom.com/wiki/Hisoka_Morow"
    },
    {
        id: 10,
        name: "Kakashi Hatake",
        birthday: "September 15",
        zodiac_sign: "Virgo",
        anime: "Naruto",
        likes: ["Reading", "his ninja dogs", "teaching"],
        dislikes: ["Laziness", "breaking rules"],
        image_url: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/1000?cb=20170628120149",
        wiki_page_url: "https://naruto.fandom.com/wiki/Kakashi_Hatake"
    },
    {
        id: 11,
        name: "Satoru Gojo",
        birthday: "December 7",
        zodiac_sign: "Sagittarius",
        anime: "Jujutsu Kaisen",
        likes: ["Jujutsu", "sweets", "teasing his students"],
        dislikes: ["Curses", "unnecessary rules"],
        image_url: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20210226205256",
        wiki_page_url: "https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo"
    },
    {
        id: 12,
        name: "Roronoa Zoro",
        birthday: "November 11",
        zodiac_sign: "Scorpio",
        anime: "One Piece",
        likes: ["Napping", "katanas", "becoming the world's greatest swordsman"],
        dislikes: ["Directions", "debt"],
        image_url: "https://www.animeexplained.com/wp-content/uploads/2023/01/one-piece-zoro-1278854-1280x0-1.jpeg",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
    }
]

module.exports = animeCharacters;
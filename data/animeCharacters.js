const animeCharacters = [
    {
        id: 1,
        name: "Maximillion Pegasus",
        birthday: "October 8",
        gender: "Male",
        month: 10,
        day: 8,
        zodiac_sign: "Libra",
        anime: "Yu-Gi-Oh!",
        likes: ["Wine", "Gorgonzola cheese", "cartoons", "cards"],
        dislikes: ["Cuttlefish", "Squid"],
        image_url: "https://u.cubeupload.com/User713646/111Screenshot20230803at.png",
        wiki_page_url: "https://yugioh.fandom.com/wiki/Maximillion_Pegasus"
    },
    {
        id: 2,
        name: "Eren Yeager",
        birthday: "March 30",
        gender: "Male",
        month: 3,
        day: 30,
        zodiac_sign: "Aries",
        anime: "Attack on Titan",
        likes: ["Freedom", "avenging his mother"],
        dislikes: ["Titans", "oppression", "being powerless"],
        image_url: "https://u.cubeupload.com/User713646/d62Screenshot20230803at.png",
        wiki_page_url: "https://attackontitan.fandom.com/wiki/Eren_Yeager"
    },
    {
        id: 3,
        name: "Monkey D. Luffy",
        birthday: "May 5",
        gender: "Male",
        month: 5,
        day: 5,
        zodiac_sign: "Taurus",
        anime: "One Piece",
        likes: ["Meat", "Adventure", "Becoming Pirate King"],
        dislikes: ["Negativity", "Being Betrayed"],
        image_url: "https://u.cubeupload.com/User713646/Screenshot20230803at.png",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
    },
    {
        id: 4,
        name: "Leorio Paradinight",
        birthday: "March 3",
        gender: "Male",
        month: 3,
        day: 3,
        zodiac_sign: "Pisces",
        anime: "Hunter X Hunter",
        likes: ["Helping people", "medicine", "money"],
        dislikes: ["Being looked down upon", "losing a friend"],
        image_url: "https://u.cubeupload.com/User713646/f95Screenshot20230803at.png",
        wiki_page_url: "https://hunterxhunter.fandom.com/wiki/Leorio_Paradinight"
    },
    {
        id: 5,
        name: "Spike Spiegel",
        birthday: "June 26",
        gender: "Male",
        month: 6,
        day: 26,
        zodiac_sign: "Cancer",
        anime: "Cowboy Bebop",
        likes: ["Bell peppers and beef", "jazz music", "martial arts"],
        dislikes: ["Taking life seriously", "bureaucracy"],
        image_url: "https://u.cubeupload.com/User713646/889Screenshot20230803at.png",
        wiki_page_url: "https://cowboybebop.fandom.com/wiki/Spike_Spiegel"
    },
    {
        id: 6,
        name: "Levi Ackerman",
        birthday: "December 25",
        gender: "Male",
        month: 12,
        day: 25,
        zodiac_sign: "Capricorn",
        anime: "Attack on Titan",
        likes: ["Cleanliness", "tea", "his squad"],
        dislikes: ["Dirt", "disorder", "Titans"],
        image_url: "https://u.cubeupload.com/User713646/efcScreenshot20230731at.png",
        wiki_page_url: "https://attackontitan.fandom.com/wiki/Levi_Ackermann_(Anime)"
    },
    {
        id: 7,
        name: "Tuxedo Mask",
        birthday: "August 3",
        gender: "Male",
        month: 8,
        day: 3,
        zodiac_sign: "Leo",
        anime: "Sailor Moon",
        likes: ["Track and field", "ventriloquism"],
        dislikes: ["needles", "Sailor Moon in danger"],
        image_url: "https://u.cubeupload.com/User713646/2b9Screenshot20230803at.png",
        wiki_page_url: "https://sailormoon.fandom.com/wiki/Mamoru_Chiba_/_Tuxedo_Mask_(anime)"
    },
    {
        id: 8,
        name: "Jotaro Kujo",
        birthday: "February 3",
        gender: "Male",
        month: 2,
        day: 3,
        zodiac_sign: "Aquarius",
        anime: "JoJo's Bizarre Adventure",
        likes: ["His hat", "his Stand: Star Platinum", "his friends"],
        dislikes: ["DIO", "injustice", "his father's absence"],
        image_url: "https://u.cubeupload.com/User713646/526Screenshot20230803at.png",
        wiki_page_url: "https://jojo.fandom.com/wiki/Jotaro_Kujo"
    },
    {
        id: 9,
        name: "Hisoka Marow",
        birthday: "June 6",
        gender: "Male",
        month: 6,
        day: 6,
        zodiac_sign: "Gemini",
        anime: "Hunter x Hunter",
        likes: ["Strong opponents", "excitement", "children"],
        dislikes: ["Weak opponents", "boredom"],
        image_url: "https://u.cubeupload.com/User713646/a0fScreenshot20230731at.png",
        wiki_page_url: "https://hunterxhunter.fandom.com/wiki/Hisoka_Morow"
    },
    {
        id: 10,
        name: "Kakashi Hatake",
        birthday: "September 15",
        gender: "Male",
        month: 9,
        day: 15,
        zodiac_sign: "Virgo",
        anime: "Naruto",
        likes: ["Reading", "his ninja dogs", "teaching"],
        dislikes: ["Laziness", "breaking rules"],
        image_url: "https://u.cubeupload.com/User713646/329Screenshot20230731at.png",
        wiki_page_url: "https://naruto.fandom.com/wiki/Kakashi_Hatake"
    },
    {
        id: 11,
        name: "Satoru Gojo",
        birthday: "December 7",
        gender: "Male",
        month: 12,
        day: 7,
        zodiac_sign: "Sagittarius",
        anime: "Jujutsu Kaisen",
        likes: ["Jujutsu", "sweets", "teasing his students"],
        dislikes: ["Curses", "unnecessary rules"],
        image_url: "https://u.cubeupload.com/User713646/312Screenshot20230731at.png",
        wiki_page_url: "https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo"
    },
    {
        id: 12,
        name: "Roronoa Zoro",
        birthday: "November 11",
        gender: "Male",
        month: 11,
        day: 11,
        zodiac_sign: "Scorpio",
        anime: "One Piece",
        likes: ["Napping", "katanas", "becoming the world's greatest swordsman"],
        dislikes: ["Directions", "debt"],
        image_url: "https://u.cubeupload.com/User713646/985Screenshot20230803at.png",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
    },
    {
        id: 13,
        name: "Faye Valentine",
        birthday: "August 14",
        gender: "Female",
        month: 8,
        day: 14,
        zodiac_sign: "Leo",
        anime: "Cowboy Bebop",
        likes: ["Gambling", "music", "teasing Spike"],
        dislikes: ["Her past", "being controlled"],
        image_url: "https://u.cubeupload.com/User713646/becScreenshot20230804at.png",
        wiki_page_url: "https://cowboybebop.fandom.com/wiki/Faye_Valentine"
    },
    {
        id: 14,
        name: "Nami",
        birthday: "July 3",
        gender: "Female",
        month: 7,
        day: 3,
        zodiac_sign: "Cancer",
        anime: "One Piece",
        likes: ["Tangerines", "drawing maps", "her friends", "money"],
        dislikes: ["Being in debt", "bad weather at sea"],
        image_url: "https://u.cubeupload.com/User713646/9a8Screenshot20230804at.png",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Nami"
    },
    {
        id: 15,
        name: "Nico Robin",
        birthday: "February 6",
        gender: "Female",
        month: 2,
        day: 6,
        zodiac_sign: "Aquarius",
        anime: "One Piece",
        likes: ["Reading", "archeology", "Straw Hat crew"],
        dislikes: ["Poneglyph destruction", "mistreatment of history"],
        image_url: "https://u.cubeupload.com/User713646/6edScreenshot20230804at.png",
        wiki_page_url: "https://onepiece.fandom.com/wiki/Nico_Robin"
    },
    {
        id: 16,
        name: "Makima",
        birthday: "November 1",
        gender: "Female",
        month: 11,
        day: 1,
        zodiac_sign: "Scorpio",
        anime: "Chainsaw Man",
        likes: ["Control", "power", "loyalty"],
        dislikes: ["Resistance", "betrayal"],
        image_url: "https://u.cubeupload.com/User713646/d0cScreenshot20230804at.png",
        wiki_page_url: "https://chainsaw-man.fandom.com/wiki/Makima"
    },
    {
        id: 17,
        name: "Shinobu Kocho",
        birthday: "March 1",
        gender: "Female",
        month: 3,
        day: 1,
        zodiac_sign: "Pisces",
        anime: "Demon Slayer",
        likes: ["Sweets", "her sister, Kanao", "justice"],
        dislikes: ["demons", "cruelty"],
        image_url: "https://u.cubeupload.com/User713646/1b6Screenshot20230804at.png",
        wiki_page_url: "https://kimetsu-no-yaiba.fandom.com/wiki/Shinobu_Kocho"
    },
    {
        id: 18,
        name: "Charmy Pappitson",
        birthday: "May 2",
        gender: "Female",
        month: 5,
        day: 2,
        zodiac_sign: "Gemini",
        anime: "Black Clover",
        likes: ["Food", "cooking", "her Sheep-castle"],
        dislikes: ["Not getting enough food", "people rejecting her cooking"],
        image_url: "https://u.cubeupload.com/User713646/af0Screenshot20230804at.png",
        wiki_page_url: "https://blackclover.fandom.com/wiki/Charmy_Pappitson"
    },
    {
        id: 19,
        name: "Narumi Momose",
        birthday: "May 5",
        gender: "Female",
        month: 5,
        day: 5,
        zodiac_sign: "Taurus",
        anime: "Wotakoi: Love is Hard for Otaku",
        likes: ["Manga", "video games", "her friends"],
        dislikes: ["Being single", "misunderstandings"],
        image_url: "https://u.cubeupload.com/User713646/82cScreenshot20230804at.png",
        wiki_page_url: "https://wotaku-ni-koi-wa-muzukashii.fandom.com/wiki/Narumi_Momose"
    },
    {
        id: 20,
        name: "Isabella",
        birthday: "September 28",
        gender: "Female",
        month: 9,
        day: 28,
        zodiac_sign: "Virgo",
        anime: "The Promised Neverland",
        likes: ["Music", "playing the piano", "her family"],
        dislikes: ["demons", "disobedience"],
        image_url: "https://u.cubeupload.com/User713646/Screenshot20230804at.png",
        wiki_page_url: "https://yakusokunoneverland.fandom.com/wiki/Isabella"
    },
    {
        id: 21,
        name: "Hinata Hyūga",
        birthday: "December 27",
        gender: "Female",
        month: 12,
        day: 27,
        zodiac_sign: "Capricorn",
        anime: "Naruto",
        likes: ["Naruto Uzumaki", "training", "her teammates"],
        dislikes: ["Losing", "giving up"],
        image_url: "https://u.cubeupload.com/User713646/58cScreenshot20230804at.png",
        wiki_page_url: "https://naruto.fandom.com/wiki/Hinata_Hy%C5%ABga#New_Era"
    },
    {
        id: 22,
        name: "Rize Kamishiro",
        birthday: "October 20",
        gender: "Female",
        month: 10,
        day: 20,
        zodiac_sign: "Libra",
        anime: "Tokyo Ghoul",
        likes: ["coffee", "playing mind games"],
        dislikes: ["Weak prey", "boredom"],
        image_url: "https://u.cubeupload.com/User713646/254Screenshot20230804at.png",
        wiki_page_url: "https://tokyoghoul.fandom.com/wiki/Rize_Kamishiro#Anime"
    },
    {
        id: 23,
        name: "Mashiro Kuna",
        birthday: "April 1",
        gender: "Female",
        month: 4,
        day: 1,
        zodiac_sign: "Aries",
        anime: "Bleach",
        likes: ["Hollowfication", "her headband"],
        dislikes: ["Captains' Meetings", "not getting her way"],
        image_url: "https://u.cubeupload.com/User713646/922Screenshot20230804at.png",
        wiki_page_url: "https://bleach.fandom.com/wiki/Mashiro_Kuna"
    },
    {
        id: 24,
        name: "Petra Ral",
        birthday: "December 6",
        gender: "Female",
        month: 12,
        day: 25,
        zodiac_sign: "Sagittarius",
        anime: "Attack on Titan",
        likes: ["the survey corps", "Levi Ackerman", "cleaning"],
        dislikes: ["Danger", "Titan encounters"],
        image_url: "https://u.cubeupload.com/User713646/501Screenshot20230804at.png",
        wiki_page_url: "https://attackontitan.fandom.com/wiki/Petra_Ral"
    }
]

module.exports = animeCharacters;
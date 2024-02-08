const hadiths = {
    english: [
        "The best of you are those who are best to their families.",
        "Seek knowledge from the cradle to the grave.",
        "Kindness is a mark of faith, and whoever is not kind has no faith.",
        "There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).",
        "A man came to the Messenger of Allah (ﷺ) and said, O Messenger of Allah! Who among the people has the most right to my good company? He replied, Your mother. The man said, Then who? He replied, Your mother. The man said, Then who? He replied, Your mother. The man said, Then who? He replied, Then your father.",
        "Beware of suspicion for it is the most untruthful type of speech.",
        "A slave [of Allah] may utter a word without giving it much thought by which he slips into the fire a distance further than that between east and west.",
        "Allah becomes jealous [of His honor] and that is when the believer does something He has forbidden.",
        "Whoever stands [for night prayer] in Ramadan out of faith and hope for reward will be forgiven his past sins.",
        "One Umrah to the next is an expiation for whatever happened between them and the only reward for an accepted Hajj is paradise.",
        
        // Add more English Hadiths as needed
    ],
    urdu: [
        "تم میں بہترین وہ ہیں جو اپنے خاندان کے لئے بہترین ہیں۔",
        "گھڑے سے لے کر قبر تک علم حاصل کرو۔",
        "مہربانی ایمان کی نشانی ہے، اور جو کوئی مہربان نہیں ہے، اس کا ایمان نہیں ہے۔",
        // Add more Urdu Hadiths as needed
    ],
    arabic: [
        "خيركم خيركم لأهله.",
        "طلب العلم فريضة على كل مسلم.",
        "الرفق مربع من الميزان، ومن لا يرفق لا ينجح.",
        // Add more Arabic Hadiths as needed
    ],
};

let currentLanguage = "english";

function generateHadith() {
    const hadithContainer = document.getElementById("hadith-text");

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * hadiths[currentLanguage].length);

    // Display the random Hadith
    hadithContainer.textContent = hadiths[currentLanguage][randomIndex];
}

function changeLanguage(language) {
    debugger;
    currentLanguage = language;
    generateHadith();
}

// Initial Hadith display on page load
generateHadith();

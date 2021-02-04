export const slugify = (string) => {
    // Replace all special characters
    var map = {
        '-': /(\/|\\|\||\!|\?|\.|\,|\<|\>|\:|\_|\'|\")/,
        'a': 'á|à|ã|â|À|Á|Ã|Â',
        'e': 'é|è|ê|É|È|Ê',
        'i': 'í|ì|î|Í|Ì|Î',
        'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ',
        'ss': 'ß',
        // Emoji
        '': '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*'
    };

    for (var pattern in map) {
        string = string.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    // snake-case
    // Replace all spaces, consecutive dashes, and convert all uppercase to lowercase
    return encodeURIComponent(string.replace(/(\s-\s)/g, '-').replace(/\s/g, '-').replace(/-{2,}/g).toLowerCase())
};
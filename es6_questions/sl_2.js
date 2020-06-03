function palindrome(string) {
    string = string.replace(/\s+/g, '');
    let strLength = string.length;
    let halfStr = Math.floor(strLength/2);

    for (let i = 0; i < halfStr; i++) {
        if (string[i] !== string[strLength - 1 - i]) {
            return false;
        }
    }

    return true;
}
function hey(message) {

    if (message.endsWith("?")) {
        if (message === message.toUpperCase()) {
            return "Calm down, I know what I'm doing!"
        }
        return "Sure.";
    } else if (message === message.toUpperCase()) {
        return 'Whoa, chill out!';
    } else {
        return "Whatever.";
    }
    return;
}

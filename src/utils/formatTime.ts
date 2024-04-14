const formatTime = (time: Date): string => {
    const timeDiff = Date.now() - time.getTime();
    const differenceInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (differenceInDays >= 1) {
        return differenceInDays + "d";
    }
    const differenceInHours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (differenceInHours >= 1) {
        return differenceInHours + "h";
    }
    const differenceInMinutes = Math.floor(timeDiff / (1000 * 60));
    return differenceInMinutes + "m";
}

export { formatTime };
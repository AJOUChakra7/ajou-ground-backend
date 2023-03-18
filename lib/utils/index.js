const utcToKst = (utcDate) => {
    const date = new Date(utcDate);

    const utcHours = date.getUTCHours();
    const utcMinutes = date.getUTCMinutes();

    const kstHours = utcHours + 9;
    const kstMinutes = utcMinutes + 0;

    const kstDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), kstHours, kstMinutes));

    return kstDate.toUTCString();
}

module.exports = {
    ApiError: require('./ApiError'),
    catchAsync: require('./catchAsync'),
    utcToKst
}
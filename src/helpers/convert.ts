export const convertDuration = (duration: string) => {
    let convert = (parseFloat(duration) / 60).toFixed(2);
    return convert;
}

export default function separateThousand(num: number | string) {
    let numStr = String(num);
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(numStr)) numStr = numStr.replace(pattern, '$1 $2');
    return numStr;
}

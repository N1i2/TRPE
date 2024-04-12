//55555555555555555555555555555555555555
async function five() {
    let res = await new Promise(res => res(21))
    console.log(res);
    res = res * 2;
    console.log(res);
}

five();
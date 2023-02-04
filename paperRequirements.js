function paperRequirements(firstBook, secondBook, thirdBook){
    let firstBookPageNeed = 100;
    let secondBookPageNeed = 200;
    let thirdBookPageNeed = 300;

    let totalFirstBookPage = firstBookPageNeed * firstBook;
    let totalSecondBookPage = secondBookPageNeed * secondBook;
    let totalThirdBookPage = thirdBookPageNeed * thirdBook;

    let totalPageNeed = totalFirstBookPage + totalSecondBookPage + totalThirdBookPage;

    return totalPageNeed;

}

console.log(paperRequirements(3, 1, 5));
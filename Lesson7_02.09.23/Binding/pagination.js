const pagination = {
    pages: {},

    currentPageNumber: 1,

    init: function(array, pageSize) {
        if (Object.keys(this.pages).length !== 0) {
            console.log("You have already initiated pages!");
            return;
        }

        let startIdx = 0;
        let endIdx = startIdx + pageSize;
        let pageNumber = 1;

        while (endIdx <= array.length) {
            const value = array.slice(startIdx, endIdx);
            this.pages[pageNumber++] = value;

            startIdx = endIdx;
            endIdx = startIdx + pageSize;
        }

        if (Object.keys(this.pages).length < array.length) {
            this.pages[pageNumber] = array.slice(startIdx);
        }
    },

    getPagesItems: function() {
        console.log(this.pages[this.currentPageNumber]);
    },

    firstPage: function() {
        this.currentPageNumber = Object.keys(this.pages)[0];
        return pagination;
    },

    lastPage: function() {
        this.currentPageNumber = Object.keys(this.pages).at(-1);
        return pagination;
    },

    prevPage: function() {
        this.currentPageNumber -= 1;
        return pagination;
    },

    nextPage: function() {
        this.currentPageNumber += 1;
        return pagination;
    },

    goToPage(pageNumber) {
        this.currentPageNumber = pageNumber;
    },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
pagination.init(alphabetArray, 4);

pagination.getPagesItems();
pagination.nextPage();

pagination.getPagesItems();

pagination.nextPage().nextPage();

pagination.goToPage(3);
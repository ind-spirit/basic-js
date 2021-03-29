const CustomError = require("../extensions/custom-error");



const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value !== undefined) {
            this.chain.push(`( ${value} )`);
        } else {
            this.chain.push(`( )`);
        }
        return this;
    },
    removeLink(position) {
        if (typeof position !== "number" || this.chain[position - 1] === undefined) {
            this.chain = [];
            throw new Error();
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
        
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let res = this.chain;
        this.chain = [];
        return res.join('~~');
    }
};
module.exports = chainMaker;
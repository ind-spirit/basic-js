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
        return this.chain.join('~~');
    }
};

//console.log(chainMaker.chain);
//console.log(chainMaker.addLink('abc'));
//console.log(chainMaker.finishChain());
//console.log(chainMaker.addLink('abc').finishChain())
//console.log(chainMaker.addLink(1).addLink().addLink(2).reverseChain().addLink(3).finishChain());
//chainMaker.addLink('abc').finishChain();
module.exports = chainMaker;
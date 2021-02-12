class HashMap {
    constructor(length) {
        this.hashmap = Array(length).fill(null);
    }

    hash(key) {
        let hashCode = 0;
        for (let char = 0; char < key.length; char++) {
            hashCode += hashCode + key.charCodeAt(char);
        }
        return hashCode % this.hashmap.length
    }


    assign(key, value) {
        const hashBucket = this.hash(key);
        this.hashmap[hashBucket] = value;
    }

    retrieve(key) {
        const hashBucket = this.hash(key);
        return this.hashmap[hashBucket];
    }
};

const myHashMap = new HashMap(5);
myHashMap.assign('Persistence', 'never giving up, even in the face of obstacles');
myHashMap.assign('Growth Mindset', 'the belief that you can always continue to improve');

console.log(myHashMap.hashmap);
console.log(myHashMap.retrieve('Persistence'));
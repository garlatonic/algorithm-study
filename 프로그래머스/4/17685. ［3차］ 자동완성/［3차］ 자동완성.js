class Node {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.head = new Node();
    }
    insert(word) {
        let node = this.head;
        
        for(const w of word) {
            if(!node.children[w]) {
                node.children[w] = new Node();
            }
            
            node = node.children[w];
            node.count++;
        }
    }
    find(word) {
        let node = this.head;
        let count = 0;
        
        for(const w of word) {
            if(node.children[w]) {
                node = node.children[w];
                count++;
            }
            
            if(node.count === 1) return count;
        }
        
        return count;
    }
}

function solution(words) {
    const trie = new Trie();
    for(const word of words) {
        trie.insert(word);
    }
    
    let count = 0;
    for(const word of words) {
        count += trie.find(word);
    }
    
    return count;
}


module.exports = (param, pluginOptions) => {
    traverseNode(param.markdownAST, node => {
        if (node.type === 'link') {
            if (node.url.endsWith('.md')) {
                node.url = `/docs/${node.url.replace('.md','')}`;
            }
        }
    });
    return param.markdownAST;
};


function traverseNode(node, callback) {
    callback(node);
    if (node.children) {
        for (const child of node.children) {
            traverseNode(child, callback)
        }
    }
}

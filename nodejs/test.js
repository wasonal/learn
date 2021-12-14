const menu = { path: 'test/cccc/ccc' }


const stack = [{
    path: 'test',
    children: [{
        path: 'test/aa'
    }, {
        path: 'test/bb'
    }, {
        path: 'test/cccc',
        children: [{
            path: 'test/cccc/ccc'
        }, {
            path: 'test/cccc/ddd'
        }]
    }, {
        path: 'test/tt',
        children: [{
            path: 'test/tt/ccc'
        }, {
            path: 'test/tt/ddd'
        }]
    }]
}, {
    path: 'practice',
}, {
    path: 'exam',
    children: [{
        path: 'exam/aa'
    }, {
        path: 'exam/bb'
    }]
}];

console.log(getLevels(stack, menu));

function getLevels(stack, menu) {
    function dfs(node, target, path, res) {
        if (res.length) {
            return res;
        }
        path.push(node.path);
        if (node.path === target) {
            res.push(...path);
            return res;
        }
        if (node.children && node.children.length) {
            node.children.forEach(child => dfs(child, target, path, res));
        }
        path.pop();
    }
    function findPath(root, target) {
        const path = [];
        const res = [];
        if (!root) {
            return path;
        }
        dfs(root, target, path, res);
        return res;
    }
    return findPath(stack[0], menu.path);
}
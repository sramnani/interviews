//Program to find BFS for a graph


function findPath(parents,targetNode) {
    var result = [targetNode];
    while (parents[targetNode] !== null) {
        targetNode = parents[targetNode];
        result.push(targetNode);
    }
    return result.reverse();
}

function bfs(graph,startNode,targetNode){
    var visited = [];
    var queue = [];
    var parents = [];
    var current ;

    queue.push(startNode);
    visited[startNode] = true;
    parents[startNode] = null;
        while(queue.length){
            current = queue.shift();
            if(current === targetNode){
                return findPath(parents,targetNode);
            }
            for(var i =0;i < graph.length;i++){
                if (i !== current && graph[current][i] && !visited[i]) {
                    parents[i] = current;
                    visited[i] = true;
                    queue.push(i);

                }
            }
        }

}
function dfs(graph,startNode,endNode){
    var stack = [];
    var current;
    var visited = [];
    visited[startNode] = true;
    stack.push(startNode);
    while(stack.length){
        current = stack.pop();
        if(current === endNode){
            return true;
        }
        for(var i =0;i <graph.length;i++){
            if(!visited[i] && graph[current][i]){
                visited[i] = true;
                stack.push(i);
            }
        }
    }
    return false;
}
var graph = [[0, 1 ,0, 1],
    [1, 0 ,1, 0],
    [0, 1, 0 ,1],
    [1, 0, 0, 0]];
console.log(bfs(graph,0,3));
console.log(dfs(graph,1,2));
console.log(dfs(graph,1,5))
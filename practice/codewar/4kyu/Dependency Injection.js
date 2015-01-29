/*Description:

 Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:

 var myDependentFunc = inject(function (secondDepency, firstDependency) {
 firstDependency();
 secondDepency();
 });

 myDependentFunc();
 As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:

 var deps = {
 'firstDependency': function () {return 'this is firstDependency';},
 'secondDepency': function () {return 'this is secondDepency';},
 };
 Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:

 var DI = function (dependency) {
 this.dependency = dependency;
 };
 Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.*/
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
};
// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    // Your code goes here
    var that = this;
    this.FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var args = func.toString()
        .match(this.FN_ARGS)[1]
        .split(', ').join(',')
        .split(',');
    function getDependencies(arr){
        var keys = Object.keys(that.dependency);
        if(arr[0] != '') {
            return arr.map(function (dependencyName) {
                if (keys.indexOf(dependencyName) >= 0) {
                    return that.dependency[dependencyName]
                }
                else {
                    return void(0)
                }
            })
        }
        else{
            return [];
        }
    }
    return function(){
        return func.apply('', getDependencies(args))
    }
};

/*
Create a finite automaton that has three states. Finite automatons are the same as finite state machines for our purposes.

    Our simple automaton, accepts the language of A, defined as {0, 1} and should have three states,
    q1, q2, and q3.

    q1 is our start state. We begin reading commands from here.
    q2 is our accept state. We return true if this is our last state.

    q1 moves to q2 when given a 1, and stays at q1 when given a 0.
q2 moves to q3 when given a 0, and stays at q2 when given a 1.
q3 moves to q2 when given a 0 or 1.

Our automaton should return whether we end in our accepted state, or not (true/false.)

Here's an example.

var a = new Automaton();
// Do anything you need to set up this automaton's states.
var isAccepted = a.readCommands(["1", "0", "0", "1", "0"]);
We make these transitions based on the input of ["1", "0", "0", "1", "0"],

    1 q1 -> q2
0 q2 -> q3
0 q3 -> q2
1 q2 -> q2
0 q2 -> q3
We end in q3, which is not our accept state, so return false.

    The input of ["1", "0", "0", "1", "0"] would cause us to return false, as we would end in q3.

    I have started you off with the bare bones of the Automaton object.

    function Automaton()
{
    this.states = [];
}

Automaton.prototype.readCommands = function(commands)
{
    // Return true if we end in our accept state, false otherwise.
}

var myAutomaton = new Automaton();

// Do anything necessary to set up your automaton's states, q1, q2, and q3.
You will have to design your state objects, and how your Automaton handles transitions. Also make sure you set up the three states, q1, q2, and q3, for the myAutomaton instance. The test fixtures will be calling against myAutomaton.

    As an aside, the automaton accepts an array of strings, rather than just numbers, or a number represented as a string, because the language an automaton can accept isn't confined to just numbers. An automaton should be able to accept any 'symbol.'

Here are some resources on DFAs (the automaton this Kata asks you to create.)

http://www.cs.odu.edu/~toida/nerzic/390teched/regular/fa/dfa-definitions.html
    http://en.wikipedia.org/wiki/Deterministic_finite_automaton
        http://www.cse.chalmers.se/~coquand/AUTOMATA/o2.pdf*/

function Automaton(){
    this.states = ['q1','q2','q3'];
    this.start = 'q1';
    this.accept = 'q2';
    this.rules = {
        'q1':['q1','q2'],
        'q2':['q3','q2'],
        'q3':['q2','q2']
    }

}

Automaton.prototype.readCommands = function(commands){
    // Return true if we end in our accept state, false otherwise.
    var that = this;
    return commands.reduce(function(p,v){
            return that.rules[p][parseInt(v)]
        },this.start) === this.accept;
}

var myAutomaton = new Automaton();

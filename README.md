                                                                              ALGOTITHMS
   
### [A] What is  Algorithms ?
Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a certain order to get the desired output. Algorithms are generally created independent of underlying languages, i.e. an algorithm can be implemented in more than one programming language.

### [B] Types of Algorithms

Well there are many types of algorithm but the most fundamental types of algorithm are:

#### 1. Recursive algorithms :-
Solves the base case directly and then recurs with a simpler or easier input every time (A base value is set at the starting for which the algorithm terminates).
It is use to solve the problems which can be broken into simpler or smaller problems of same type.
##### Example:

To find factorial using recursion, here is the pseudo code:

    Fact(x)
     If x is 0      /*0 is the base value and x is 0 is base case*/
         return 1
     return (x*Fact(x-1))  /* breaks the problem into small problems*/
#### 2. Dynamic programming algorithm :-
A dynamic programming algorithm (also known as dynamic optimization algorithm) remembers the past result and uses them to find new result means it solve complex problems by breaking it down into a collection of simpler subproblems, then solving each of those subproblems only once ,and storing their solution for future use instead of recomputing their solutions again.

##### Example:
Fibonacci sequence, here is the pseudo code :

    Fib(n)
    if n=0
	    return 0
	else
	    prev_Fib=0,curr_Fib=1
	repeat n-1 times  /*if n=0 it will skip*/
	    next_Fib=prev_Fib+curr_Fib   
	    prev_Fib=curr_Fib
	    curr_Fib=new_Fib
	return curr_Fib

#### 3. Backtracking algorithm:-
How about we learn backtracking using an example so let’s say we have a problem “Monk” and we divide it into four smaller problems “M, R, A, A”. It may be the case that the solution of these problems did not get accepted as the solution of “Monk”.

In fact we did not know on which one it depends. So we will check each one of them one by one until we find the solution for “Monk”.

So basically we attempt solving a subproblem but if we did not reach the desired solution undo whatever you have done and start from the scratch again until you find the solution.

##### Example:
    Queens Problem

#### 4. Divide and conquer algorithm :-
Divide and conquer consist of two parts first of all it divides the problems into smaller subproblems of the same type and solve them solve them recusively and then combine them to to form the solution of the original problem.

##### Example:

    Quick sort, Merge sort
#### 5. Greedy algorithm :-
Greedy algorithm is an algorithm that solves the problem by taking optimal solution at the local level (without regards for any consequences) with the hope of finding optimal solution at the global level.

Greedy algorithm is used to find the optimal solution but it is not necessary that you will definitely find the optimal solution by following this algorithm.

Like there are some problems for which an optimal solution does not exist (currently) these are called NP complete problem.

##### Example:

    Huffman tree, Counting money
#### 6. Brute Force algorithm :-
A brute force algorithm simply tries all the possibilities until a satisfactory solution is found.

Such types of algorithm are also used to find the optimal (best) solution as it checks all the possible solutions.

And also used for finding a satisfactory solution (not the best), simply stop as soon as a solution of the problem is found.

##### Example:

    Exact string matching algorithm
#### 7. Randomized algorithm :-
A randomized algorithm uses a random number at least once during the computation to make a decision.

##### Example:

    Quick sort

As we use random number to choose the pivot point.



### [C] How to Write an Algorithms ?
There are no well-defined standards for writing algorithms. Rather, it is problem and resource dependent. Algorithms are never written to support a particular programming code.

As we know that all programming languages share basic code constructs like loops (do, for, while), flow-control (if-else), etc. These common constructs can be used to write an algorithm.

We write algorithms in a step-by-step manner, but it is not always the case. Algorithm writing is a process and is executed after the problem domain is well-defined. That is, we should know the problem domain, for which we are designing a solution.

### [D] Algorithms  Analysis
Efficiency of an algorithm can be analyzed at two different stages, before implementation and after implementation. They are the following −

#### 1. Priori Analysis :- 
This is a theoretical analysis of an algorithm. Efficiency of an algorithm is measured by assuming that all other factors, for example, processor speed, are constant and have no effect on the implementation.

#### 2. Posterior Analysis :- 
This is an empirical analysis of an algorithm. The selected algorithm is implemented using programming language. This is then executed on target computer machine. In this analysis, actual statistics like running time and space required, are collected.

We shall learn about a priori algorithm analysis. Algorithm analysis deals with the execution or running time of various operations involved. The running time of an operation can be defined as the number of computer instructions executed per operation.

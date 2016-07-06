//371. Sum of Two Integers

#include <iostream>
using namespace std;

class Solution {
public:
    int getSum(int a, int b) {
        int s = a ^ b;
        int carry = a & b;

        if (carry == 0) return s;
        else return getSum(s, carry << 1);
    }
};

int main(int argc, const char * argv[]) {
    Solution solution;
    cout << solution.getSum(1,2) <<endl;
    return 0;
}

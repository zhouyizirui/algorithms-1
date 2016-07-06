//258. Add Digits

#include <iostream>
using namespace std;

class Solution {
public:
    int addDigits(int num) {
        return 1 + (num-1)%9;
    }

};

int main(int argc, const char * argv[]) {
    Solution solution;
    cout << solution.addDigits(87) <<endl;
    return 0;
}

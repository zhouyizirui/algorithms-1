//292. Nim Game

#include <iostream>
using namespace std;

class Solution {
public:
    bool canWinNim(int n) {
        return n % 4 != 0;
    }
};

int main(int argc, const char * argv[]) {
    Solution solution;
    cout << solution.canWinNim(4) <<endl;
    return 0;
}

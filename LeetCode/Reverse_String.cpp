//344. Reverse String

#include <iostream>
using namespace std;

class Solution {
public:
    string reverseString(string s) {
        int left = 0, right = s.size() - 1;
        while(left < right){
            char temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }
        return s;
    }
};

int main(int argc, const char * argv[]) {
    Solution solution;
    cout << solution.reverseString("abcd") <<endl;
    return 0;
}

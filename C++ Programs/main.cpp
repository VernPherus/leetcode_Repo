#include <iostream>
#include <math.h>
using namespace std;

int main(){
    double rad;
    const double Pi = 3.14;

    cout << "---Circle Area Calculator---" << endl;
    cout << "Enter circle radius: ";
    cin >> rad;

    double result = Pi * pow(rad, 2);
    cout << "The result is: " << result << endl;
    cout << "--Process end---";

    return 0;
}
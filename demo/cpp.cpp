// Comment
/* Comment again */

#include "some_file"

using namespace std;

class Line {
   public:
      void setLength( double len );
      double getLength( void );
      Line(double len);
 
   private:
      double length;
};

Line::Line( double len) {
   cout << "Object is being created, length = " << len << endl;
   length = len;
}
void Line::setLength( double len ) {
   length = len;
}
double Line::getLength( void ) {
   return length;
}

int main()
{
   std::string s0 ("Initial string");
   printf("log")
   return 0;
}

std::string do_something ( std::string inval )
{
   std::string return_val;
   return return_val;
}

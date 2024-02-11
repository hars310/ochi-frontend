#include<bits/stdc++.h> 
using namespace std;

const string FLAG_STR= "flag";

string bitstuffed(string &s){
  string output="";
  output+=FLAG_STR;
  int cnt=0;
  for(int i=0;i<s.length();i++){
    if(s[i]=='1'){
      cnt++;
      
    }
     output+=s[i];
    if(cnt==5){
      output+='0';
      cnt=0;
    }
   

  }
  output+=FLAG_STR;
  
  return output;
  
}

string bytestuffed(vector<string> &arr){
    string output="";
    string escape="escape";

    output+=FLAG_STR;

    for(int i=0;i<arr.size();i++){
        if(arr[i]== FLAG_STR || arr[i]==escape){
            output+=escape;
        }
        
        output+=arr[i];

    }

    output+=FLAG_STR;
    return output;
}

int main(){
  vector<string> strArray;
  
  int l;
  cout<<"length of  the input: ";
  cin>>l;
  
  for(int i=0;i<l;i++){
    string s;
    cin>>s;
    strArray.push_back(s);
  }
  
  
//   cout<<"answer of bit stuffed: "<<bitstuffed(s);
  cout<<"answer of byte stuffed: "<<bytestuffed(strArray);

  
  
  return 0;
  
}
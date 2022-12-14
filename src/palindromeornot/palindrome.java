package palindromeornot;

public class palindrome {
public static void main(String[] args) {
	int no=121;
	int copy=no;
	int rev=0;
	while(no!=0)
	{
		int rem=no%10;
		rev=(rev*10)+rem;
		no=no/10;
	}
	if(copy==rev)
	{
		System.out.println("it is a palindrome");
	}
	else
	{
		System.out.println("it is not a palindrome");
	}
	
}
}

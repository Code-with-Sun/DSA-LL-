/*
Topic:  Linear serach:

Q. Given an array int arr[]={2,1,2,4,3,5,6}
                                  target = ?
1.  Find 1st occurrence number,  target = 1.
output: 1 (index)
2.  Find multiple occurrence number,  target = 2.
output: [0,2] (index)
3. Find last occurrence number, target = 2 (return last occurrence index).
output: 2 (index)
4. Find max and min
output: max= 6 min = 1 (index)
*/

#include <stdio.h>
#include <limits.h>
void first(int arr[], int n, int tar)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == tar)
        {
            printf("The 1st occurrence number %d found in index no. %d", tar, i);
            break;
        }
    }
}
void multiple(int arr[], int n, int tar)
{
    printf("Multiple occurrence index are : ");
    for (int i = 0; i < n - 1; i++)
    {
        if (arr[i] == tar)
        {
            printf("%d ", i);
        }
    }
}
void last(int arr[], int n, int tar)
{
    for (int i = n - 1; i >= 0; i--)
    {
        if (arr[i] == tar)
        {
            printf("The last occurrence number %d found in index no. %d", tar, i);
            break;
        }
    }
}
void max(int arr[], int n)
{
    int index = -1;
    int maxi = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (maxi < arr[i])
        {
            maxi = arr[i];
            index = i;
        }
    }
    printf("MAX = %d -> Index = %d\n", maxi, index);
}
void min(int arr[], int n)
{
    int index = -1;
    int mini = INT_MAX;
    for (int i = 0; i < n; i++)
    {
        if (mini > arr[i])
        {
            mini = arr[i];
            index = i;
        }
    }
    printf("MIN = %d -> Index = %d", mini, index);
}
int main()
{
    int arr[] = {2, 1, 2, 4, 3, 5, 6};
    int n = sizeof(arr) / sizeof(int);
    int target;
    int ch;
    do
    {
        printf("\n1. Find 1st occurrence number\n2. Find multiple occurrence number\n3. Find last occurrence number\n4. Find max and min\n5.Exit\nChoose an option : ");
        scanf("%d", &ch);
        while (ch < 4)
        {
            printf("Enter the target number : ");
            scanf("%d", &target);
            int flag = 0;
            for (int i = 0; i < n; i++)
            {
                if (arr[i] == target)
                {
                    flag = 1;
                }
            }
            if (flag == 0)
            {
                printf("Target item is not exist.\nEnter a valid item : ");
                scanf("%d", &target);
            }
            break;
        }
        switch (ch)
        {
        case 1:
            first(arr, n, target);
            break;
        case 2:
            multiple(arr, n, target);
            break;
        case 3:
            last(arr, n, target);
            break;
        case 4:
            max(arr, n);
            min(arr, n);
            break;
        case 5:
            printf("You are successfully exit.");
            break;
        default:
            printf("Plz choose option from the above list.\n");
            break;
        }
    } while (ch != 5);

    return 0;
}
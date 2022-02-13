def insertion_sort(x):
  for i in range(len(x)):
    selection = x[i]
    position = i

    while position > 0 and x[position - 1] > selection:
      x[position] = x[position - 1]
      position = position - 1

    x[position] = selection

  return(x)

my_test_list = [5,7,3,2,4,6]
print(insertion_sort(my_test_list))

def binary_search(x, search_item):

    if len(x) == 0:
        return False
    mid = len(x) // 2
    if x[mid] == search_item:
        return True
    if search_item < x[mid]:
        return binary_search(x[:mid], search_item)
    else:
        return binary_search(x[mid + 1 :], search_item)

a_list = [2,3,4,5,8]
print(a_list)
print(binary_search(a_list, 2))
print(binary_search(a_list, 7))

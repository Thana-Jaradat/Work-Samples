import xmlrpc.client
proxy = xmlrpc.client.ServerProxy('http://localhost: 3000')
print(proxy.add(2, 3))
print(proxy.add(3, 4))
arr = [4, 2, 0]
arr = proxy.sortArr(arr)
# printing the sorted array
for i in range(len(arr)):
    print (arr[i])

print(proxy.system.listMethods())

from xmlrpc.server import SimpleXMLRPCServer
from xmlrpc.server import SimpleXMLRPCRequestHandler

class RequestHandler(SimpleXMLRPCRequestHandler):
    rpc_paths = ('/RPC2',)
server = SimpleXMLRPCServer(('localhost', 3000), logRequests = True)#, allow_none = True)
server.register_introspection_functions() 
print("Listening on port 3000...")
def add(i, j):
    return i + j

def sortArr(arr):
    arr.sort()
    return arr
    
server.register_function(add)
server.register_function(sortArr)
server.serve_forever()
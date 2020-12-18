  
from http.server import HTTPServer, BaseHTTPRequestHandler
import Setup as sss

class Serv(BaseHTTPRequestHandler):
    
    def do_GET(self):
        print(self.path)
        release, path = sss.ActionSetup(self.path)
        print(path)
        if release == True:
            print(self.path)
            pass
        


        try:
            file_to_open = load_binary(path);
            self.send_response(200)
        except:
            file_to_open = "File not found, but I'm here ;)"
            self.send_response(404)
            file_to_open = bytes(file_to_open,'utf-8')
        self.end_headers()
        self.wfile.write(file_to_open)

def launch():
    httpd = HTTPServer(('localhost', 8080), Serv)
    httpd.serve_forever()
    pass

def load_binary(file):
    with open(file, 'rb') as file:
        return file.read()

launch()
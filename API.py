  
from http.server import HTTPServer, BaseHTTPRequestHandler
import Setup as sss

class Serv(BaseHTTPRequestHandler):
    
    def do_GET(self):
        sss.ActionSetup(self.path)
        if self.path!='/log':
            print(self.path)
            pass
        
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found, but I'm here ;)"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

def launch():
    httpd = HTTPServer(('localhost', 8080), Serv)
    httpd.serve_forever()
    pass

launch()
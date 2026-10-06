"""Validate local assets, fragments, labels and deployment-safe relative paths."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse,unquote

root=Path(__file__).resolve().parents[1]/'dist'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=set();self.refs=[];self.controls=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:
   assert a['id'] not in self.ids,'Duplicate id: '+a['id'];self.ids.add(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='img':assert 'alt' in a,'Image requires alt text'
  for key in ('href','src'):
   if a.get(key):self.refs.append(a[key])
  for key in ('aria-controls','aria-labelledby'):
   self.controls.extend((a.get(key) or '').split())
page=Page();page.feed((root/'index.html').read_text())
assert page.h1==1,'Use one page heading'
for ref in page.refs:
 p=urlparse(ref)
 if p.scheme or p.netloc:continue
 assert not p.path.startswith('/'),'Use relative paths for GitHub project Pages: '+ref
 if p.path:assert (root/unquote(p.path)).is_file(),'Missing asset: '+ref
 if p.fragment and not p.path:assert p.fragment in page.ids,'Missing fragment: '+ref
for control in page.controls:assert control in page.ids,'Missing ARIA target: '+control
assert len(list(root.rglob('*')))<30,'Unexpected files in static output'
for file in root.rglob('*'):
 if file.is_file():assert file.suffix not in ('.pem','.sqlite3','.mp4','.zip'),'Unexpected private or app file'
assert (root/'.nojekyll').is_file()
print('PASS: local assets, anchor links, ARIA targets, one H1, relative paths and public-file boundaries')

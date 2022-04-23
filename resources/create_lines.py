from math import sin, cos, pi
r=168
angles = [(d,d*pi/180) for d in range(0,360)]
xy = [(d,r+round(r*cos(a)),r+round(r*sin(a))) for d,a in angles]
for d,x,y in xy:
  print(f'<line id="t{d}" x1="168" y1="168" x2="{x}" y2="{y}" stroke-width="20" fill="lime"/>')
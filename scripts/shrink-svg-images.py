"""Re-encode oversized bitmaps embedded in SVGs as WebP at 3x their display size.

Usage: python scripts/shrink-svg-images.py [--box WxH] public/Hero/main/*.svg
--box gives the area the bitmaps actually fill, in SVG units, when it is smaller than the whole SVG.
The <image> width/height attributes are left alone, so pattern transforms keep working.
"""
import base64, io, re, sys
from PIL import Image

SCALE = 3  # device pixels per SVG user unit
IMG = re.compile(r'(<image\b[^>]*?xlink:href=")data:image/(png|jpe?g);base64,([^"]+)(")')

def shrink(path, box=None):
    svg = open(path, encoding='utf-8').read()
    view_w = float(re.search(r'<svg[^>]*\bwidth="([\d.]+)"', svg).group(1))
    view_h = float(re.search(r'<svg[^>]*\bheight="([\d.]+)"', svg).group(1))
    if box:
        view_w, view_h = box
    before = len(svg)

    def repl(m):
        im = Image.open(io.BytesIO(base64.b64decode(m.group(3))))
        # Cover, not contain: patterns often crop the bitmap, so both sides must reach the target.
        ratio = max(view_w * SCALE / im.width, view_h * SCALE / im.height)
        if ratio < 1:
            im = im.resize((round(im.width * ratio), round(im.height * ratio)), Image.LANCZOS)
        if im.mode not in ('RGB', 'RGBA'):
            im = im.convert('RGBA')
        buf = io.BytesIO()
        im.save(buf, 'WEBP', quality=85, method=6)
        return f'{m.group(1)}data:image/webp;base64,{base64.b64encode(buf.getvalue()).decode()}{m.group(4)}'

    out = IMG.sub(repl, svg)
    open(path, 'w', encoding='utf-8', newline='').write(out)
    print(f'{path}: {before // 1024} KB -> {len(out) // 1024} KB')

args = sys.argv[1:]
box = None
if args and args[0] == '--box':
    box = tuple(float(n) for n in args[1].split('x'))
    args = args[2:]
for p in args:
    shrink(p, box)

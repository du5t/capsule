# capsule

## how to use

### set up a URI handler for protocol ssb-capsule

put something like this in ~/.local/share/applications (linux):

```
[Desktop Entry]
Name=capsule
GenericName=capsuleURI
X-GNOME-FullName=capsule URI handler
Comment=send capsule URI text to sbot
Exec=/home/user/capsule/os/parser %u
Terminal=false
NoDisplay=true
Type=Application
StartupNotify=true
MimeType=x-scheme-handler/ssbcapsule
Categories=Network;P2P
```

### install addon and use

2. `git clone`
1. `npm install`
3. visit chrome extensions menu (chrome://extensions)
4. check developer mode checkbox
5. load unpacked extension from capsule/chromium
6. visit a tab
7. select some things
8. click the addon icon
9. type some fun comments
10. choose a channel/topic it should be filed under
11. hit send
12. share your new cypherspace reblogging exploits


## TODO

- [x] strip out non-UI code from addon
- [x] build proper fork of [ssbify](https://github.com/krl/ssbify) that takes an
  html string
    - see [ssbify-string](https://github.com/du5t/ssbify-string)
- [x] write parser/handler script using above fork
- [x] add comment field to serialiser and parser
- [ ] automate
  xdg-open/open/[windows registry horror](https://msdn.microsoft.com/en-us/library/aa767914(v=vs.85).aspx)
  registration
- [ ] document
- [ ] release
- [ ] dance

## credits

- icon adapted from
  [open clipart](http://colouringbook.org/art/svg/coloring-book/sputnik-comic-satellite-electronics-coloring-book-colouring-scallywag-coloring-book-colouring-sheet-coloring-book-colouring-page-colouringbook-org-svg)
- [ssbify](https://github.com/krl/ssbify)
- DOM extractor from [SnappySnippet](https://github.com/kdzwinel/SnappySnippet/)
